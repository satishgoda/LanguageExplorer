// Mindmap rendering helpers

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

export function renderMindmapView(detailView, charData, type, currentLang, speakWord) {
    detailView.innerHTML = '';
    const containerWidth = detailView.offsetWidth;
    const containerHeight = detailView.offsetHeight;

    const typePos = { x: containerWidth / 2, y: 50 };
    const charPos = { x: containerWidth / 2, y: 150 };

    const typeNode = createNode(type, 'type-node', typePos);
    const charNode = createNode(charData.char, 'char-node', charPos);
    
    detailView.appendChild(typeNode);
    detailView.appendChild(charNode);
    detailView.appendChild(createLine(typePos, charPos));

    const examples = (charData.examples || []).slice(0, 5);
    const angleStep = examples.length > 1 ? Math.PI / (examples.length - 1) : 0;
    const radius = Math.min(containerWidth, containerHeight) / 3.5;

    if (examples.length > 0) {
        examples.forEach((ex, i) => {
            const angle = (Math.PI / 2) + angleStep * (i - (examples.length - 1) / 2);
            const wordX = charPos.x + radius * Math.cos(angle);
            const wordY = charPos.y + radius * Math.sin(angle) + 40;
            const wordPos = { x: wordX, y: wordY };
            const content = `<span>${ex.word}</span><span class="meaning">${ex.meaning}</span>`;
            const wordNode = createNode(null, 'word-node', wordPos, content);
            
            wordNode.addEventListener('click', () => speakWord(ex.word, currentLang));
            wordNode.addEventListener('mouseover', () => {
                document.querySelectorAll('.word-node').forEach(n => n.classList.add('shrink'));
                wordNode.classList.remove('shrink');
                wordNode.classList.add('grow');
            });
            wordNode.addEventListener('mouseout', () => {
                document.querySelectorAll('.word-node').forEach(n => {
                    n.classList.remove('shrink');
                    n.classList.remove('grow');
                });
            });

            detailView.appendChild(wordNode);
            detailView.appendChild(createLine(charPos, wordPos));
        });
    } else {
         const noDataPos = { x: charPos.x, y: charPos.y + 120 };
         const noDataNode = createNode('No examples available', 'word-node', noDataPos);
         detailView.appendChild(noDataNode);
         detailView.appendChild(createLine(charPos, noDataPos));
    }
}

export function renderInvertedMindmapView(charData, type, targetElement, currentLang, speakWord) {
    const existingOverlay = document.getElementById('mindmap-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }

    const overlay = document.createElement('div');
    overlay.id = 'mindmap-overlay';
    overlay.className = 'mindmap-overlay';
    document.body.appendChild(overlay);

    const targetRect = targetElement.getBoundingClientRect();
    overlay.style.top = `${window.scrollY + targetRect.top - 310}px`;
    overlay.style.left = `${window.scrollX + targetRect.left + (targetRect.width / 2)}px`;
    
    setTimeout(() => {
        overlay.classList.add('show');
    }, 10);
    
    const containerWidth = overlay.offsetWidth;
    const containerHeight = overlay.offsetHeight;

    const charPos = { x: containerWidth / 2, y: containerHeight - 60 };
    const charNode = createNode(charData.char, 'char-node', charPos);
    overlay.appendChild(charNode);

    const examples = (charData.examples || []).slice(0, 5);
    const angleStep = examples.length > 1 ? Math.PI / (examples.length - 1) : 0;
    const radius = Math.min(containerWidth, containerHeight) / 2.8;

    if (examples.length > 0) {
        examples.forEach((ex, i) => {
            const angle = - (Math.PI / 2) + angleStep * (i - (examples.length - 1) / 2);
            const wordX = charPos.x + radius * Math.cos(angle);
            const wordY = charPos.y + radius * Math.sin(angle) - 30;
            const wordPos = { x: wordX, y: wordY };
            const content = `<span>${ex.word}</span><span class="meaning">${ex.meaning}</span>`;
            const wordNode = createNode(null, 'word-node', wordPos, content);
            
            wordNode.addEventListener('click', (e) => {
                e.stopPropagation();
                speakWord(ex.word, currentLang);
            });
            
            overlay.appendChild(wordNode);
            overlay.appendChild(createLine(wordPos, charPos));
        });
    }
}
