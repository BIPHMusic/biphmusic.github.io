function injectLoginStyles() {
    if (document.getElementById('biph-login-styles')) return; // Prevent duplicates

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
            margin: 15px 0;
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

// Create login overlay
function createLoginScreen() {
    injectLoginStyles();

    const loginHTML = `
    <div id="login-screen">
        <div class="login-box">
            <h1 class="Title" style="margin-top:-10px; font-size: 2rem;">BIPH</h1>
            <h1 class="Subtitle" style="margin-top:-10px; font-size: 1.6rem; margin-bottom: 10px;">AP Music Theory</h1>
            <h2>Enter your name to begin</h2>
            
            <input 
                type="text" 
                id="name-input" 
                placeholder="Your name" 
                autofocus
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
            >
            
            <button onclick="handleLogin()">Begin</button>
            <div id="error-message" class="error"></div>
        </div>
    </div>`;

    const temp = document.createElement('div');
    temp.innerHTML = loginHTML;
    document.body.appendChild(temp.firstElementChild);
}

// Rest of the logic (unchanged)
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

function getStoredName() {
    const name = localStorage.getItem('biph_student_name');
    const timestamp = localStorage.getItem('biph_name_timestamp');
    if (!name || !timestamp) return null;
    if (Date.now() - parseInt(timestamp) > 60 * 60 * 1000) {
        localStorage.removeItem('biph_student_name');
        localStorage.removeItem('biph_name_timestamp');
        return null;
    }
    return name;
}

function storeName(name) {
    localStorage.setItem('biph_student_name', name);
    localStorage.setItem('biph_name_timestamp', Date.now().toString());
}

function handleLogin() {
    const input = document.getElementById('name-input');
    const error = document.getElementById('error-message');
    const rawName = input.value.trim();

    if (!rawName) {
        error.textContent = "Please enter your first name";
        return;
    }

    const student = findStudent(rawName);
    if (!student) {
        error.innerHTML = "Name not recognized.<br>(First name only)";
        input.value = "";
        return;
    }

    const displayName = capitalizeName(student.name);
    storeName(displayName);
    
    const loginScreen = document.getElementById('login-screen');
    loginScreen.style.opacity = '0';
    
    setTimeout(() => {
        loginScreen.style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        
        if (typeof window.onSuccessfulLogin === 'function') {
            window.onSuccessfulLogin(displayName);
        }
    }, 600);
}

function addEnterKeyListener() {
    const input = document.getElementById('name-input');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleLogin();
        });
    }
}

function initLogin() {
    const storedName = getStoredName();
    
    if (storedName) {
        document.getElementById('main-content').style.display = 'block';
        if (typeof window.onSuccessfulLogin === 'function') {
            window.onSuccessfulLogin(storedName);
        }
    } else {
        createLoginScreen();
        const loginScreen = document.getElementById('login-screen');
        loginScreen.style.display = 'flex';
        addEnterKeyListener();
        
        if (typeof initMyMenu === 'function') {
            initMyMenu(true);   // hide profile menu while on login screen
        }
    }
}

window.handleLogin = handleLogin;
window.initLogin = initLogin;