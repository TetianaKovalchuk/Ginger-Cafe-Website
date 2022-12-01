var arrowL = document.getElementsByClassName("main-section8-slider-arrows-left")[0];
var arrowR = document.getElementsByClassName("main-section8-slider-arrows-right")[0];

arrowR.style.marginLeft = picwidth - arrowL.style.width - arrowR.style.width - arrowL.style.marginleft - arrowR.style.marginright;

var picwidth = 1200;
var piclength = 0;
var canvas = document.getElementsByClassName("main-section8-slider-canvas")[0];
var img = document.getElementsByClassName("main-section8-slider-canvas-img");
var picsCount = img.length;
var maxpiclength = picwidth * (picsCount - 1);

arrowL.addEventListener("click", previous);
arrowR.addEventListener("click", next);

// arrowR.style.marginLeft = `${picwidth}px - ${arrowL.style.width - arrowR.style.width - arrowL.style.marginLeft - arrowR.style.marginRight}`;

function next() {
   if (piclength === -maxpiclength) {
      piclength = 0;
   }
   else {
      piclength = piclength - picwidth;
   }
   canvas.style.transform = `translateX(calc(${piclength} / 1920 * 100vw))`;
   canvas.style.transition = "transform 800ms ease";
   if (activeball == 1) {
      activeball = 2;
   }
   else if (activeball == 2) {
      activeball = 3;
   }
   else if (activeball == 3) {
      activeball = 1;
   }
   updateBalls();
   updateHeader();
}

function previous() {
   if (piclength === 0) {
      piclength = -maxpiclength;
   }
   else {
      piclength = piclength + picwidth;
   }
   canvas.style.transform = `translateX(calc(${piclength} / 1920 * 100vw))`;
   canvas.style.transition = "transform 800ms ease";
   if (activeball == 3) {
      activeball = 2;
   }
   else if (activeball == 2) {
      activeball = 1;
   }
   else if (activeball == 1) {
      activeball = 3;
   }
   updateBalls();
   updateHeader();
}

// Balls

var ball1 = document.getElementsByClassName("main-section8-slider-balls-item")[0];
var ball2 = document.getElementsByClassName("main-section8-slider-balls-item")[1];
var ball3 = document.getElementsByClassName("main-section8-slider-balls-item")[2];
var balls = [...document.getElementsByClassName("main-section8-slider-balls-item")];

function updateBalls() {
   if (activeball == 1) {
      passiveBalls();
      ball1.classList.add("active-ball")
   }
   else if (activeball == 2) {
      passiveBalls();
      ball2.classList.add("active-ball")
   }
   else if (activeball == 3) {
      passiveBalls();
      ball3.classList.add("active-ball")
   }
}

function passiveBalls() {
   ball1.classList.remove("active-ball");
   ball2.classList.remove("active-ball");
   ball3.classList.remove("active-ball");
}
 
ball1.classList.add("active-ball");
var activeball = 1;

// Header

var section8Header = document.querySelector(".main-section8-header");
var slider = document.querySelector(".main-section8-slider");

function updateHeader() {
   if (activeball == 1) {
      // section3Header.classList.add("main-section3-header-transition");
      section8Header.textContent = "Банановые сырники";
      // section3Header.classList.remove("main-section3-header-transition");
      
   }
   else if (activeball == 2) {
      // section3Header.classList.add("main-section3-header-transition");
      section8Header.textContent = "Манная каша";
      // section3Header.classList.remove("main-section3-header-transition");
   }
   else if (activeball == 3) {
      // section3Header.classList.add("main-section3-header-transition");
      section8Header.textContent = "Соба";
      // section3Header.classList.remove("main-section3-header-transition");
   }
}

slider.addEventListener("mouseenter", headerOpen);
slider.addEventListener("mouseleave", headerClose);

function headerOpen() {
   section8Header.classList.add("main-section8-header-hover");
}

function headerClose() {
   section8Header.classList.remove("main-section8-header-hover");
}