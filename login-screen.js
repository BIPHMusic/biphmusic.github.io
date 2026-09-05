function injectLoginStyles() {
    if (document.getElementById('biph-login-styles')) return;
    const style = document.createElement('style');
    style.id = 'biph-login-styles';
    style.textContent = `
        #login-screen {
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.6s ease;
        }
        .login-box {
            background: rgba(255,255,255,0.95);
            padding: 40px 30px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            max-width: 380px;
            color: #344d87;
        }
        .login-box h1.Title {
            margin: 0 0 8px 0;
            font-size: 2.4em;
        }
        .login-box .Subtitle {
            margin-bottom: 25px;
            color: #344d87;
        }
        .login-box input {
            width: 100%;
            padding: 14px;
            margin: 2px 0;
            font-size: 1.1em;
            border: 2px solid #ccc;
            border-radius: 6px;
            box-sizing: border-box;
        }
        .login-box button {
            width: 100%;
            padding: 14px;
            font-size: 1.1em;
            background: #3b6cac;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 10px;
        }
        .login-box button:hover {
            background: #3680ce;
        }
        .error {
            color: #c00;
            margin-top: 10px;
            min-height: 1.2em;
        }
    `;
    document.head.appendChild(style);
}

function createLoginScreen() {
    injectLoginStyles();
    const loginHTML = `
    <div id="login-screen">
        <div class="login-box">
            <h1 class="Title" style="margin-top:-10px; font-size: 2rem;">BIPH</h1>
            <h1 class="Subtitle" style="margin-top:-10px; font-size: 1.6rem; margin-bottom: 10px;">AP Music Theory</h1>
            <h2>Enter your login credentials</h2>
            <input type="text" id="name-input" placeholder="Your name" autofocus autocomplete="username" autocorrect="off" autocapitalize="off" spellcheck="false">
            <input type="password" id="password-input" placeholder="Password" autocomplete="current-password" autocorrect="off" autocapitalize="off" spellcheck="false">
            <button onclick="handleLogin()">Begin</button>
            <div id="error-message" class="error"></div>
        </div>
    </div>`;
    const temp = document.createElement('div');
    temp.innerHTML = loginHTML;
    document.body.appendChild(temp.firstElementChild);
}

function normalizeName(name) {
    return name.trim().toLowerCase();
}

function findStudent(inputName) {
    const lowerInput = normalizeName(inputName);
    return apStudents.find(student =>
        normalizeName(student.name) === lowerInput ||
        normalizeName(student.altName) === lowerInput
    );
}

function capitalizeName(name) {
    return name.trim().split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

async function hashTeacherPassword(password) {
    const encoder = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
        "raw",
        encoder.encode(password),
        "PBKDF2",
        false,
        ["deriveBits"]
    );
    const derivedBits = await crypto.subtle.deriveBits(
        {
            name: "PBKDF2",
            salt: hexToBytes(teacherPasswordSalt),
            iterations: 250000,
            hash: "SHA-256"
        },
        keyMaterial,
        256
    );
    return bytesToHex(new Uint8Array(derivedBits));
}

function hexToBytes(hex) {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < bytes.length; i++) {
        bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
    }
    return bytes;
}

function bytesToHex(bytes) {
    return Array.from(bytes).map(byte => byte.toString(16).padStart(2, '0')).join('');
}

function getStoredName() {
    const name = localStorage.getItem('biph_student_name');
    const timestamp = localStorage.getItem('biph_name_timestamp');
    if (!name || !timestamp) return null;
    if (Date.now() - parseInt(timestamp) > 60 * 60 * 1000) {
        localStorage.removeItem('biph_student_name');
        localStorage.removeItem('biph_name_timestamp');
        localStorage.removeItem('biph_user_role');
        return null;
    }
    return name;
}

function storeName(name, role = 'student') {
    localStorage.setItem('biph_student_name', name);
    localStorage.setItem('biph_name_timestamp', Date.now().toString());
    localStorage.setItem('biph_user_role', role);
    window.biphIsTeacher = role === 'teacher';
}

async function handleLogin() {
    const input = document.getElementById('name-input');
    const passwordInput = document.getElementById('password-input');
    const error = document.getElementById('error-message');
    const rawName = input.value.trim();
    const rawPassword = passwordInput.value.trim();

    if (!rawName) {
        error.textContent = "Please enter your first name";
        return;
    }

    if (!rawPassword) {
        error.textContent = "Please enter your password";
        return;
    }

    if (normalizeName(rawName) === normalizeName(teacherName)) {
        const passwordHash = await hashTeacherPassword(rawPassword);
        if (passwordHash !== teacherPasswordHash) {
            error.textContent = "Incorrect password";
            passwordInput.value = "";
            return;
        }

        const displayName = teacherName;
        storeName(displayName, 'teacher');
        const loginScreen = document.getElementById('login-screen');
        loginScreen.style.opacity = '0';

        setTimeout(() => {
            loginScreen.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';

            if (typeof restoreNormalMenu === 'function') {
                restoreNormalMenu();
            }

            if (typeof initMyMenu === 'function') {
                initMyMenu(false);
            }

            if (typeof window.onSuccessfulLogin === 'function') {
                window.onSuccessfulLogin(displayName);
            }

            if (typeof window.onTeacherLogin === 'function') {
                window.onTeacherLogin(displayName);
            }
        }, 600);

        return;
    }

    const student = findStudent(rawName);

    if (!student) {
        error.innerHTML = "Name not recognized.<br>(First name only)";
        input.value = "";
        passwordInput.value = "";
        return;
    }

    const expectedPassword = normalizeName(student.name) + normalizeName(student.name);

    if (normalizeName(rawPassword) !== expectedPassword) {
        error.textContent = "Incorrect password";
        passwordInput.value = "";
        return;
    }

    const displayName = capitalizeName(student.name);
    storeName(displayName, 'student');
    const loginScreen = document.getElementById('login-screen');
    loginScreen.style.opacity = '0';

    setTimeout(() => {
        loginScreen.style.display = 'none';
        document.getElementById('main-content').style.display = 'block';

        if (typeof restoreNormalMenu === 'function') {
            restoreNormalMenu();
        }

        if (typeof initMyMenu === 'function') {
            initMyMenu(false);
        }

        if (typeof window.onSuccessfulLogin === 'function') {
            window.onSuccessfulLogin(displayName);
        }
    }, 600);
}

function addEnterKeyListener() {
    const nameInput = document.getElementById('name-input');
    const passwordInput = document.getElementById('password-input');

    if (nameInput) {
        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                passwordInput && passwordInput.focus();
            }
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleLogin();
        });
    }
}

function initLogin() {
    const storedName = getStoredName();

    if (storedName) {
        window.biphIsTeacher = localStorage.getItem('biph_user_role') === 'teacher';
        document.getElementById('main-content').style.display = 'block';

        if (typeof restoreNormalMenu === 'function') {
            restoreNormalMenu();
        }

        if (typeof window.onSuccessfulLogin === 'function') {
            window.onSuccessfulLogin(storedName);
        }

        if (window.biphIsTeacher && typeof window.onTeacherLogin === 'function') {
            window.onTeacherLogin(storedName);
        }

        if (typeof initMyMenu === 'function') {
            initMyMenu(false);
        }
    } else {
        window.biphIsTeacher = false;
        createLoginScreen();
        const loginScreen = document.getElementById('login-screen');
        loginScreen.style.display = 'flex';
        addEnterKeyListener();

        if (typeof showSimpleMenu === 'function') {
            showSimpleMenu();
        }

        if (typeof initMyMenu === 'function') {
            initMyMenu(true);
        }
    }
}

window.handleLogin = handleLogin;
window.initLogin = initLogin;