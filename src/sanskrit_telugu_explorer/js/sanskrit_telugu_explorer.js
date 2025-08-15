// Sanskrit & Telugu Explorer JS

// Sanskrit & Telugu Explorer JS (refactored entrypoint)
import { languageData } from './data.js';
import { populateVoiceList, speakWord as speakWordModule } from './speech.js';
import { renderMindmapView, renderInvertedMindmapView } from './mindmap.js';

let activeCharType = null;
let activeCharData = null;
let currentLang = 'sanskrit';
let viewMode = 'map'; // 'map' or 'list'
let sessionState = {
    sanskrit: { visited: [] },
    telugu: { visited: [] },
    theme: 'default'
};

let carouselIndex = 0;
let lastInteractionSource = 'grid';

// DOM elements will be wired during init()
let vowelsGrid, consonantsGrid, vowelsTitle, consonantsTitle, detailView;
let mapViewBtn, listViewBtn, carouselSection, carouselTrack, carouselPrevBtn, carouselNextBtn;
let saveBtn, loadBtn, sessionStatusEl, themeSwitcher;

// speech setup is handled by the speech module (populateVoiceList)

function renderLanguage(lang) {
    currentLang = lang;
    const data = languageData[lang];

    vowelsGrid.innerHTML = '';
    consonantsGrid.innerHTML = '';
    detailView.innerHTML = `<p class="text-center text-subtle">Select a character from the left to see its details.</p>`;
    activeCharData = null;
    activeCharType = null;

    vowelsTitle.textContent = data.vowels.title;
    consonantsTitle.textContent = data.consonants.title;

    data.vowels.list.forEach(item => {
        const box = document.createElement('div');
        box.className = 'character-box';
        box.textContent = item.char;
        box.dataset.char = item.char;
        box.addEventListener('click', () => showCharacterDetails(item, 'Vowel', 'grid'));
        vowelsGrid.appendChild(box);
    });

    data.consonants.list.forEach(item => {
        const box = document.createElement('div');
        box.className = 'character-box';
        box.textContent = item.char;
        box.dataset.char = item.char;
        box.addEventListener('click', () => showCharacterDetails(item, 'Consonant', 'grid'));
        consonantsGrid.appendChild(box);
    });

    updateCarousel();
    updateVisitedStyles();
}

function renderMindmapViewDelegate(charData, type) {
    return renderMindmapView(detailView, charData, type, currentLang, speakWordModule);
}

function renderInvertedMindmapViewDelegate(charData, type, targetElement) {
    return renderInvertedMindmapView(charData, type, targetElement, currentLang, speakWordModule);
}

function renderListView(charData) {
    detailView.innerHTML = '';
    const largeChar = document.createElement('div');
    largeChar.className = 'text-8xl md:text-9xl font-bold text-center text-indigo-600 mb-6';
    largeChar.textContent = charData.char;
    detailView.appendChild(largeChar);

    const examplesList = document.createElement('ul');
    examplesList.className = 'space-y-3';

    if (charData.examples && charData.examples.length > 0) {
        charData.examples.forEach(ex => {
            const listItem = document.createElement('li');
            listItem.className = 'flex justify-between items-center text-lg p-3 border-b example-list-item';
            listItem.innerHTML = `<span class="font-semibold">${ex.word}</span> <span class="text-subtle">${ex.meaning}</span>`;
            listItem.addEventListener('click', () => speakWordModule(ex.word, currentLang));
            examplesList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.className = 'text-center text-subtle mt-4';
        listItem.textContent = 'Example words are not available for this character.';
        examplesList.appendChild(listItem);
    }
    detailView.appendChild(examplesList);
}

function createNode(text, className, position, content) {
    const node = document.createElement('div');
    node.className = `mindmap-node ${className}`;
    node.style.left = `${position.x}px`;
    node.style.top = `${position.y}px`;
    if (content) {
        node.innerHTML = content;
    } else {
        node.textContent = text;
    }
    return node;
}

function createLine(pos1, pos2) {
    const line = document.createElement('div');
    const length = Math.sqrt((pos2.x - pos1.x) ** 2 + (pos2.y - pos1.y) ** 2);
    const angle = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
    const centerX = (pos1.x + pos2.x) / 2 - length / 2;
    const centerY = (pos1.y + pos2.y) / 2;

    line.className = 'mindmap-line';
    line.style.width = `${length}px`;
    line.style.height = '2px';
    line.style.transform = `rotate(${angle}deg)`;
    line.style.left = `${centerX}px`;
    line.style.top = `${centerY}px`;
    return line;
}

// Speech is provided by the speech module; use speakWordModule(word, lang)

function showCharacterDetails(charData, type, source = 'grid') {
    activeCharData = charData;
    activeCharType = type;
    lastInteractionSource = source;

    if (!sessionState[currentLang].visited.some(item => item.char === charData.char)) {
        sessionState[currentLang].visited.push({ char: charData.char, type: type });
    }
    updateCarousel();
    updateVisitedStyles();

    detailView.classList.remove('fade-in');
    void detailView.offsetWidth;
    detailView.classList.add('fade-in');

    if (viewMode === 'map') {
        renderMindmapViewDelegate(charData, type);
    } else {
        renderListView(charData);
    }
}

function setViewMode(mode) {
    viewMode = mode;
    mapViewBtn.classList.toggle('active', mode === 'map');
    listViewBtn.classList.toggle('active', mode === 'list');
    if (activeCharData) {
        showCharacterDetails(activeCharData, activeCharType, 'grid'); // Default to grid source on view change
    }
}

function updateVisitedStyles() {
    document.querySelectorAll('.character-box').forEach(box => {
        box.classList.remove('active', 'visited');
        if (sessionState[currentLang].visited.some(item => item.char === box.dataset.char)) {
            box.classList.add('visited');
        }
    });
    if (activeCharData) {
        const activeBox = document.querySelector(`.character-box[data-char="${activeCharData.char}"]`);
        if (activeBox) {
            activeBox.classList.add('active');
        }
    }
}

function updateCarousel() {
    const visitedCharData = sessionState[currentLang].visited;
    if (visitedCharData.length === 0) {
        carouselSection.classList.add('hidden');
        return;
    }
    carouselSection.classList.remove('hidden');
    carouselTrack.innerHTML = '';
    visitedCharData.forEach(data => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'carousel-item';
        const box = document.createElement('div');
        box.className = 'character-box'; // Removed 'visited' class
        box.textContent = data.char;

        let overlayTimeout;

        box.addEventListener('mouseover', () => {
            const fullData = [...languageData[currentLang].vowels.list, ...languageData[currentLang].consonants.list].find(d => d.char === data.char);
            if (fullData) {
                renderInvertedMindmapViewDelegate(fullData, data.type, itemDiv);
            }
        });

        box.addEventListener('mouseout', () => {
            const overlay = document.getElementById('mindmap-overlay');
            if (overlay) {
                overlay.remove();
            }
        });

        itemDiv.appendChild(box);
        carouselTrack.appendChild(itemDiv);
    });
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const itemWidth = 90; // 70px width + 20px margin
    const offset = -carouselIndex * itemWidth;
    carouselTrack.style.transform = `translateX(${offset}px)`;
}

carouselPrevBtn && carouselPrevBtn.addEventListener('click', () => {
    if (carouselIndex > 0) {
        carouselIndex--;
        updateCarouselPosition();
    }
});

carouselNextBtn && carouselNextBtn.addEventListener('click', () => {
    const itemWidth = 90;
    const trackWidth = sessionState[currentLang].visited.length * itemWidth;
    const containerWidth = carouselTrack.parentElement.offsetWidth;
    if (trackWidth > containerWidth && (carouselIndex + 1) * itemWidth < trackWidth - containerWidth + itemWidth) {
        carouselIndex++;
        updateCarouselPosition();
    }
});

function saveSession() {
    sessionState.theme = themeSwitcher.value;
    localStorage.setItem('languageLearningSession', JSON.stringify(sessionState));
    sessionStatusEl.textContent = 'Session saved!';
    setTimeout(() => sessionStatusEl.textContent = '', 2000);
}

function loadSession() {
    const savedStateJSON = localStorage.getItem('languageLearningSession');
    if (savedStateJSON) {
        const savedState = JSON.parse(savedStateJSON);
        sessionState.sanskrit.visited = savedState.sanskrit.visited || [];
        sessionState.telugu.visited = savedState.telugu.visited || [];
        setTheme(savedState.theme || 'default');
        renderLanguage(currentLang); // Re-render the current view with loaded data
        sessionStatusEl.textContent = 'Session loaded!';
        setTimeout(() => sessionStatusEl.textContent = '', 2000);
    } else {
        sessionStatusEl.textContent = 'No saved session found.';
        sessionStatusEl.style.color = '#ef4444';
        setTimeout(() => {
            sessionStatusEl.textContent = '';
            sessionStatusEl.style.color = '#10b981';
        }, 2000);
    }
}

// --- Theme Management ---
function setTheme(themeName) {
    document.body.className = 'bg-main text-main'; // Reset classes
    if (themeName !== 'default') {
        document.body.classList.add(themeName);
    }
    themeSwitcher.value = themeName;
    sessionState.theme = themeName;
}

function closeOverlayIfClickedOutside(event) {
    const overlay = document.getElementById('mindmap-overlay');
    if (overlay && !overlay.contains(event.target) && !event.target.closest('.carousel-item')) {
        overlay.remove();
    }
}

function handleResize() {
    if (activeCharData && viewMode === 'map') {
        showCharacterDetails(activeCharData, activeCharType, lastInteractionSource);
    }
    updateCarouselPosition();
}

// Public init function for module consumers
export function init() {
    // Wire DOM elements
    vowelsGrid = document.getElementById('vowels-grid');
    consonantsGrid = document.getElementById('consonants-grid');
    vowelsTitle = document.getElementById('vowels-title');
    consonantsTitle = document.getElementById('consonants-title');
    detailView = document.getElementById('detail-view');
    mapViewBtn = document.getElementById('mapViewBtn');
    listViewBtn = document.getElementById('listViewBtn');
    carouselSection = document.getElementById('carousel-section');
    carouselTrack = document.getElementById('carousel-track');
    carouselPrevBtn = document.getElementById('carousel-prev');
    carouselNextBtn = document.getElementById('carousel-next');
    saveBtn = document.getElementById('saveBtn');
    loadBtn = document.getElementById('loadBtn');
    sessionStatusEl = document.getElementById('session-status');
    themeSwitcher = document.getElementById('theme-switcher');

    // Speech voices
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    // Button wiring
    document.getElementById('sanskritBtn').addEventListener('click', () => renderLanguage('sanskrit'));
    document.getElementById('teluguBtn').addEventListener('click', () => renderLanguage('telugu'));
    mapViewBtn && mapViewBtn.addEventListener('click', () => setViewMode('map'));
    listViewBtn && listViewBtn.addEventListener('click', () => setViewMode('list'));

    carouselPrevBtn && carouselPrevBtn.addEventListener('click', () => {
        if (carouselIndex > 0) {
            carouselIndex--;
            updateCarouselPosition();
        }
    });

    carouselNextBtn && carouselNextBtn.addEventListener('click', () => {
        const itemWidth = 90;
        const trackWidth = sessionState[currentLang].visited.length * itemWidth;
        const containerWidth = carouselTrack.parentElement.offsetWidth;
        if (trackWidth > containerWidth && (carouselIndex + 1) * itemWidth < trackWidth - containerWidth + itemWidth) {
            carouselIndex++;
            updateCarouselPosition();
        }
    });

    saveBtn && saveBtn.addEventListener('click', saveSession);
    loadBtn && loadBtn.addEventListener('click', loadSession);
    themeSwitcher && themeSwitcher.addEventListener('change', (e) => setTheme(e.target.value));

    document.body.addEventListener('click', closeOverlayIfClickedOutside);
    window.addEventListener('resize', handleResize);

    // Initial render
    renderLanguage('sanskrit');
    setViewMode('map');
}

export { languageData };
