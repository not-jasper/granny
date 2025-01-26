document.addEventListener("DOMContentLoaded", () => {
    // Function to request fullscreen
    function goFullscreen() {
        const elem = document.documentElement; // Select the entire document
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE/Edge
            elem.msRequestFullscreen();
        }
    }

    // Add a one-time click listener to trigger fullscreen
    document.addEventListener("click", () => {
        goFullscreen();
    }, { once: true });
});
