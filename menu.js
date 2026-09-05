(function() {
    // ── Simple “Back to Homepage” menu (shown when logged out) ──
    const simpleMenuHTML = `
        <div class="hamburger-menu">
            <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>
            <div class="menu-items" id="simple-menu">
                <div class="menu-title">BIPH Music</div>
                <a href="https://biphband.github.io">Back to Homepage</a>
                <div class="menu-footer">© Garrison Tubbs 2026</div>
            </div>
        </div>
    `;

    // ── Full student menu ──
    const studentMenuHTML = `
        <div class="hamburger-menu">
            <button class="menu-toggle" id="menu-toggle" aria-label="Toggle student menu">
                <span></span><span></span><span></span>
            </button>
            <div class="menu-items student-menu" id="student-menu">
                <div class="menu-title">BIPH Music</div>
                <a href="https://biphmusic.github.io/">Home</a>
                <a href="https://biphmusic.github.io/dailysightsinging/">     • Sight Singing</a>
                <a href="https://biphmusic.github.io/dailyvocab/">     • Vocab</a>
                <a href="https://biphmusic.github.io/dailyeartraining/">     • Ear Training</a>
                <a href="https://biphmusic.github.io/toolbox/">Toolbox</a>
                <a href="mailto:garrison.tubbs-biph@basischina.com">Contact</a>
                <div class="menu-footer">© Garrison Tubbs 2026</div>
            </div>
        </div>
    `;

    // ── Teacher menu (Alt/Cmd-click) ──
    const teacherMenuHTML = `
        <div class="hamburger-menu">
            <button class="menu-toggle" id="menu-toggle" aria-label="Toggle teacher menu">
                <span></span><span></span><span></span>
            </button>
            <div class="menu-items teacher-menu" id="teacher-menu">
                <div class="menu-title">BIPH Music - Teacher</div>
                <a href="https://biphmusic.github.io/groups">Groups</a>
                <a href="https://biphmusic.github.io/quadrants">Quadrants</a>
                <a href="https://biphmusic.github.io/completionboard">Completion Board</a>
                <a href="https://biphmusic.github.io/completionrings">Completion Rings</a>
                <a href="https://biphmusic.github.io/authenticator">Authenticator</a>
                <a href="http://biphmusic.github.io/sightreadingresults">Sight Reading Results</a>
                <a href="https://biphmusic.github.io/studentprogress">Student Progress</a>
                <div class="menu-footer">© Garrison Tubbs 2026</div>
            </div>
        </div>
    `;

    const container = document.getElementById('shared-menu');
    if (!container) {
        console.error('Menu container (#shared-menu) not found');
        return;
    }

    // Inject base styles once
    if (!document.getElementById('biph-menu-styles')) {
        const style = document.createElement('style');
        style.id = 'biph-menu-styles';
        style.textContent = `
            .hamburger-menu {
                position: absolute;
                top: 20px;
                left: 20px;
                z-index: 1000;
            }

            .menu-toggle {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 30px;
                height: 25px;
                background: transparent;
                border: none;
                cursor: pointer;
            }

            .menu-toggle span {
                width: 30px;
                height: 3px;
                background: white;
                border-radius: 10px;
                transition: all 0.3s linear;
            }

            .menu-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(4px, 5px); }
            .menu-toggle.open span:nth-child(2) { opacity: 0; }
            .menu-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(6px, -7px); }

            .menu-items {
                position: absolute;
                top: 25px;
                left: -250px;
                border: 1px solid rgba(0, 0, 0, 0.4);
                border-radius: 10px;
                box-shadow: 0 14px 16px rgba(20, 20, 20, 0.81);
                background: linear-gradient(180deg, rgba(56, 81, 132, 1), rgba(13, 19, 30, 1));
                width: 250px;
                height: 80vh;
                padding-top: 20px;
                transition: all 0.3s ease-in-out;
                opacity: 0;
            }

            .menu-items.show {
                left: 0;
                opacity: 1;
            }

            .menu-items a {
                text-align: left;
                display: block;
                padding: 10px 40px 10px 47px;
                color: white;
                text-decoration: none;
                transition: background-color 0.2s;
                opacity: 0;
                transform: translateX(-20px);
                transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
            }

            .menu-items.show a {
                opacity: 1;
                transform: translateX(0);
            }

            .menu-items a:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }

            .menu-title {
                text-align: center;
                color: white;
                font-size: 18px;
                margin-bottom: 10px;
            }

            .menu-footer {
                position: absolute;
                bottom: 10px;
                width: 100%;
                text-align: center;
                color: white;
                font-size: 12px;
            }
        `;
        document.head.appendChild(style);
    }

    let activeMenu = null;          // 'student' | 'teacher' | 'simple' | null
    let currentOutsideHandler = null;
    let currentEscapeHandler = null;

    function closeMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const openMenu = document.querySelector('.menu-items.show');

        if (menuToggle) menuToggle.classList.remove('open');
        if (openMenu) openMenu.classList.remove('show');

        if (currentOutsideHandler) {
            document.removeEventListener('click', currentOutsideHandler);
            currentOutsideHandler = null;
        }
        if (currentEscapeHandler) {
            document.removeEventListener('keydown', currentEscapeHandler);
            currentEscapeHandler = null;
        }

        activeMenu = null;
    }

    function setupMenuInteractions(menuId) {
        const menuToggle = document.getElementById('menu-toggle');
        const menuItems  = document.getElementById(menuId);
        if (!menuToggle || !menuItems) return;

        // Prevent clicks inside the menu from closing it
        menuItems.addEventListener('click', (e) => e.stopPropagation());

        currentOutsideHandler = (e) => {
            if (!menuToggle.contains(e.target) && !menuItems.contains(e.target)) {
                closeMenu();
            }
        };

        currentEscapeHandler = (e) => {
            if (e.key === 'Escape') closeMenu();
        };

        setTimeout(() => {
            document.addEventListener('click', currentOutsideHandler);
            document.addEventListener('keydown', currentEscapeHandler);
        }, 10);
    }

    function renderMenu(type) {
        if (type === 'simple') {
            container.innerHTML = simpleMenuHTML;
        } else if (type === 'teacher') {
            container.innerHTML = teacherMenuHTML;
        } else {
            container.innerHTML = studentMenuHTML;
        }
    }

    function toggleMenu(requestedType) {
        // Simple menu never switches to teacher mode
        if (activeMenu === 'simple') {
            if (activeMenu === requestedType) {
                closeMenu();
            } else {
                // stay simple – ignore teacher request
                return;
            }
            return;
        }

        if (activeMenu === requestedType) {
            // Special case: Command-click when teacher menu is already open → stay open
            if (requestedType === 'teacher') return;
            closeMenu();
            return;
        }

        // Open or switch menu
        renderMenu(requestedType);
        const menuId = requestedType === 'teacher' ? 'teacher-menu'
                     : requestedType === 'simple'  ? 'simple-menu'
                     : 'student-menu';
        setupMenuInteractions(menuId);

        const menuItems  = document.getElementById(menuId);
        const menuToggle = document.getElementById('menu-toggle');

        void menuItems.offsetWidth; // force reflow for animation
        menuToggle.classList.add('open');
        menuItems.classList.add('show');
        activeMenu = requestedType;
    }

    // ── Public API used by login-screen.js ──────────────────────
    window.showSimpleMenu = function() {
        // Raise z-index so the menu sits above the login overlay
        if (!document.getElementById('simple-menu-zfix')) {
            const style = document.createElement('style');
            style.id = 'simple-menu-zfix';
            style.textContent = `
                #shared-menu .hamburger-menu {
                    position: fixed !important;
                    top: 20px !important;
                    left: 20px !important;
                    z-index: 10000 !important;
                }
            `;
            document.head.appendChild(style);
        }

        renderMenu('simple');
        setupMenuInteractions('simple-menu');

        // Make the toggle work for the simple menu
        const menuToggle = document.getElementById('menu-toggle');
        const menuItems  = document.getElementById('simple-menu');
        if (menuToggle && menuItems) {
            menuToggle.onclick = function(e) {
                e.stopPropagation();
                const isOpen = menuItems.classList.contains('show');
                if (isOpen) {
                    closeMenu();
                } else {
                    menuToggle.classList.add('open');
                    menuItems.classList.add('show');
                    activeMenu = 'simple';
                }
            };
        }
        activeMenu = 'simple';
    };

    window.restoreNormalMenu = function() {
        // Remove the high z-index override
        const zfix = document.getElementById('simple-menu-zfix');
        if (zfix) zfix.remove();

        closeMenu();
        renderMenu('student');
        activeMenu = null;
    };

    // Main toggle button handler (student / teacher)
    container.addEventListener('click', function(e) {
        if (!e.target.closest('.menu-toggle')) return;
        if (activeMenu === 'simple') return; // simple menu uses its own onclick

        e.stopImmediatePropagation();

        const isTeacherRequest = e.altKey || e.metaKey;
        const requestedType = isTeacherRequest ? 'teacher' : 'student';
        toggleMenu(requestedType);
    });

    // Initial render – student menu (will be replaced by showSimpleMenu if needed)
    renderMenu('student');
})();