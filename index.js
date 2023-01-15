// SVG scroll drawing
let path = document.querySelector("path")
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + " " + pathLength;

path.style.strokeDashoffset =pathLength;

window.addEventListener("scroll", () => {
    
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;
})

// SVG out
$(window).scroll(function(){
    var numPix = 3000; // number of pixels before bottom of page that you want to start fading
    var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / numPix;
    var win = $(window).width();  
    if( op <= 0 && win < 697){
          $(".line-container").hide();
      } else {
          $(".line-container").show();
      }
      $(".line-container").css("opacity", op ); 
  });





// entry Animation
const observer = new IntersectionObserver((entries) => {


    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show2");

        } else{
            entry.target.classList.remove("show2");
        }
    });
});


const hiddenElements = document.querySelectorAll (".hidden, .hiddenleft, .hiddenright, .hidden2");
hiddenElements.forEach((el) => observer.observe(el));


// scroll with the mouse 
const slider = document.querySelector('.media-scroller');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.2; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
  