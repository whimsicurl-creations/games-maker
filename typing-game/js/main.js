window.addEventListener('load', init);

// Global variables
let time = 5;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds =  document.querySelector('#seconds');

const words = [
    'hat', 
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

// Initialize game
function init() {
    // Load word from array
    showWord(words);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}

// Pick & show randow word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    // Make sure time has not run out
    if (time > 0) {
        // Decrease time by 1 second
        time--;
    } else if (time === 0) {
        // Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
    }
}