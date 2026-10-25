const STICKY_NOTES_CONFIG = [
    {
        id: 'TECH THEATER',
        forWhichClasses: ["Tech Theater"],
        position: { xPercent: 10, yPercent: 20 },
        dimensions: { width: 230, height: 150 },
        textContent: 'Don\'t forget to put event requests in on BG cloud 💡',
        imageSrc: '',
        backgroundColor: '#ff9999'
    },
    {
        id: 'AP MUSIC THEORY',
        forWhichClasses: ["AP Music Theory"],
        position: { xPercent: 10, yPercent: 30 },
        dimensions: { width: 250, height: 200 },
        textContent: 'Don\'t neglect www.teoria.com 💡',
        imageSrc: '',
        backgroundColor: '#ff9999'
    },
    {
        id: 'ALL BAND',
        forWhichClasses: ["MS Band", "HS Band", "MS Band ᵀᴴᵁᴿˢ"],
        position: { xPercent: 75, yPercent: 30 },
        dimensions: { width: 150, height: 150 },
        textContent: '',
        imageSrc: 'qr-code.png',
        backgroundColor: '#ffd75e'
    },
    {
        id: 'MIDDLE SCHOOL',
        forWhichClasses: ["MS Band"],
        position: { xPercent: 10, yPercent: 30 },
        dimensions: { width: 250, height: 200 },
        textContent: 'High School sessions. Who went? Who did not?',
        imageSrc: '',
        backgroundColor: '#ff9999'
    },
    {
        id: 'MIDDLE SCHOOL (THURSDAY)',
        forWhichClasses: ["MS Band ᵀᴴᵁᴿˢ"],
        position: { xPercent: 10, yPercent: 30 },
        dimensions: { width: 250, height: 200 },
        textContent: 'Last day to join HS! Don\'t forget! 💡',
        imageSrc: '',
        backgroundColor: '#ff9999'
    }
];

function isStickyNoteAllowed(config) {
    return !!(
        config &&
        classes &&
        classes[currentClassIndex] &&
        config.forWhichClasses.includes(classes[currentClassIndex].name)
    );
}

function normalizePosition(position) {
    if (
        position &&
        typeof position.xPercent === 'number' &&
        typeof position.yPercent === 'number'
    ) {
        return {
            xPercent: position.xPercent,
            yPercent: position.yPercent
        };
    }

    if (
        position &&
        typeof position.x === 'number' &&
        typeof position.y === 'number'
    ) {
        return {
            xPercent: position.x / window.innerWidth * 100,
            yPercent: position.y / window.innerHeight * 100
        };
    }

    return { xPercent: 10, yPercent: 20 };
}

function saveStickyNote(id, config) {
    const currentClass = classes[currentClassIndex].name;
    const key = `stickyNote_${currentClass}_${id}`;

    localStorage.setItem(key, JSON.stringify({
        id,
        textContent: config.textContent || '',
        position: normalizePosition(config.position),
        dimensions: {
            width: config.dimensions.width,
            height: config.dimensions.height
        },
        backgroundColor: config.backgroundColor,
        imageSrc: config.imageSrc,
        forWhichClasses: [...config.forWhichClasses]
    }));
}

function removeStickyNote(id) {
    const currentClass = classes[currentClassIndex].name;
    localStorage.removeItem(`stickyNote_${currentClass}_${id}`);
}

function createStickyNote(config, id) {
    if (!config || !isStickyNoteAllowed(config)) return;

    document.querySelectorAll(`.sticky-note[data-id="${id}"]`)
        .forEach(note => note.remove());

    config.position = normalizePosition(config.position);

    const note = document.createElement('div');
    note.className = 'sticky-note';
    note.dataset.id = id;

    Object.assign(note.style, {
        position: 'absolute',
        left: `${config.position.xPercent}%`,
        top: `${config.position.yPercent}%`,
        width: `${config.dimensions.width}px`,
        height: `${config.dimensions.height}px`,
        minHeight: '60px',
        minWidth: '100px',
        boxSizing: 'border-box',
        backgroundColor: config.backgroundColor,
        padding: '20px',
        boxShadow: '2px 2px 8px rgba(0,0,0,0.3)',
        cursor: 'move',
        zIndex: currentZIndex++,
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        transform: 'rotate(-2deg)',
        resize: 'both',
        overflow: 'auto'
    });

    const tape = document.createElement('div');

    Object.assign(tape.style, {
        position: 'absolute',
        top: '0',
        left: '50%',
        width: '60px',
        height: '10px',
        backgroundColor: 'rgba(255,255,255,0.5)',
        transform: 'translateX(-50%)'
    });

    const header = document.createElement('div');

    Object.assign(header.style, {
        marginBottom: '10px',
        cursor: 'move',
        position: 'relative',
        height: config.imageSrc ? '20px' : '0px'
    });

    if (config.imageSrc) {
        const img = document.createElement('img');

        Object.assign(img, {
            src: config.imageSrc,
            alt: 'QR Code',
            draggable: false
        });

        Object.assign(img.style, {
            width: '100%',
            height: 'auto',
            userSelect: 'none'
        });

        header.appendChild(img);
    }

    const closeBtn = document.createElement('span');
    closeBtn.className = 'sticky-close';
    closeBtn.innerHTML = '×';

    Object.assign(closeBtn.style, {
        position: 'absolute',
        top: '2px',
        right: '2px',
        padding: '2px 6px',
        cursor: 'pointer',
        color: 'black',
        borderRadius: '50%',
        lineHeight: '1'
    });

    closeBtn.onclick = () => {
        note.remove();
        removeStickyNote(id);
    };

    const contentDiv = document.createElement('div');
    contentDiv.className = 'sticky-note-content';
    contentDiv.textContent = config.textContent || '';
    contentDiv.contentEditable = 'true';

    Object.assign(contentDiv.style, {
        width: '100%',
        height: config.imageSrc ? 'calc(100% - 60px)' : 'calc(100% - 40px)',
        border: 'none',
        background: 'transparent',
        resize: 'none',
        fontFamily: 'inherit',
        fontSize: '16px',
        lineHeight: '1.5',
        outline: 'none',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word'
    });

    contentDiv.addEventListener('focus', () => {
        currentMode = MODES.STICKY_NOTE;
    });

    contentDiv.addEventListener('click', () => {
        currentMode = MODES.STICKY_NOTE;
    });

    contentDiv.addEventListener('input', () => {
        config.textContent = contentDiv.innerText;
        saveStickyNote(id, config);
    });

    contentDiv.addEventListener('blur', () => {
        config.textContent = contentDiv.innerText;
        saveStickyNote(id, config);
        currentMode = MODES.GLOBAL;
    });

    note.append(tape, header, closeBtn, contentDiv);
    document.body.appendChild(note);

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let startPercentX = config.position.xPercent;
    let startPercentY = config.position.yPercent;
    let startWidth = note.offsetWidth;
    let startHeight = note.offsetHeight;

    note.addEventListener('mousedown', e => {
        if (
            e.target === closeBtn ||
            e.target === contentDiv ||
            contentDiv.contains(e.target)
        ) {
            return;
        }

        const rect = note.getBoundingClientRect();
        const resizeSize = 24;

        if (
            e.clientX >= rect.right - resizeSize &&
            e.clientY >= rect.bottom - resizeSize
        ) {
            startWidth = note.offsetWidth;
            startHeight = note.offsetHeight;
            return;
        }

        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startPercentX = config.position.xPercent;
        startPercentY = config.position.yPercent;
        note.style.cursor = 'grabbing';
        currentMode = MODES.STICKY_NOTE;
    });

    const handleMouseMove = e => {
        if (!isDragging) return;

        e.preventDefault();

        const dx = (e.clientX - startX) / window.innerWidth * 100;
        const dy = (e.clientY - startY) / window.innerHeight * 100;

        const widthPercent = note.offsetWidth / window.innerWidth * 100;
        const heightPercent = note.offsetHeight / window.innerHeight * 100;

        const x = Math.max(
            0,
            Math.min(startPercentX + dx, 100 - widthPercent)
        );

        const y = Math.max(
            0,
            Math.min(startPercentY + dy, 100 - heightPercent)
        );

        config.position.xPercent = x;
        config.position.yPercent = y;

        note.style.left = `${x}%`;
        note.style.top = `${y}%`;
    };

    const handleMouseUp = () => {
        const width = note.offsetWidth;
        const height = note.offsetHeight;

        if (
            width !== config.dimensions.width ||
            height !== config.dimensions.height
        ) {
            config.dimensions.width = width;
            config.dimensions.height = height;
        }

        if (isDragging) {
            isDragging = false;
            note.style.cursor = 'move';
            currentMode = MODES.GLOBAL;
        }

        saveStickyNote(id, config);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}

function loadStickyNotes() {
    document.querySelectorAll('.sticky-note').forEach(note => note.remove());

    const currentClass = classes[currentClassIndex].name;

    STICKY_NOTES_CONFIG.forEach(config => {
        if (!isStickyNoteAllowed(config)) return;

        const key = `stickyNote_${currentClass}_${config.id}`;
        const saved = localStorage.getItem(key);

        if (saved) {
            try {
                const data = JSON.parse(saved);

                if (typeof data.textContent === 'string') {
                    config.textContent = data.textContent;
                }

                if (data.position) {
                    config.position = normalizePosition(data.position);
                }

                if (data.dimensions) {
                    if (typeof data.dimensions.width === 'number') {
                        config.dimensions.width = data.dimensions.width;
                    }

                    if (typeof data.dimensions.height === 'number') {
                        config.dimensions.height = data.dimensions.height;
                    }
                }

                if (data.backgroundColor) {
                    config.backgroundColor = data.backgroundColor;
                }

                if (data.imageSrc !== undefined) {
                    config.imageSrc = data.imageSrc;
                }
            } catch (error) {
                console.warn(`Could not load sticky note "${config.id}".`, error);
            }
        }

        createStickyNote(config, config.id);
    });
}