function initMyMenu(forceHideIfNotLoggedIn = false) {
    const existing = document.getElementById('my-profile-menu');
    if (existing) existing.remove();

    const storedName = localStorage.getItem('biph_student_name');
    const isLoggedIn = !!storedName;
    const isTeacher = isLoggedIn && localStorage.getItem('biph_user_role') === 'teacher';

    window.biphIsTeacher = isTeacher;

    if (forceHideIfNotLoggedIn && !isLoggedIn) return;

    const menuContainer = document.createElement('div');
    menuContainer.id = 'my-profile-menu';
    menuContainer.style.cssText = `
        width: 36px; height: 36px; border-radius: 50%;
        position: absolute;
        top: 16px;
        right: 16px;
        z-index: 10000;
        font-family: Arial, sans-serif;
    `;

    const icon = document.createElement('div');
    icon.id = 'profile-icon';

    if (isTeacher) {
        icon.style.cssText = `
            width: 36px; height: 36px; border-radius: 50%;
            background: #3b6cac; color: white;
            display: flex; align-items: center; justify-content: center;
            font-size: 20px; font-weight: 600; cursor: pointer;
            box-shadow: 0 3px 10px rgba(0,0,0,0.25);
            transition: transform 0.2s;
        `;
        icon.textContent = "🎹";
    } else if (isLoggedIn) {
        const firstLetter = storedName.charAt(0).toUpperCase();
        icon.style.cssText = `
            width: 36px; height: 36px; border-radius: 50%;
            background: #3b6cac; color: white;
            display: flex; align-items: center; justify-content: center;
            font-size: 16px; font-weight: 600; cursor: pointer;
            box-shadow: 0 3px 10px rgba(0,0,0,0.25);
            transition: transform 0.2s;
        `;
        icon.textContent = firstLetter;
    } else {
        icon.innerHTML = `<img src="../icons/blank-avatar.png" width="36" height="36" style="border-radius:50%; object-fit:cover; filter: none !important;">`;
        icon.style.cursor = "pointer";
    }

    const dropdown = document.createElement('div');
    dropdown.id = 'profile-dropdown';
    dropdown.style.cssText = `
        display: none;
        position: absolute;
        top: 44px;
        right: 0;
        background: rgba(255,255,255,0.98);
        border-radius: 8px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        min-width: 160px;
        overflow: hidden;
        border: 1px solid #ddd;
        font-size: 13px;
    `;

    if (isLoggedIn) {
        dropdown.innerHTML = `
            <div style="padding: 6px 12px; background: #f0f4f8; font-weight: bold; color: #34405d; font-size: 13px;">
                ${storedName}
            </div>
            <button class="menu-btn" onclick="goToMyRecords()">📊 My Records</button>
            <hr style="margin: 3px 0; border:none; border-top: 1px solid #eee;">
            <button id="signout-btn" class="menu-btn" onclick="handleSignOutClick(event)">🚪 Sign Out</button>
        `;
    } else {
        dropdown.innerHTML = `
            <div style="padding: 12px; display: flex; flex-direction: column; gap: 8px;">
                <input type="text" id="dropdown-name-input" placeholder="Your name"
                       style="width: 100%; height: 30px; margin-top: 3px; font-size: 13px; border: 1.5px solid #ccc; border-radius: 5px; box-sizing: border-box;"
                       autocomplete="username">
                <button id="dropdown-signin-btn" class="menu-btn" onclick="handleDropdownLogin()"
                        style="width: 100%; height: 30px; margin-top: -10px; margin-bottom: 0px; background: #3b6cac; color: white; border: none; border-radius: 5px; font-size: 13px; cursor: pointer; text-align: center;">
                    Sign In
                </button>
                <div id="dropdown-error" style="color: #c00; font-size: 12px; margin-top: -15px; margin-bottom: -5px; min-height: 1.1em; text-align: center;"></div>
            </div>
        `;
    }

    menuContainer.appendChild(icon);
    menuContainer.appendChild(dropdown);
    document.body.appendChild(menuContainer);

    icon.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        const isOpen = dropdown.style.display === 'block';
        dropdown.style.display = isOpen ? 'none' : 'block';

        if (!isOpen && !isLoggedIn) {
            setTimeout(() => {
                const input = document.getElementById('dropdown-name-input');
                if (input) input.focus();
            }, 10);
        }
    });

    document.addEventListener('click', (e) => {
        if (!menuContainer.contains(e.target)) dropdown.style.display = 'none';
    });

    const style = document.createElement('style');
    style.textContent = `
        .menu-btn {
            width: 100%; text-align: left; padding: 8px 12px; border: none;
            background: none; cursor: pointer; font-size: 13px; transition: all 0.2s;
            line-height: 1.4;
        }
        .menu-btn:hover { background: #f0f4f8; padding-left: 16px; }
        #signout-btn:hover { background: #ffebee; color: #d32f2f; }
    `;
    document.head.appendChild(style);

    if (!isLoggedIn) {
        dropdown.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleDropdownLogin();
            }
        });
    }
}

function handleDropdownLogin() {
    const input = document.getElementById('dropdown-name-input');
    const errorDiv = document.getElementById('dropdown-error');
    if (!input || !errorDiv) return;

    const rawName = input.value.trim();

    if (!rawName) {
        errorDiv.innerHTML = "<br>Please enter your name.";
        return;
    }

    if (typeof teacherName !== 'undefined' && rawName.toLowerCase() === teacherName.toLowerCase()) {
        errorDiv.innerHTML = "<br>Please use the main sign-in screen for teacher login.";
        return;
    }

    const lower = rawName.toLowerCase();
    const student = apStudents.find(s =>
        s.name.toLowerCase() === lower || (s.altName && s.altName.toLowerCase() === lower)
    );

    if (student) {
        const displayName = capitalizeName(student.name);
        localStorage.setItem('biph_student_name', displayName);
        localStorage.setItem('biph_name_timestamp', Date.now().toString());
        localStorage.setItem('biph_user_role', 'student');
        window.biphIsTeacher = false;
        location.reload();
    } else {
        errorDiv.innerHTML = "<br>Name not recognized.";
    }
}

function capitalizeName(name) {
    return name.trim().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

let signOutConfirm = false;

function handleSignOutClick(e) {
    e.stopImmediatePropagation();
    const btn = document.getElementById('signout-btn');
    if (!btn) return;

    if (!signOutConfirm) {
        signOutConfirm = true;
        btn.textContent = "Are you sure?";
        btn.style.color = "#d32f2f";
        btn.style.fontWeight = "bold";
    } else {
        localStorage.removeItem('biph_student_name');
        localStorage.removeItem('biph_name_timestamp');
        localStorage.removeItem('biph_user_role');
        window.biphIsTeacher = false;
        location.reload();
    }
}

function goToMyRecords() {
    window.location.href = "http://biphmusic.github.io/my-records";
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const dropdown = document.getElementById('profile-dropdown');
        if (dropdown) dropdown.style.display = 'none';
    }
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initMyMenu());
} else {
    initMyMenu();
}