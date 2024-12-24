// Use dynamic import to load node-fetch
import('node-fetch').then(({ default: fetch }) => {
  const apiKey = '5450a0347e52d31f993dae5a9b8b9a5b';  // Replace with your Last.fm API key
  const trackName = 'Still loving you';  // The track you're searching for

  const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${encodeURIComponent(trackName)}&api_key=${apiKey}&format=json`;


  fetch(url)
  .then(response => response.json())
  .then(data => {
    // Check if there are tracks in the response
    const tracks = data.results.trackmatches.track;
    
    if (tracks && tracks.length > 0) {
      console.log(`Found ${tracks.length} track(s) for "${trackName}":`);
      
      // Loop through the tracks and display their names, artists, and artwork
      tracks.forEach(track => {
        console.log(`Track: ${track.name}`);
        console.log(`Artist: ${track.artist}`);
        console.log(`URL: ${track.url}`);
        
        // Check if there's artwork available
        if (track.image && track.image.length > 0) {
          // Find the "medium" size image (you can also use "large" or "extra-large")
          const artworkUrl = track.image.find(img => img.size === 'medium')?.['#text'] || 'No artwork available';
          console.log(`Artwork: ${artworkUrl}`);
        } else {
          console.log('No artwork available');
        }
        
        console.log('---');
      });
    } else {
      console.log('No tracks found.');
    }
  })
  .catch(error => {
    console.error('Error fetching data from Last.fm:', error);
  });
});