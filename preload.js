document.addEventListener("DOMContentLoaded", function () {
    // Hide preloader and show content when the page is fully loaded
    var preloader = document.getElementById("loader");
    var hr = document.getElementById("hero");
    var sr = document.getElementById("screen");

    window.addEventListener('load', function () {
        preloader.style.display = "none";
        hr.style.display = "block";
        sr.style.display = "block";
    }, 100);
});




