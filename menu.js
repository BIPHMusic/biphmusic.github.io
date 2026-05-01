// menu.js - Combined HTML + CSS + JS for the shared menu

(function() {
    // ==================== HTML ====================
    const menuHTML = `
        <div class="hamburger-menu">
            <button class="menu-toggle" id="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <div class="menu-items" id="menu-items">
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

    // Insert the menu HTML
    const container = document.getElementById('shared-menu');
    if (container) {
        container.innerHTML = menuHTML;
    } else {
        console.error('Menu container (#shared-menu) not found');
        return;
    }

    // ==================== CSS ====================
    const style = document.createElement('style');
    style.textContent = `
        .hamburger-menu {
            position: absolute;
            top: 20px;
            left: 13px;
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

        .menu-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .menu-toggle.open span:nth-child(2) { opacity: 0; }
        .menu-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }

        .menu-items {
            position: absolute;
            top: 25px;
            left: -250px;
            background: linear-gradient(135deg, rgba(48, 67, 104, 0.8), rgba(20, 31, 53, 0.8));
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

    // ==================== JavaScript ====================
    const menuToggle = document.getElementById('menu-toggle');
    const menuItems = document.getElementById('menu-items');

    if (!menuToggle || !menuItems) {
        console.error('Menu elements not found after insertion');
        return;
    }

    function toggleMenu() {
        menuToggle.classList.toggle('open');
        menuItems.classList.toggle('show');
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !menuItems.contains(event.target)) {
            menuToggle.classList.remove('open');
            menuItems.classList.remove('show');
        }
    });

    // Optional: Close menu on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            menuToggle.classList.remove('open');
            menuItems.classList.remove('show');
        }
    });

})();