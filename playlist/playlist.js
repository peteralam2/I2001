// Array to hold your playlist
const playlist = [
    {
      name: "paranoid android",
      artist: "Radiohead . ",
      album: "OK COMPUTER . ",
      releaseDate: "2025",
      file: "/music/paranoid_android.mp3",
      pic: "/img/radiohead.jpg",
    },
    {
      name: "Song 2",
      artist: "Artist 2",
      album: "Album 2",
      releaseDate: "2024",
      file: "path/to/song2.mp3"
    },
    // Add more songs as needed
  ];
  
  let currentTrackIndex = 0; // Index of the currently playing track
  const audioPlayer = document.getElementById("audio-player"); // Reference to the audio element
  
  function playTrack(index) {
    if (index < 0 || index >= playlist.length) {
      console.error("Invalid track index");
      return;
    }
  
    currentTrackIndex = index; // Set the current track index
    const track = playlist[index]; // Get the track details
  
    // Load the audio file into the player
    audioPlayer.src = track.file;
    audioPlayer.play();
  
    // Update the UI
    document.querySelector(".track-name").textContent = track.name || "Unknown Title";
    document.querySelector(".track-artist").textContent = track.artist || "Unknown Artist";
    document.querySelector(".track-album").textContent = track.album || "Unknown Album";
    document.querySelector(".release-date").textContent = track.releaseDate || "Unknown Release Date";
    document.querySelector(".track-art").src = track.pic;
  }
  
  // Play the first track by default
  playTrack(currentTrackIndex);
  
  
  // Update the current time display
  audioPlayer.addEventListener("timeupdate", () => {
    const minutes = Math.floor(audioPlayer.currentTime / 60);
    const seconds = Math.floor(audioPlayer.currentTime % 60)
      .toString()
      .padStart(2, "0");
    const durationMinutes = Math.floor(audioPlayer.duration / 60);
    const durationSeconds = Math.floor(audioPlayer.duration % 60)
      .toString()
      .padStart(2, "0");
    currentTime.textContent = `${minutes}:${seconds} / ${durationMinutes}:${durationSeconds}`;
  });
  