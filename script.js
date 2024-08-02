const character = document.getElementById('character');
const container = document.querySelector('.container');
const containerWidth = container.clientWidth;
const characterWidth = character.clientWidth;
let position = (containerWidth - characterWidth) / 2; // Center the character horizontally

// Initialize character position
character.style.left = position + 'px';

function moveLeft() {
    position -= 10; // Move left by 10px
    if (position < 0) position = 0; // Prevent moving out of bounds
    character.style.left = position + 'px';
    character.classList.remove('face-right', 'face-down');
    character.classList.add('face-left');
}

function moveRight() {
    position += 10; // Move right by 10px
    const maxPosition = containerWidth - characterWidth;
    if (position > maxPosition) position = maxPosition; // Prevent moving out of bounds
    character.style.left = position + 'px';
    character.classList.remove('face-left', 'face-down');
    character.classList.add('face-right');
}
