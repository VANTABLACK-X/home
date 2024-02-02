
window.onload = function () {
    setTimeout(function () {
        document.querySelector('#loader').Style.display = 'none';
        document.querySelector('.hero').Style.display = 'block';
    }, 2000);
};


document.addEventListener("DOMContentLoaded", function () {
    // Hide preloader and show content when the page is fully loaded
    var hr = document.getElementById("hero");
    var sr = document.querySelectorAll(".animate")

hr.style.display="block";

    sr.forEach(function(element, index){
        setTimeout(function() {
            element.classList.add("animated");
        }, index * 300);
    });
        
});
