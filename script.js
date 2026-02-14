// Scene management
const scenes = {
    1: document.getElementById('scene1'),
    2: document.getElementById('scene2'),
    3: document.getElementById('scene3')
};

// Validate that all scene elements exist
if (!scenes[1] || !scenes[2] || !scenes[3]) {
    console.error('Error: One or more scene elements not found');
    throw new Error('Required scene elements are missing from the DOM');
}

let currentScene = 1;

// Timing constants
const GREETING_DURATION_MS = 4000;

// Function to switch scenes
function switchScene(sceneNumber) {
    scenes[currentScene].classList.remove('active');
    currentScene = sceneNumber;
    scenes[currentScene].classList.add('active');
}

// Auto-transition from Scene 1 to Scene 2
setTimeout(() => {
    switchScene(2);
}, GREETING_DURATION_MS);

// Scene 2: Button interactions
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Yes button click - go to Scene 3
yesBtn.addEventListener('click', () => {
    switchScene(3);
});

// No button hover/click - make it run away
let noBtnMoveCount = 0;

function moveNoButton() {
    noBtnMoveCount++;
    
    // Get button dimensions
    const btnRect = noBtn.getBoundingClientRect();
    const btnWidth = btnRect.width;
    const btnHeight = btnRect.height;
    
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Calculate safe boundaries (keep button fully visible)
    const maxX = viewportWidth - btnWidth - 20;
    const maxY = viewportHeight - btnHeight - 20;
    const minX = 20;
    const minY = 20;
    
    // Generate random position
    let newX = Math.random() * (maxX - minX) + minX;
    let newY = Math.random() * (maxY - minY) + minY;
    
    // Apply the new position
    noBtn.style.position = 'fixed';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    
    // After 5 attempts, make it even more dramatic
    if (noBtnMoveCount >= 5) {
        noBtn.textContent = 'You sure? 🥺';
    }
    
    // After 10 attempts, change text again
    if (noBtnMoveCount >= 10) {
        noBtn.textContent = 'Please? 💔';
    }
}

// Make the No button run away on hover (mouseover)
noBtn.addEventListener('mouseenter', moveNoButton);

// Also make it move when clicked (in case hover doesn't work well on touch devices)
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Touch support for mobile devices
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});
