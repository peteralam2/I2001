// Define the Song class
class Song {
  constructor(name, artist, album, releaseDate, file, pic = "default-art.png") {
      this.name = name;
      this.artist = artist;
      this.album = album;
      this.releaseDate = releaseDate;
      this.file = file;
      this.pic = pic;
  }

  play(audioPlayer) {
      if (!audioPlayer) {
          console.error("Audio player element not found.");
          return;
      }

      // Set the audio source if not already set
      if (audioPlayer.src !== this.file) {
          audioPlayer.src = this.file;
      }
      audioPlayer.play();

      // Update the UI with song details
      document.querySelector(".track-name").textContent = this.name || "Unknown Title";
      document.querySelector(".track-artist").textContent = this.artist || "Unknown Artist";
      document.querySelector(".track-album").textContent = this.album || "Unknown Album";
      document.querySelector(".release-date").textContent = this.releaseDate || "Unknown Release Date";
      document.querySelector(".track-art").src = this.pic || "default-art.png";
  }

  stop(audioPlayer) {
      if (!audioPlayer) {
          console.error("Audio player element not found.");
          return;
      }

      // Pause the audio and reset playback time
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
  }
}

// Initialize songs dynamically
const songs = [
  new Song(
      "Paranoid Android",
      "Radiohead",
      "OK COMPUTER",
      "1997",
      "/music/paranoid_android.mp3",
      "/img/radiohead.jpg"
  ),
  new Song(
      "Bohemian Rhapsody",
      "Queen",
      "A Night at the Opera",
      "1975",
      "/music/bohemian_rhapsody.mp3",
      "/img/queen.jpg"
  ),
  // Add more songs here
];

document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");

  // Track currently playing song
  let currentlyPlaying = null;

  // Add event listeners to all play buttons
  document.querySelectorAll(".play-btn").forEach((button, index) => {
      button.addEventListener("click", function () {
          const song = songs[index]; // Get the corresponding song

          // Check if the current song is already playing
          if (currentlyPlaying === song) {
              song.stop(audioPlayer); // Stop the song
              currentlyPlaying = null;
              button.textContent = "Play"; // Update button text
              button.classList.remove("playing"); // Remove playing class
          } else {
              if (currentlyPlaying) {
                  currentlyPlaying.stop(audioPlayer); // Stop the previous song
                  const previousButton = document.querySelector(".play-btn.playing");
                  if (previousButton) {
                      previousButton.textContent = "Play"; // Reset the previous button
                      previousButton.classList.remove("playing"); // Remove playing class
                  }
              }
              song.play(audioPlayer); // Play the new song
              currentlyPlaying = song;
              button.textContent = "Stop"; // Update button text
              button.classList.add("playing"); // Add playing class
          }
      });
  });
});