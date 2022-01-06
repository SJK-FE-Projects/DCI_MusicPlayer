const playlist = document.querySelector('.playlist');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const playBtn = document.querySelector('#play');
const cover = document.querySelector('#cover`');
const title = document.querySelector('#title');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('#progress');
const audio = document.querySelector('#audio');

const songs = ['01 The Miracle (Of Joey Ramone)','01 The Miracle (Of Joey Ramone)','01 The Miracle (Of Joey Ramone)' ];
let songIndex = 1;

loadSongs(songs[songIndex])
 
function loadSong(song) {
    title.innerText = song
    audio.src = `assets/src/${song}.mp3`
    cover.src = `assets/src/${song}.jpg`
} 

function playSong() {
    playlist.classList.add('play')
    playBtn.querySelector('i.fas').classList.add('pause')
    playBtn.querySelector('i.fas').classList.remove('play')
};

function pauseSong() {
    playBtn.querySelector('i.fas').classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('pause')
}

function prevSong(){
    songIndex-- 
    if (songIndex < 0){
        songIndex = songs.length-1
    }
}

playBtn.addEventListener('click', () => {
    const isPlaying = playlist.classList.contains('play')
    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})