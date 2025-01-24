// Select the play button and the time display elements
const playButton = document.querySelector('.play-btn'); 
const timeDisplay = document.querySelector('.ftime');   

// Total duration of the track in seconds (adjust as needed)
const trackDuration = 215; 

// Variables to manage state
let isPlaying = false; 
let currentTime = 0;   
let intervalId;

// Add click event listener to the play button
playButton.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack(); 
    } else {
        playTrack();  
    }
});

// Function to play the track
function playTrack() {
    isPlaying = true;  
    updatePlayIcon();  

    // Start a timer to update the playback time every second
    intervalId = setInterval(() => {
        if (currentTime < trackDuration) {
            currentTime++;        
            updateTimeDisplay(); 
        } else {
            pauseTrack();         
            resetTrack();         
        }
    }, 1000); 
}

// Function to pause the track
function pauseTrack() {
    isPlaying = false; 
    updatePlayIcon();  
    clearInterval(intervalId); 
}

// Function to reset the track
function resetTrack() {
    currentTime = 0;        
    updateTimeDisplay();   
}


function updatePlayIcon() {
    playButton.innerHTML = isPlaying
        ? `<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed">
                <path d="M240-200v-560h120v560H240Zm360 0v-560h120v560H600Z"/>
            </svg>` // Pause Icon
        : `<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed">
                <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/>
            </svg>`; // Play Icon
}


function updateTimeDisplay() {
    const minutes = Math.floor(currentTime / 60); 
    const seconds = currentTime % 60;            
    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')} / 3:35`; 
}
