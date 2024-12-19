let isPlaying = false;
let progress = 0;
let interval;
const totalDuration = 225; // Total duration in seconds (3:45)

const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');
const progressBar = document.getElementById('progress');
const startTimeDisplay = document.getElementById('start-time');

// Event listeners for play and stop buttons
playButton.addEventListener('click', () => {
    console.log("Play button clicked"); // Debugging line
    if (!isPlaying) {
        isPlaying = true;
        playMusic();
    }
});

stopButton.addEventListener('click', () => {
    console.log("Stop button clicked"); // Debugging line
    isPlaying = false;
    clearInterval(interval);
    progress = 0;
    updateProgress();
});

// Function to play music and update progress
function playMusic() {
    interval = setInterval(() => {
        if (progress < 100) {
            progress += 1; // Increment progress
            updateProgress();
        } else {
            clearInterval(interval);
            isPlaying = false; // Reset playing state when music ends
            console.log("Music ended"); // Debugging line
        }
    }, (totalDuration * 1000) / 100); // Update every 100ms
}

// Function to update progress bar and time display
function updateProgress() {
    progressBar.style.width = `${progress}%`;
    startTimeDisplay.textContent = formatTime((progress / 100) * totalDuration);
}

// Function to format time in mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Event listener for seeking in the progress bar
progressBar.parentElement.addEventListener('click', (event) => {
    const rect = progressBar.parentElement.getBoundingClientRect();
    const offsetX = event.clientX - rect.left; // Get the click position relative to the progress bar
    const totalWidth = rect.width; // Total width of the progress bar
    const newProgress = (offsetX / totalWidth) * 100; // Calculate new progress percentage

    progress = newProgress; // Update progress
    updateProgress(); // Update the UI
    if (isPlaying) {
        clearInterval(interval); // Clear the current interval
        playMusic(); // Restart the music playback
    }
});