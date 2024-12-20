
const playButton = document.getElementById('play');
const progressBar = document.getElementById('progress');

let isPlaying = false;
let trackDuration = 100; // in seconds
let currentTime = 0;
let interval; // To store the interval ID

playButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playButton.textContent = isPlaying ? '⏸' : '▶';

    if (isPlaying) {
        playTrack();
    } else {
        pauseTrack();
    }
});

function playTrack() {
    interval = setInterval(() => {
        if (currentTime < trackDuration) {
            currentTime++;
            updateProgressBar();
        } else {
            clearInterval(interval);
 isPlaying = false;
            playButton.textContent = '▶'; // Reset play button to play icon
        }
    }, 1000); // Update every second
}

function pauseTrack() {
    clearInterval(interval);
}

function updateProgressBar() {
    const progressPercentage = (currentTime / trackDuration) * 100;
    progressBar.value = progressPercentage;
}

// Optional: Add event listener for progress bar change
progressBar.addEventListener('input', (event) => {
    currentTime = (event.target.value / 100) * trackDuration;
});
