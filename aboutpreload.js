document.addEventListener("DOMContentLoaded", function () {
    // Hide preloader and show content when the page is fully loaded
    const preloader = document.getElementById('loader');
    const navi = document.getElementById('nav');
    window.addEventListener('load', function () {
        preloader.style.display = "none";
        navi.classList.add('navani');
    });
});