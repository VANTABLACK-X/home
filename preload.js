document.addEventListener("DOMContentLoaded", function () {
    // Hide preloader and show content when the page is fully loaded
    const preloader = document.getElementById('loader');
    document.body.style.overflow= 'hidden';

    setTimeout(() => {
        document.body.style.overflow= 'auto';
    });

    window.addEventListener('load', function () {
        preloader.style.display = "none";
    });
});