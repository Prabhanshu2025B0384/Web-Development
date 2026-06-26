const audioElement = new Audio();

let songIndex = 0;

const masterPlay = document.getElementById("masterPlay");
const progressBar = document.getElementById("progBar");
const gif = document.querySelector(".songInfo1 img");
const currentSong = document.getElementById("currentSong");

const songItems = document.getElementsByClassName("songItemPlay");

const songs = [
    { name: "Mujhe Peene Do - Darshan Raval", file: "songs/1.mp3" },
    { name: "Pal Pal - Talwinder", file: "songs/2.mp3" },
    { name: "Shaky - Unknown", file: "songs/3.mp3" },
    { name: "Sanam Re - Arijit Singh", file: "songs/4.mp3" },
    { name: "Haseen - Talha Anjum", file: "songs/5.mp3" }
];

function makeAllPlays() {
    for (let i = 0; i < songItems.length; i++) {
        songItems[i].classList.remove("fa-pause");
        songItems[i].classList.add("fa-play");
    }
}

function playSong(index) {
    songIndex = index;

    audioElement.src = songs[index].file;
    audioElement.currentTime = 0;
    audioElement.play();

    currentSong.innerText = songs[index].name;
    gif.style.opacity = 1;

    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");

    makeAllPlays();

    songItems[index].classList.remove("fa-play");
    songItems[index].classList.add("fa-pause");
}

masterPlay.addEventListener("click", function () {

    if (!audioElement.src) {
        playSong(songIndex);
        return;
    }

    if (audioElement.paused) {
        audioElement.play();
        masterPlay.classList.replace("fa-play", "fa-pause");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.replace("fa-pause", "fa-play");
        gif.style.opacity = 0;
    }
});

for (let i = 0; i < songItems.length; i++) {
    songItems[i].addEventListener("click", function () {
        playSong(i);
    });
}

audioElement.addEventListener("timeupdate", function () {
    if (!isNaN(audioElement.duration)) {
        progressBar.value = (audioElement.currentTime / audioElement.duration) * 100;
    }
});

progressBar.addEventListener("input", function () {
    if (!isNaN(audioElement.duration)) {
        audioElement.currentTime = (progressBar.value / 100) * audioElement.duration;
    }
});

document.querySelector(".fa-forward").addEventListener("click", function () {
    let next = (songIndex + 1) % songs.length;
    playSong(next);
});

document.querySelector(".fa-backward").addEventListener("click", function () {
    let prev = (songIndex - 1 + songs.length) % songs.length;
    playSong(prev);
});

audioElement.addEventListener("ended", function () {
    let next = (songIndex + 1) % songs.length;
    playSong(next);
});