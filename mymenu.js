const BIPH_LOGIN_REMEMBERED_KEY = 'biph_remembered_login';
const BIPH_LOGIN_TIMESTAMP_KEY = 'biph_login_timestamp';
const BIPH_LOGOUT_TIMESTAMP_KEY = 'biph_logout_timestamp';


function injectLoginStyles() {
    if (document.getElementById('biph-login-styles')) return;

    const style = document.createElement('style');
    style.id = 'biph-login-styles';

    style.textContent = `
        #login-screen {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.6s ease;
            box-sizing: border-box;
        }

        .login-box {
            background: rgba(255, 255, 255, 0.95);
            padding: 40px 30px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            width: calc(100% - 40px);
            max-width: 380px;
            box-sizing: border-box;
            color: #344d87;
        }

        .login-box h1.Title {
            margin: 0 0 8px;
            font-size: 2.4em;
        }

        .login-box .Title {
            white-space: nowrap;
            text-align: center;
        }

        .login-box .Subtitle {
            margin: 0 0 10px;
            color: #344d87;
            font-size: 1.3rem !important;
            line-height: 1.2;
            white-space: nowrap !important;
            text-align: center;
            letter-spacing: normal;
        }

        .login-box h2 {
            margin: 18px 0 10px;
            font-size: 1.15rem;
        }

        .login-box input {
            display: block;
            width: 100%;
            padding: 14px;
            margin: 2px 0;
            font-size: 1.1em;
            border: 2px solid #ccc;
            border-radius: 6px;
            box-sizing: border-box;
        }

        .login-box button {
            appearance: none;
            -webkit-appearance: none;
            display: block;
            width: 100%;
            padding: 14px;
            font-size: 1.1em;
            font-family: Arial, sans-serif;
            background: #3b6cac;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 10px;
            box-sizing: border-box;
        }

        .login-box button:hover {
            background: #3680ce;
        }

        .login-box button:disabled {
            opacity: 0.65;
            cursor: wait;
        }

        .error {
            color: #c00;
            margin-top: 10px;
            min-height: 1.2em;
        }

        /* Profile menu */

        #my-profile-menu {
            width: 36px;
            height: 36px;
            position: absolute;
            top: 16px;
            right: 16px;
            z-index: 10000;
            font-family: Arial, sans-serif;
        }

        #profile-icon {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #3b6cac;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
            transition: transform 0.2s;
            box-sizing: border-box;
            user-select: none;
        }

        #profile-icon:hover {
            transform: scale(1.05);
        }

        #profile-dropdown {
            display: none;
            position: absolute;
            top: 44px;
            right: 0;
            min-width: 160px;
            background: rgba(255, 255, 255, 0.98);
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            font-family: Arial, sans-serif;
            font-size: 13px;
            color: #111;
        }

        #profile-dropdown .profile-name {
            padding: 8px 12px;
            background: #f0f4f8;
            font-weight: bold;
            color: #34405d;
            font-size: 13px;
            overflow-wrap: anywhere;
        }

        /*
         * Reset browser and site-wide button styles.
         * Each menu button fills the entire dropdown row.
         */

        #profile-dropdown .menu-btn {
            appearance: none;
            -webkit-appearance: none;
            display: block;
            box-sizing: border-box;
            width: 100%;
            margin: 0;
            padding: 12px;
            border: none !important;
            border-radius: 0;
            outline: none;
            box-shadow: none;
            background: transparent;
            color: #111;
            text-align: left;
            font-family: Arial, sans-serif;
            font-size: 13px;
            font-weight: normal;
            line-height: 1.4;
            cursor: pointer;
            transition: background 0.2s, padding-left 0.2s;
        }

        #profile-dropdown .menu-btn:hover {
            background: #f0f4f8;
            padding-left: 16px;
        }

        #profile-dropdown .menu-btn:focus,
        #profile-dropdown .menu-btn:active {
            outline: none;
            box-shadow: none;
        }

        #profile-dropdown #signout-btn:hover {
            background: #ffebee;
            color: #d32f2f;
        }

        #profile-dropdown hr {
            margin: 3px 0;
            border: none;
            border-top: 1px solid #eee;
        }

        @media (max-width: 420px) {
            .login-box {
                padding: 32px 22px;
            }

            .login-box .Subtitle {
                font-size: 1.15rem !important;
            }
        }
    `;

    document.head.appendChild(style);
}


/* =========================================================
   LOGIN SCREEN
   ========================================================= */

function createLoginScreen() {
    injectLoginStyles();

    const existing = document.getElementById('login-screen');

    if (existing) return existing;

    const loginHTML = `
        <div id="login-screen">
            <div class="login-box">

                <h1 class="Title"
                    style="margin:0 0 8px; font-size:2rem; line-height:1.2;">
                    BIPH
                </h1>

                <h1 class="Subtitle"
                    style="font-family:zapfino;">
                    AP Music Theory
                </h1>

                <h2>Enter your login credentials</h2>

                <input
                    type="text"
                    id="name-input"
                    placeholder="Your name"
                    autocomplete="username"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                >

                <input
                    type="password"
                    id="password-input"
                    placeholder="Password"
                    autocomplete="current-password"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                >

                <button type="button" id="biph-login-button">
                    Begin
                </button>

                <div id="error-message" class="error" style="margin-bottom: -25px; margin-top: 10px"></div>

            </div>
        </div>
    `;

    const temp = document.createElement('div');
    temp.innerHTML = loginHTML.trim();

    const loginScreen = temp.firstElementChild;

    document.body.appendChild(loginScreen);

    loginScreen
        .querySelector('#biph-login-button')
        .addEventListener('click', handleLogin);

    addEnterKeyListener();

    return loginScreen;
}


function notifyBiphLoginChanged() {
    window.dispatchEvent(new Event("biph-login-changed"));
}


/* =========================================================
   NAME HELPERS
   ========================================================= */

function normalizeName(name) {
    return String(name || '').trim().toLowerCase();
}


function findStudent(inputName) {
    const lowerInput = normalizeName(inputName);

    if (
        typeof apStudents === 'undefined' ||
        !Array.isArray(apStudents)
    ) {
        console.error('Login error: apStudents is unavailable.');
        return null;
    }

    return apStudents.find(student =>
        normalizeName(student.name) === lowerInput ||
        normalizeName(student.altName) === lowerInput
    );
}


function capitalizeName(name) {
    return String(name || '')
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map(word =>
            word.charAt(0).toUpperCase() +
            word.slice(1).toLowerCase()
        )
        .join(' ');
}


/* =========================================================
   PASSWORD HASHING
   ========================================================= */

async function hashTeacherPassword(password) {
    const encoder = new TextEncoder();

    const keyMaterial = await crypto.subtle.importKey(
        'raw',
        encoder.encode(password),
        'PBKDF2',
        false,
        ['deriveBits']
    );

    const derivedBits = await crypto.subtle.deriveBits(
        {
            name: 'PBKDF2',
            salt: hexToBytes(teacherPasswordSalt),
            iterations: 250000,
            hash: 'SHA-256'
        },
        keyMaterial,
        256
    );

    return bytesToHex(new Uint8Array(derivedBits));
}


async function hashStudentPassword(password, salt) {
    const encoder = new TextEncoder();

    const keyMaterial = await crypto.subtle.importKey(
        'raw',
        encoder.encode(password),
        'PBKDF2',
        false,
        ['deriveBits']
    );

    const derivedBits = await crypto.subtle.deriveBits(
        {
            name: 'PBKDF2',
            salt: hexToBytes(salt),
            iterations: 250000,
            hash: 'SHA-256'
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
    return Array.from(bytes)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
}


/* =========================================================
   REMEMBERED LOGIN
   ========================================================= */

function getStoredLogin() {
    const name = localStorage.getItem('biph_student_name');
    const role = localStorage.getItem('biph_user_role');

    const loginTimestamp = parseInt(
        localStorage.getItem(BIPH_LOGIN_TIMESTAMP_KEY) || '0',
        10
    );

    const remembered =
        localStorage.getItem(BIPH_LOGIN_REMEMBERED_KEY) === '1';

    const logoutTimestamp = parseInt(
        localStorage.getItem(BIPH_LOGOUT_TIMESTAMP_KEY) || '0',
        10
    );

    if (!name || !role || !remembered || !loginTimestamp) {
        return null;
    }

    if (logoutTimestamp >= loginTimestamp) {
        return null;
    }

    return { name, role };
}


function getStoredName() {
    return getStoredLogin()?.name || null;
}


function storeName(name, role = 'student') {
    localStorage.setItem('biph_student_name', name);
    localStorage.setItem('biph_user_role', role);

    localStorage.setItem(
        BIPH_LOGIN_TIMESTAMP_KEY,
        Date.now().toString()
    );

    localStorage.setItem(BIPH_LOGIN_REMEMBERED_KEY, '1');
    localStorage.removeItem(BIPH_LOGOUT_TIMESTAMP_KEY);

    // Remove the legacy timestamp used by the old menu.
    localStorage.removeItem('biph_name_timestamp');

    window.biphIsTeacher = role === 'teacher';

notifyBiphLoginChanged();
}


function clearStoredLogin() {
    localStorage.removeItem('biph_student_name');
    localStorage.removeItem('biph_user_role');
    localStorage.removeItem(BIPH_LOGIN_REMEMBERED_KEY);
    localStorage.removeItem('biph_name_timestamp');

    localStorage.setItem(
        BIPH_LOGOUT_TIMESTAMP_KEY,
        Date.now().toString()
    );

    window.biphIsTeacher = false;

notifyBiphLoginChanged();
}


/* =========================================================
   HOTKEY BLOCKING (while login screen is visible)
   ========================================================= */

let hotkeyBlockersInstalled = false;

function blockOtherHotkeys(e) {
    // Only block when the login screen is actually visible
    const loginScreen = document.getElementById('login-screen');
    if (!loginScreen || loginScreen.style.display !== 'flex') return;

    // Allow all keyboard interaction that originates inside the login box
    if (e.target.closest('#login-screen')) return;

    // Everything else (site-wide hotkeys, menu Escape, exercise shortcuts, etc.)
    e.stopImmediatePropagation();
    e.preventDefault();
}

function installHotkeyBlockers() {
    if (hotkeyBlockersInstalled) return;
    // Capture phase so we run before any other listeners on the page
    document.addEventListener('keydown',  blockOtherHotkeys, true);
    document.addEventListener('keyup',    blockOtherHotkeys, true);
    document.addEventListener('keypress', blockOtherHotkeys, true);
    hotkeyBlockersInstalled = true;
}

function removeHotkeyBlockers() {
    if (!hotkeyBlockersInstalled) return;
    document.removeEventListener('keydown',  blockOtherHotkeys, true);
    document.removeEventListener('keyup',    blockOtherHotkeys, true);
    document.removeEventListener('keypress', blockOtherHotkeys, true);
    hotkeyBlockersInstalled = false;
}


/* =========================================================
   SHOW / HIDE LOGIN
   ========================================================= */

function showLoginScreen() {
    const loginScreen = createLoginScreen();

    loginScreen.style.display = 'flex';
    loginScreen.style.opacity = '1';

    const mainContent = document.getElementById('main-content');

    if (mainContent) {
        mainContent.style.display = 'none';
    }

    addEnterKeyListener();
    installHotkeyBlockers();          // ← disable other hotkeys

    return loginScreen;
}


function hideLoginScreen() {
    const loginScreen = document.getElementById('login-screen');

    if (loginScreen) {
        loginScreen.style.opacity = '0';

        setTimeout(() => {
            loginScreen.style.display = 'none';
        }, 600);
    }

    const mainContent = document.getElementById('main-content');

    if (mainContent) {
        mainContent.style.display = 'block';
    }

    removeHotkeyBlockers();           // ← restore other hotkeys
}


/* =========================================================
   LOGIN VALIDATION
   ========================================================= */

async function handleLogin() {
    const input = document.getElementById('name-input');
    const passwordInput = document.getElementById('password-input');
    const error = document.getElementById('error-message');
    const loginButton = document.getElementById('biph-login-button');

    if (!input || !passwordInput || !error) return;

    const rawName = input.value.trim();
    const rawPassword = passwordInput.value.trim();

    error.textContent = '';

    if (!rawName) {
        error.textContent = 'Please enter your first name.';
        return;
    }

    if (!rawPassword) {
        error.textContent = 'Please enter your password.';
        return;
    }

    if (loginButton) loginButton.disabled = true;

    try {
        /*
         * TEACHER LOGIN
         */

        if (
            typeof teacherName !== 'undefined' &&
            normalizeName(rawName) === normalizeName(teacherName)
        ) {
            if (
                typeof teacherPasswordSalt === 'undefined' ||
                typeof teacherPasswordHash === 'undefined'
            ) {
                throw new Error('Teacher password configuration is missing.');
            }

            const passwordHash = await hashTeacherPassword(rawPassword);

            if (passwordHash !== teacherPasswordHash) {
                error.textContent = 'Incorrect password.';
                passwordInput.value = '';
                return;
            }

            storeName(teacherName, 'teacher');

            hideLoginScreen();

            if (typeof restoreNormalMenu === 'function') {
                restoreNormalMenu();
            }

            initMyMenu(false);

            if (typeof window.onSuccessfulLogin === 'function') {
                window.onSuccessfulLogin(teacherName);
            }

            if (typeof window.onTeacherLogin === 'function') {
                window.onTeacherLogin(teacherName);
            }

            return;
        }


globalThis.studentPasswordCredentials = globalThis.studentPasswordCredentials || {};
globalThis.studentPasswordCredentials["guest"] = {
    salt: "ef4ee62d743d357f609a5e5f73c14a74",
    hash: "fb5f962d4f216d08ffcf4a4f77170235fb6178c4ce5d19a37704e79f45f9f0c7"
}; 


        /*
         * GUEST LOGIN
         */

        if (normalizeName(rawName) === 'guest') {
            const credentials =
                typeof studentPasswordCredentials !== 'undefined'
                    ? studentPasswordCredentials['guest']
                    : null;

            if (!credentials) {
                error.textContent =
                    'Guest login is not configured. Please contact your teacher.';
                return;
            }

            const passwordHash = await hashStudentPassword(
                rawPassword,
                credentials.salt
            );

            if (passwordHash !== credentials.hash) {
                error.textContent = 'Incorrect password.';
                passwordInput.value = '';
                return;
            }

            storeName('Guest', 'guest');

            hideLoginScreen();

            if (typeof restoreNormalMenu === 'function') {
                restoreNormalMenu();
            }

            initMyMenu(false);

            if (typeof window.onSuccessfulLogin === 'function') {
                window.onSuccessfulLogin('Guest');
            }

            return;
        }



        /*
         * STUDENT LOGIN
         */

        const student = findStudent(rawName);

        if (!student) {
            error.innerHTML = 'Name not recognized.<br>(First name only)';

            input.value = '';
            passwordInput.value = '';

            return;
        }

        const normalizedStudentName = normalizeName(student.name);
        let passwordValid = false;

        const hasCustomCredentials =
            typeof studentPasswordCredentials !== 'undefined' &&
            studentPasswordCredentials &&
            studentPasswordCredentials[normalizedStudentName];

        if (hasCustomCredentials) {
            const credentials =
                studentPasswordCredentials[normalizedStudentName];

            const passwordHash = await hashStudentPassword(
                rawPassword,
                credentials.salt
            );

            passwordValid = passwordHash === credentials.hash;

            // Preserve the teacher master-password override.
            if (
                !passwordValid &&
                typeof teacherPasswordSalt !== 'undefined' &&
                typeof teacherPasswordHash !== 'undefined'
            ) {
                const masterPasswordHash =
                    await hashTeacherPassword(rawPassword);

                passwordValid =
                    masterPasswordHash === teacherPasswordHash;
            }

        } else {
            // Existing default: normalized student name twice.
            const expectedPassword =
                normalizedStudentName + normalizedStudentName;

            passwordValid =
                normalizeName(rawPassword) === expectedPassword;

            if (
                !passwordValid &&
                typeof teacherPasswordSalt !== 'undefined' &&
                typeof teacherPasswordHash !== 'undefined'
            ) {
                const masterPasswordHash =
                    await hashTeacherPassword(rawPassword);

                passwordValid =
                    masterPasswordHash === teacherPasswordHash;
            }
        }

        if (!passwordValid) {
            error.textContent = 'Incorrect password.';
            passwordInput.value = '';
            return;
        }

        const displayName = capitalizeName(student.name);

        storeName(displayName, 'student');

        hideLoginScreen();

        if (typeof restoreNormalMenu === 'function') {
            restoreNormalMenu();
        }

        initMyMenu(false);

        if (typeof window.onSuccessfulLogin === 'function') {
            window.onSuccessfulLogin(displayName);
        }

    } catch (err) {
        console.error('BIPH login error:', err);

        error.textContent =
            'Unable to sign in. Please try again or contact your teacher.';

    } finally {
        if (loginButton) loginButton.disabled = false;
    }
}


/* =========================================================
   ENTER KEY
   ========================================================= */

function addEnterKeyListener() {
    const nameInput = document.getElementById('name-input');
    const passwordInput = document.getElementById('password-input');

    if (nameInput && !nameInput.dataset.enterHandlerAttached) {
        nameInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();

                if (passwordInput) {
                    passwordInput.focus();
                }
            }
        });

        nameInput.dataset.enterHandlerAttached = 'true';
    }

    if (
        passwordInput &&
        !passwordInput.dataset.enterHandlerAttached
    ) {
        passwordInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleLogin();
            }
        });

        passwordInput.dataset.enterHandlerAttached = 'true';
    }
}


/* =========================================================
   PROFILE MENU
   ========================================================= */

function escapeMenuText(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
}


function initMyMenu(forceHideIfNotLoggedIn = false) {
    const existing = document.getElementById('my-profile-menu');

    if (existing) existing.remove();

    const storedName = getStoredName();
    const isLoggedIn = !!storedName;

    const isTeacher =
        isLoggedIn &&
        localStorage.getItem('biph_user_role') === 'teacher';

    window.biphIsTeacher = isTeacher;

    /*
     * Signed out:
     * show the central login screen, not a second login form.
     */

    if (!isLoggedIn) {
        if (forceHideIfNotLoggedIn) {
            return;
        }

        showLoginScreen();
        return;
    }

    const menuContainer = document.createElement('div');
    menuContainer.id = 'my-profile-menu';

    const icon = document.createElement('div');
    icon.id = 'profile-icon';

    icon.style.fontSize = isTeacher ? '20px' : '16px';
    icon.style.fontWeight = '600';

    icon.textContent = isTeacher
        ? '🎹'
        : storedName.charAt(0).toUpperCase();

    icon.setAttribute('role', 'button');
    icon.setAttribute('tabindex', '0');
    icon.setAttribute(
        'aria-label',
        isTeacher ? 'Teacher profile menu' : 'Student profile menu'
    );

    const dropdown = document.createElement('div');
    dropdown.id = 'profile-dropdown';

    dropdown.innerHTML = `
        <div class="profile-name">
            ${escapeMenuText(storedName)}
        </div>

        <button type="button" class="menu-btn" id="my-records-btn">
            📊 ${isTeacher ? 'Gradebook' : 'My Grades'}
        </button>

        <hr>

        <button type="button" class="menu-btn" id="signout-btn">
            🚪 Sign Out
        </button>
    `;

    menuContainer.appendChild(icon);
    menuContainer.appendChild(dropdown);
    document.body.appendChild(menuContainer);

    function toggleDropdown() {
        dropdown.style.display =
            dropdown.style.display === 'block' ? 'none' : 'block';
    }

    icon.addEventListener('click', e => {
        e.stopPropagation();
        toggleDropdown();
    });

    icon.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            toggleDropdown();
        }
    });

    dropdown.addEventListener('click', e => {
        e.stopPropagation();
    });

    dropdown
        .querySelector('#my-records-btn')
        .addEventListener('click', goToMyRecords);

    dropdown
        .querySelector('#signout-btn')
        .addEventListener('click', handleSignOutClick);

    if (!window.biphMyMenuHandlersInstalled) {
        document.addEventListener('click', e => {
            const currentMenu =
                document.getElementById('my-profile-menu');

            const currentDropdown =
                document.getElementById('profile-dropdown');

            if (
                currentMenu &&
                currentDropdown &&
                !currentMenu.contains(e.target)
            ) {
                currentDropdown.style.display = 'none';
            }
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                const currentDropdown =
                    document.getElementById('profile-dropdown');

                if (currentDropdown) {
                    currentDropdown.style.display = 'none';
                }
            }
        });

        window.biphMyMenuHandlersInstalled = true;
    }
}


/* =========================================================
   SIGN OUT
   ========================================================= */

let signOutConfirm = false;

function handleSignOutClick(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    const btn = document.getElementById('signout-btn');

    if (!btn) return;

    if (!signOutConfirm) {
        signOutConfirm = true;

        btn.textContent = 'Are you sure?';
        btn.style.color = '#d32f2f';
        btn.style.fontWeight = 'bold';

        return;
    }

    signOutConfirm = false;

    window.biphLogout();
}


function goToMyRecords() {
    window.location.href = 'http://biphmusic.github.io/grades';
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

function initLogin() {
    injectLoginStyles();

    const storedLogin = getStoredLogin();

    if (storedLogin) {
        window.biphIsTeacher = storedLogin.role === 'teacher';

        const loginScreen = document.getElementById('login-screen');

        if (loginScreen) {
            loginScreen.style.display = 'none';
        }

        const mainContent = document.getElementById('main-content');

        if (mainContent) {
            mainContent.style.display = 'block';
        }

        if (typeof restoreNormalMenu === 'function') {
            restoreNormalMenu();
        }

        if (typeof window.onSuccessfulLogin === 'function') {
            window.onSuccessfulLogin(storedLogin.name);
        }

        if (
            window.biphIsTeacher &&
            typeof window.onTeacherLogin === 'function'
        ) {
            window.onTeacherLogin(storedLogin.name);
        }

        initMyMenu(false);

    } else {
        window.biphIsTeacher = false;

        // Do not show the protected page while signed out.
        const mainContent = document.getElementById('main-content');

        if (mainContent) {
            mainContent.style.display = 'none';
        }

        showLoginScreen();

        // Retain compatibility with existing site navigation.
        if (typeof showSimpleMenu === 'function') {
            showSimpleMenu();
        }

        // No profile dropdown or secondary sign-in form.
        initMyMenu(true);
    }
}


/* =========================================================
   LOGOUT API
   ========================================================= */

window.biphLogout = function() {
    clearStoredLogin();

    signOutConfirm = false;

    const menu = document.getElementById('my-profile-menu');

    if (menu) {
        menu.remove();
    }

    const loginScreen = showLoginScreen();

    const nameInput = document.getElementById('name-input');
    const passwordInput = document.getElementById('password-input');
    const error = document.getElementById('error-message');

    if (nameInput) nameInput.value = '';
    if (passwordInput) passwordInput.value = '';
    if (error) error.textContent = '';

    loginScreen.style.display = 'flex';
    loginScreen.style.opacity = '1';

    if (typeof showSimpleMenu === 'function') {
        showSimpleMenu();
    }

    initMyMenu(true);
};


/* =========================================================
   PUBLIC FUNCTIONS
   Keep these accessible to other site scripts.
   ========================================================= */

window.clearStoredLogin = clearStoredLogin;
window.handleLogin = handleLogin;
window.initLogin = initLogin;
window.initMyMenu = initMyMenu;


/* =========================================================
   STARTUP
   ========================================================= */

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLogin, {
        once: true
    });
} else {
    initLogin();
}