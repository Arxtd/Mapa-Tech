const videoWrappers = document.querySelectorAll('.video-wrapper');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentVideoIndex = 0;

leftArrow.addEventListener('click', () => {
    videoWrappers[currentVideoIndex].classList.remove('active');
    currentVideoIndex = (currentVideoIndex - 1 + videoWrappers.length) % videoWrappers.length;
    videoWrappers[currentVideoIndex].classList.add('active');
});

rightArrow.addEventListener('click', () => {
    videoWrappers[currentVideoIndex].classList.remove('active');
    currentVideoIndex = (currentVideoIndex + 1) % videoWrappers.length;
    videoWrappers[currentVideoIndex].classList.add('active');
});
