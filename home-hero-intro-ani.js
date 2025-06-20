document.addEventListener("DOMContentLoaded", function () {
    // Hide preloader and show content when the page is fully loaded
    const navi = document.getElementById('nav');
    const sr = document.getElementById('screen');
    const cm22 = document.getElementById('center-main22');
    const cm23 = document.getElementById('center-main23');
    const cm32 = document.getElementById('center-main32');
    const cm33 = document.getElementById('center-main33');
    const rdp = document.getElementById('r-dp-container');
    const mem1 = document.getElementById('member2');
    const mem2 = document.getElementById('member1');
    const mem3 = document.getElementById('member3');
    const mem4 = document.getElementById('member4');
    const htitle = document.getElementById('hometitle');
    const htitlep = htitle.querySelector('p');
    const htitle1 = document.getElementById('hometitle1');
    const htitle1p = htitle1.querySelector('p');
    const hmessage = document.getElementById('message');

    window.addEventListener('load', function () {
        navi.classList.add('navani');
        sr.classList.add('sranimation');
        cm22.classList.add('cm22');
        cm23.classList.add('cm23');
        cm32.classList.add('cm32');
        cm33.classList.add('cm33');
        rdp.classList.add('rdp');
        mem1.classList.add('mem2');
        mem2.classList.add('mem1');
        mem3.classList.add('mem3');
        mem4.classList.add('mem4');
        htitlep.classList.add('htitle');
        htitle1p.classList.add('htitle');
        hmessage.classList.add('message');
    });
});

document.getElementById('viewResumeButton').addEventListener('click', function() {
  window.open('resume/resume.pdf', '_blank');
});

var bars = document.getElementById("bars");
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
    bars.classList.toggle('active');
}
function closemenu() {
    sidemenu.style.right = "-47vh";
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

document.addEventListener('DOMContentLoaded', function(){
  var container1 = document.querySelector('.projects-wrapper');
  var scrollRightButton1 = document.getElementById('projects-scroll-right');
  var scrollLeftButton1 = document.getElementById('projects-scroll-left');
  var scrollAmount = 300;

  function smoothScroll(direction) {
    var scrollDirection = direction === 'right' ? scrollAmount : -scrollAmount;
    var targetScroll = container1.scrollLeft + scrollDirection;
    var startScroll = container1.scrollLeft;
    var startTime = performance.now();

    function animation(currentTime) {
      var elapsed = currentTime - startTime;
      container1.scrollLeft = easeInOut(elapsed, startScroll, scrollDirection, 500);

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

  scrollRightButton1.addEventListener('click', function () {
    smoothScroll('right');
  });

  scrollLeftButton1.addEventListener('click', function () {
    smoothScroll('left');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.querySelector('.cards-container');
  const svgs = document.querySelectorAll('.svg-icon');
  let currentIndex = 0;

  function showCard(index) {
      currentIndex = index;
      const offset = -index * 100; // move the container to show the desired card
      cardsContainer.style.transform = `translateX(${offset}%)`;
  }

  function bringToFront(index) {
      svgs.forEach((s, i) => {
          if (i === index) {
              s.style.zIndex = 3;
          } else {
              s.style.zIndex = (i < index) ? 2 : 1;
          }
      });
  }

  svgs.forEach((svg, index) => {
      svg.addEventListener('click', () => {
          showCard(index);
          bringToFront(index);
      });
  });

  // Show the first card by default on page load
  showCard(0);
  bringToFront(0);
});


