(function() {
    const studentMenuHTML = `
        <div class="hamburger-menu">
            <button class="menu-toggle" id="menu-toggle" aria-label="Toggle student menu">
                <span></span><span></span><span></span>
            </button>
            <div class="menu-items student-menu" id="student-menu">
                <div class="menu-title">BIPH Music</div>
                <a href="https://biphmusic.github.io/">Home</a>
                <a href="https://biphmusic.github.io/dailysightsinging/">Daily Sight Singing</a>
                <a href="https://biphmusic.github.io/wordwall/">Word Wall</a>
                <a href="https://biphmusic.github.io/flashcards/">Flash Cards</a>
                <a href="https://biphmusic.github.io/dice/">Dice Simulator</a>
                <a href="https://biphmusic.github.io/chords/">Chord Quality</a>
                <a href="https://biphmusic.github.io/progressions/">Chord Progressions</a>
                <a href="https://biphmusic.github.io/piano/">Web Piano</a>
                <a href="https://biphmusic.github.io/units/">AP Units</a>
                <a href="mailto:garrison.tubbs-biph@basischina.com">Contact</a>
                <div class="menu-footer">© Garrison Tubbs 2026</div>
            </div>
        </div>
    `;

    const teacherMenuHTML = `
        <div class="hamburger-menu">
            <button class="menu-toggle" id="menu-toggle" aria-label="Toggle teacher menu">
                <span></span><span></span><span></span>
            </button>
            <div class="menu-items teacher-menu" id="teacher-menu">
                <div class="menu-title">BIPH Music - Teacher</div>
                <a href="https://biphmusic.github.io/groups">Groups</a>
                <a href="https://biphmusic.github.io/quadrants">Quadrants</a>
                <a href="https://biphmusic.github.io/progresstracker">Progress Tracker</a>
                <a href="https://biphmusic.github.io/authenticator">Authenticator</a>
                <a href="http://biphmusic.github.io/sightreadingresults">Sight Reading Results</a>
                <a href="https://biphmusic.github.io/studentdata">Student Data</a>
                <div class="menu-footer">© Garrison Tubbs 2026</div>
            </div>
        </div>
    `;

    const container = document.getElementById('shared-menu');
    if (!container) {
        console.error('Menu container (#shared-menu) not found');
        return;
    }

    // Inject styles once
    const style = document.createElement('style');
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
            height: 90vh;
            padding-top: 20px;
            transition: all 0.3s ease-in-out;
            opacity: 0;
        }

        .menu-items.show {
            left: 0;
            opacity: 1;
        }

        .menu-items a {
            display: block;
            padding: 10px 20px;
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

    // Track which menu is currently visible
    let activeMenu = null; // 'student' | 'teacher' | null

    function renderMenu(type) {
        container.innerHTML = type === 'teacher' ? teacherMenuHTML : studentMenuHTML;
    }

    function toggleMenu(type) {
        // If this menu is already active and visible, close it
        if (activeMenu === type) {
            closeMenu();
            return;
        }

        // Otherwise, render and open the requested menu
        renderMenu(type);
        setupMenuInteractions(type);
        
        const menuItems = document.getElementById(`${type}-menu`);
        const menuToggle = document.getElementById('menu-toggle');
        
        // Force reflow to ensure transition works
        void menuItems.offsetWidth;
        menuToggle.classList.add('open');
        menuItems.classList.add('show');
        activeMenu = type;
    }

    function closeMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const openMenu = document.querySelector('.menu-items.show');
        
        if (menuToggle) menuToggle.classList.remove('open');
        if (openMenu) openMenu.classList.remove('show');
        activeMenu = null;
    }

    function setupMenuInteractions(type) {
        const menuToggle = document.getElementById('menu-toggle');
        const menuItems = document.getElementById(`${type}-menu`);
        
        if (!menuToggle || !menuItems) return;

        // Close on outside click
        const outsideClickHandler = (e) => {
            if (!menuToggle.contains(e.target) && !menuItems.contains(e.target)) {
                closeMenu();
                document.removeEventListener('click', outsideClickHandler);
            }
        };
        // Defer adding listener so current click doesn't immediately close
        setTimeout(() => {
            document.addEventListener('click', outsideClickHandler);
        }, 0);

        // Close on Escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                closeMenu();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    }

    // Main toggle click handler
    container.addEventListener('click', function(e) {
        // Only respond to clicks on the toggle button
        if (!e.target.closest('.menu-toggle')) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        const isAltClick = e.altKey || e.metaKey; // metaKey for Cmd on Mac
        const requestedType = isAltClick ? 'teacher' : 'student';
        
        toggleMenu(requestedType);
    });

    // Initialize with student menu rendered but closed (optional)
    renderMenu('student');
})();