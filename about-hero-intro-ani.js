document.addEventListener("DOMContentLoaded", function () {
    // Hide preloader and show content when the page is fully loaded
    const navi = document.getElementById('nav');
    const atitle = document.getElementById('abouttitle');
    const atitlep = atitle.querySelector('p');

    window.addEventListener('load', function () {
        navi.classList.add('navani');
        atitlep.classList.add('htitle');
    });
});