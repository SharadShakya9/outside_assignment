var videos = document.querySelectorAll("video")
var currentVideo = null

function playPause(videoId, buttonId, containerId) {
    var vid = document.getElementById(videoId)
    var button = document.getElementById(buttonId)
    var container = document.getElementById(containerId)

    if (currentVideo && currentVideo !== vid) {
        currentVideo.pause();
        var currentButton = currentVideo.closest('.video-container').querySelector(".play-pause");
        currentButton.innerHTML = `
            <svg width="25" height="35" viewBox="0 0 25 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.184753 33.119V1.33107C0.184753 0.520036 1.09946 0.0463535 1.76183 0.514382L24.2555 16.4084C24.8194 16.8068 24.8194 17.6433 24.2555 18.0417L1.76183 33.9357C1.09946 34.4037 0.184753 33.93 0.184753 33.119Z" fill="white"/>
            </svg>
        `;
        currentVideo.closest('.video-container').classList.remove("video-playing");
    }


    if (vid.paused) {
        vid.play();
        button.innerHTML = `<svg width="25" height="39" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="white" d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
        </svg>`;
        container.classList.add("video-playing");
        currentVideo = vid;
    } else {
        vid.pause();
        button.innerHTML = `
            <svg width="25" height="35" viewBox="0 0 25 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.184753 33.119V1.33107C0.184753 0.520036 1.09946 0.0463535 1.76183 0.514382L24.2555 16.4084C24.8194 16.8068 24.8194 17.6433 24.2555 18.0417L1.76183 33.9357C1.09946 34.4037 0.184753 33.93 0.184753 33.119Z" fill="white"/>
            </svg>`;
        container.classList.remove("video-playing");
        currentVideo = null;
    }
}

var topButton = document.getElementById('top')
var scrollThreshold = 100

window.onscroll = function() {
    if (window.scrollY > scrollThreshold) {
        topButton.style.opacity = "1"
        topButton.style.visibility = "visible"
    } else {
        topButton.style.opacity = "0"
        topButton.style.visibility = "hidden"
    }
}