

let songs = [
    {
        name: 'Bohemian Rhapsody',
        path: '/music/bohemian_rhapsody.mp3',
        artist: 'Queen',
        cover: '/img/queen.jpg'
    },
    {
        name: 'Paranoid android',
        path: '/music/paranoid_android.mp3',
        artist: 'Radohead',
        cover: '/img/radiohead.jpg'
    },
    {
        name: 'for your eyes only',
        path: '/music/J. Cole - 4 Your Eyes Only [Explicit]_1736599757231.mp3',
        artist: 'J.cole',
        cover: '/img/j.cole.jpg'
    },
    {
        name: 'A little while',
        path: '/music/A Little While_1736599782727.mp3',
        artist: 'Yellow Days',
        cover: '/img/yellow days.jpeg'
    },
    {
        name: 'Drive slow (instrumental)',
        path: '/music/Paul Wall - Drive Slow (Instrumental)_1736599863292.mp3',
        artist: 'Paul Wall',
        cover: '/img/paul wall.jpeg'
    },
    {
        name: 'Lovers Rock',
        path: '/music/TV Girl - Lovers Rock (Lyrics)_1736599924330.mp3',
        artist: 'TV girl',
        cover: '/img/tvgirl.jpeg'
    },
    {
        name: 'Shut up my mom\' calling',
        path: '/music/Hotel Ugly - Shut Up My Moms Calling (Lyrics)_1736599945036.mp3',
        artist: 'hotel ugly',
        cover: '/img/hotelugly.jpeg'
    },
    {
        name: 'Sofa king',
        path: '/music/Royel Otis - Sofa King (Official Music Video)_1736600011909.mp3',
        artist: 'Royal otis',
        cover: '/img/royalotis.webp'
    },
    {
        name:'A Girl Within My Soul',
        path:'/music/Abdulrahman&Mohab-A Girl Within My Soul بروحي فتاة-عبدالرحمن محمد ومهاب عمر_1717969071304.mp3',
        artist:'Mohammed and Mohab',
        cover:'/img/mohamedandmohab.jpeg',
    },
    {
        name:'Crazyness',
        path:'/music/Abdulrahman Mohammed&Mohab Omer - Craziness مهاب عمر و عبدالرحمن محمد-أصابك عشق_1734717907705.mp3',
        artist:'Mohammed and Mohab',
        cover:'/img/mohamedandmohab.jpeg',
    },
]


/////////////////////navigations////////////

////////////toggling music player

const musicPlayerSection = document.querySelector('.music-player-section');

let clickCount = 1;

musicPlayerSection.addEventListener('click', () => {
    // checking for double click manually idk why default dbclick event was not working with this project 
    if(clickCount >= 2){
        musicPlayerSection.classList.add('active');
        clickCount = 1;
        return;
    }
    clickCount++;
    setTimeout(() => {
        clickCount = 1;
    }, 250);
})

/////// back from music player

const backToHomeBtn = document.querySelector('.music-player-section .back-btn');

backToHomeBtn.addEventListener('click', () => {
    musicPlayerSection.classList.remove('active');
})

//////// access playlist

const playlistSection = document.querySelector('.playlist');
const navBtn = document.querySelector('.music-player-section .nav-btn');

navBtn.addEventListener('click', () => {
    playlistSection.classList.add('active');
})

////////// back from playlist to music player

const backToMusicPlayer = document.querySelector('.playlist .back-btn');

backToMusicPlayer.addEventListener('click', () => {
    playlistSection.classList.remove('active');
})

//////navigation done ////////////////


/////// music

let currentMusic = 0;

const music = document.querySelector('#audio-source');

const seekBar = document.querySelector('.music-seek-bar');
const songName = document.querySelector('.current-song-name');
const artistName = document.querySelector('.current-artist-name');
const coverImage = document.querySelector('.cover');
const currentMusicTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.duration');

const queue = [...document.querySelectorAll('.queue')];

// select all buttons here

const forwardBtn = document.querySelector('i.fa-forward');
const backwardBtn = document.querySelector('i.fa-backward');
const playBtn = document.querySelector('i.fa-play');
const pauseBtn = document.querySelector('i.fa-pause');
const repeatBtn = document.querySelector('span.fa-redo');
const volumeBtn = document.querySelector('span.fa-volume-up');
const volumeSlider = document.querySelector('.volume-slider');



// funtion for setting up music

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;

    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    coverImage.src = song.cover;

    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
    currentMusicTime.innerHTML = '00 : 00';
    queue.forEach(item => item.classList.remove('active'));
    queue[currentMusic].classList.add('active');
}

setMusic(0);

// format duration in 00 : 00 format

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0` + min;
    }

    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0` + sec;
    }

    return `${min} : ${sec}`;
}


// playBtn click event

playBtn.addEventListener('click', () => {
    music.play();
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');
})


// pauseBtn click event

pauseBtn.addEventListener('click', () => {
    music.pause();
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');
})



//  forward btn

forwardBtn.addEventListener('click', () => {
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
    } else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playBtn.click();
})

// backward btn

backwardBtn.addEventListener('click', () => {
    if(currentMusic <= 0){
        currentMusic = songs.length - 1;
    } else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playBtn.click();
})


// seekbar events

setInterval(() => {
    seekBar.value = music.currentTime;
    currentMusicTime.innerHTML = formatTime(music.currentTime);
    if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
        if(repeatBtn.className.includes('active')){
            setMusic(currentMusic);
            playBtn.click();
        } else{
            forwardBtn.click();
        }
    }
}, 500)

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})


// repeat button

repeatBtn.addEventListener('click', () => {
    repeatBtn.classList.toggle('active');
})

// volume section

volumeBtn.addEventListener('click', () => {
    volumeBtn.classList.toggle('active');
    volumeSlider.classList.toggle('active');
})

volumeSlider.addEventListener('input', () => {
    music.volume = volumeSlider.value;
})

queue.forEach((item, i) => {
    item.addEventListener('click', () => {
        setMusic(i);
        playBtn.click();
    })
})
