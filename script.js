var videos = document.querySelectorAll("video")
var currentVideo = null

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

document.addEventListener('DOMContentLoaded', () => {
    const youtubeIframe = document.getElementById('video1');
    const vimeoIframe = document.getElementById('video2');
    const localVideo = document.getElementById('video3');

    let youtubePlayer;
    let vimeoPlayer = new Vimeo.Player(vimeoIframe); // Correct Vimeo API initialization

    // Function to pause other videos
    function pauseOtherVideos(exceptVideo) {
        if (exceptVideo !== youtubePlayer && youtubePlayer && youtubePlayer.getPlayerState() === YT.PlayerState.PLAYING) {
            youtubePlayer.pauseVideo();
        }
        if (exceptVideo !== vimeoPlayer) {
            vimeoPlayer.pause();
        }
        if (exceptVideo !== localVideo && !localVideo.paused) {
            localVideo.pause();
        }
    }

    // YouTube API Setup
    function onYouTubeIframeAPIReady() {
        youtubePlayer = new YT.Player(youtubeIframe, {
            events: {
                'onStateChange': onYouTubeStateChange
            }
        });
    }

    function onYouTubeStateChange(event) {
        if (event.data === YT.PlayerState.PLAYING) {
            pauseOtherVideos(youtubePlayer);
        }
    }

    // Load YouTube API if necessary
    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        const scriptTag = document.createElement('script');
        scriptTag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(scriptTag);
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
        onYouTubeIframeAPIReady();
    }

    // Vimeo API setup and event listener
    vimeoPlayer.on('play', function() {
        pauseOtherVideos(vimeoPlayer);
    });

    // HTML5 Video Event Listener
    localVideo.addEventListener('play', () => {
        pauseOtherVideos(localVideo);
    });
});


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