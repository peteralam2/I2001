let songs = [
    {
        name: 'Bohemian Rhapsody',
        path: 'music/bohemian_rhapsody.mp3',
        artist: 'Queen',
        cover: 'img/queen.jpg'
    },
    {
        name: 'Paranoid android',
        path: 'music/paranoid_android.mp3',
        artist: 'Radohead',
        cover: 'img/radiohead.jpg'
    },
    {
        name: 'for your eyes only',
        path: 'music/4_ur_eyes_only.mp3',
        artist: 'J. Cole',
        cover: 'img/j.cole.jpg'
    },
    {
        name: 'Drive slow',
        path: 'music/drive_slow.mp3',
        artist: 'Kanye West',
        cover: 'img/kanyewest.jpg'
    },
    {
        name: 'Bala Wala Chi',
        path: 'music/bala_wala_chi.mp3',
        artist: 'Ziad Rahbani',
        cover: 'img/Ziad_rahbani.jpg'
    },
    {
        name: 'Ya Ana Ya Ana',
        path: 'music/ya_ana_ya_ana.mp3',
        artist: 'Fayrouz',
        cover: 'img/fayrouz.png'
    },
    
    {
        name: 'A little while',
        path: 'music/a_little_while.mp3',
        artist: 'Yellow Days',
        cover: 'img/yellow_days.jpeg'
    },
    
    {
        name: 'Lovers Rock',
        path: 'music/lovers_rock.mp3',
        artist: 'TV girl',
        cover: 'img/tvgirl.jpeg'
    },
    
    
    {
        name:'Innerbloom',
        path:'music/Innerbloom.mp3',
        artist:'RÜFÜS DU SOL',
        cover:'img/innerbloom.jpg',
    },
    {
        name:'On My Knees',
        path:'music/on_my_knees.mp3',
        artist:'RÜFÜS DU SOL',
        cover:'img/innerbloom.jpg',
    },

    {
        name:'Beat It',
        path:'music/beat_it.mp3',
        artist:'Michael Jackson',
        cover:'img/michael_jackson.jpeg',
    },
    {
        name:'Girls Like You',
        path:'music/girls_like_you.mp3',
        artist:'Maroon 5 ft. Cardi B',
        cover:'img/maroon5.jpg',
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
var playlistSection;
var backToMusicPlayer;

const navBtn = document.querySelector('.music-player-section .nav-btn');
const rock_playlist = document.querySelector('#c1');
const rap_playlist = document.querySelector('#c2');
const arabic_playlist = document.querySelector('#c3');
const indie_playlist = document.querySelector('#c4');
const electronic_playlist = document.querySelector('#c5');
const pop_playlist = document.querySelector('#c6');

rock_playlist.addEventListener('click', () => {
    
    playlistSection = document.querySelector('.playlist');
    playlistSection.classList.add('active');
    setMusic(0);
    playBtn.classList.add('active');
    pauseBtn.classList.remove('active');

    navBtn.addEventListener('click', () => {
        playlistSection.classList.add('active');
    })

    backToMusicPlayer = document.querySelector('.playlist .back-btn');
    backToMusicPlayer.addEventListener('click', () => {
        playlistSection.classList.remove('active');
    })
});

rap_playlist.addEventListener('click', () => {

    playlistSection = document.querySelector('.rap-playlist');
    playlistSection.classList.add('active');
    setMusic(2);
    playBtn.classList.add('active');
    pauseBtn.classList.remove('active');
    navBtn.addEventListener('click', () => {
        playlistSection.classList.add('active');
    })

    backToMusicPlayer = document.querySelector('.rap-playlist .back-btn');
    backToMusicPlayer.addEventListener('click', () => {
        playlistSection.classList.remove('active');
    })
});

arabic_playlist.addEventListener('click', () => {

    playlistSection = document.querySelector('.arabic-playlist');
    playlistSection.classList.add('active');
    setMusic(4);
    playBtn.classList.add('active');
    pauseBtn.classList.remove('active');
    
    navBtn.addEventListener('click', () => {
        playlistSection.classList.add('active');
    })

    backToMusicPlayer = document.querySelector('.arabic-playlist .back-btn');
    backToMusicPlayer.addEventListener('click', () => {
        playlistSection.classList.remove('active');
    })
});

indie_playlist.addEventListener('click', () => {

    playlistSection = document.querySelector('.indie-playlist');
    playlistSection.classList.add('active');
    setMusic(6);
    playBtn.classList.add('active');
    pauseBtn.classList.remove('active');

    navBtn.addEventListener('click', () => {
        playlistSection.classList.add('active');
    })

    backToMusicPlayer = document.querySelector('.indie-playlist .back-btn');
    backToMusicPlayer.addEventListener('click', () => {
        playlistSection.classList.remove('active');
    })
});

electronic_playlist.addEventListener('click', () => {

    playlistSection = document.querySelector('.electronic-playlist');
    playlistSection.classList.add('active');
    setMusic(8);
    playBtn.classList.add('active');
    pauseBtn.classList.remove('active');

    navBtn.addEventListener('click', () => {
        playlistSection.classList.add('active');
    })

    backToMusicPlayer = document.querySelector('.electronic-playlist .back-btn');
    backToMusicPlayer.addEventListener('click', () => {
        playlistSection.classList.remove('active');
    })
});

pop_playlist.addEventListener('click', () => {

    playlistSection = document.querySelector('.pop-playlist');
    playlistSection.classList.add('active');
    setMusic(10);
    playBtn.classList.add('active');
    pauseBtn.classList.remove('active');
    
    navBtn.addEventListener('click', () => {
        playlistSection.classList.add('active');
    })

    backToMusicPlayer = document.querySelector('.pop-playlist .back-btn');
    backToMusicPlayer.addEventListener('click', () => {
        playlistSection.classList.remove('active');
    })
});





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
};

// Add the click event listener



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
