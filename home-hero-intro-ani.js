document.addEventListener("DOMContentLoaded", function () {
    // Hide preloader and show content when the page is fully loaded
    const navi = document.getElementById('nav');
    const sr = document.getElementById('screen');
    const cm22 = document.getElementById('center-main22');
    const cm23 = document.getElementById('center-main23');
    const cm32 = document.getElementById('center-main32');
    const cm33 = document.getElementById('center-main33');
    const rdp = document.getElementById('r-dp-container');
    const mem1 = document.getElementById('member1');
    const mem2 = document.getElementById('member2');
    const mem3 = document.getElementById('member3');
    const mem4 = document.getElementById('member4');
    const htitle = document.getElementById('hometitle');
    const htitlep = htitle.querySelector('p');
    const hservice = document.getElementById('homeservice');
    const hservicep = hservice.querySelector('p');
    const hmessage = document.getElementById('message');
    const hcontat = document.getElementById('home-hero-contact');
    const hline1 = document.getElementById('hero-line');

    window.addEventListener('load', function () {
        navi.classList.add('navani');
        sr.classList.add('sranimation');
        cm22.classList.add('cm22');
        cm23.classList.add('cm23');
        cm32.classList.add('cm32');
        cm33.classList.add('cm33');
        rdp.classList.add('rdp');
        mem1.classList.add('mem1');
        mem2.classList.add('mem2');
        mem3.classList.add('mem3');
        mem4.classList.add('mem4');
        htitlep.classList.add('htitle');
        hservicep.classList.add('hservice');
        hmessage.classList.add('message');
        hcontat.classList.add('contact');
        hline1.classList.add('hline1');
    });
});

var bars = document.getElementById("bars");
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
    bars.classList.toggle('active');
}
function closemenu() {
    sidemenu.style.right = "-35vh";
    bars.classList.remove('active');
}


document.querySelectorAll('#scrollLink').forEach(function (link){
    link.addEventListener('click', function(event){
        event.preventDefault();
        var targetId = this.getAttribute('data-target');
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function(){
    var container = document.querySelector('.reviews-wrapper');
    var scrollRightButton = document.getElementById('reviews-scroll-right');
    var scrollLeftButton = document.getElementById('reviews-scroll-left');
    var scrollAmount = 300;

    function smoothScroll(direction) {
      var scrollDirection = direction === 'right' ? scrollAmount : -scrollAmount;
      var targetScroll = container.scrollLeft + scrollDirection;
      var startScroll = container.scrollLeft;
      var startTime = performance.now();
  
      function animation(currentTime) {
        var elapsed = currentTime - startTime;
        container.scrollLeft = easeInOut(elapsed, startScroll, scrollDirection, 500);
  
        if (elapsed < 500) {
          requestAnimationFrame(animation);
        }
      }
  
      requestAnimationFrame(animation);
    }
  
    function easeInOut(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    scrollRightButton.addEventListener('click', function () {
      smoothScroll('right');
    });
  
    scrollLeftButton.addEventListener('click', function () {
      smoothScroll('left');
    });
});
