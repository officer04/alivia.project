// mobile nav
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNavWrapper = document.querySelector(".mobile-nav-wrapper");

mobileNavButton.addEventListener("click", function() {
    mobileNavIcon.classList.toggle("active");
    mobileNavWrapper.classList.toggle("active");
    document.body.classList.toggle('no-scroll');
})

// story video

const videoBtn = document.querySelector("#video-story-btn");
const videoBtnIcon = document.querySelector("#video-story-btn-icon");
const videoFile = document.querySelector("#video-story");
const videoOverlay = document.querySelector("#video-story-overlay");

videoBtn.addEventListener("click", function() {
    
    function toggleOverlay(event) {
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden');
        } else {
            videoOverlay.classList.remove('hidden');
        }
    }
    
    if (videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src = "/img/story/pause_icon.svg"

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;

    } else {
        videoFile.pause();
        videoBtnIcon.src = "/img/story/play-white.svg"
        videoOverlay.onmouseleave = null;
    }
        
})