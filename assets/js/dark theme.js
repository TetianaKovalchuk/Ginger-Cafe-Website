var currentTime = new Date();
var body = document.body;
var allH1 = [...document.querySelectorAll("h1")];
var allH2 = [...document.querySelectorAll("h2")];
var allH3 = [...document.querySelectorAll("h3")];
var allH4 = [...document.querySelectorAll("h4")];
var allH5 = [...document.querySelectorAll("h5")];
var allH6 = [...document.querySelectorAll("h6")];
var allP = [...document.querySelectorAll("p")];
var allSection = [...document.querySelectorAll("section")];
var allImg = [...document.querySelectorAll("img")];
var allLi = [...document.querySelectorAll("li")];
var allButton = [...document.querySelectorAll("button")];
var allA = [...document.querySelectorAll("a")];
var allDiv = [...document.querySelectorAll("div")];

var headerLogo = document.getElementsByClassName("header-logo")[0];
var section8SliderImgs = [...document.getElementsByClassName("main-section8-slider-canvas-img")];
// var footer = document.getElementsByTagName("footer")[0];
var footerIcon = document.getElementsByClassName("footer-title-icon")[0];

var root = document.documentElement.style;


updateTheme();

function addDark(object) {
   object.classList.add("dark");
}

function removeDark(object) {
   object.classList.remove("dark");
}


function updateTheme() {
   if (localStorage.getItem("theme") == "dark") {
      body.classList.add("dark");
      allH1.forEach(addDark);
      allH2.forEach(addDark);
      allH3.forEach(addDark);
      allH4.forEach(addDark);
      allH5.forEach(addDark);
      allH6.forEach(addDark);
      allP.forEach(addDark);
      allSection.forEach(addDark);
      allImg.forEach(addDark);
      allLi.forEach(addDark);
      allButton.forEach(addDark);
      allA.forEach(addDark);
      allDiv.forEach(addDark);

      // header
      mainHeader.classList.add("dark");
      headerLogo.src = "assets/img/header/logo-dark.png";
      searchButton.src = "assets/img/header/search-dark.svg";
      // panel
      root.setProperty("--panelBackgroundColor", "var(--brownOrangeDarkColor)");
      root.setProperty("--panelBorderColor", "var(--orangeBrownColor)");
      root.setProperty("--panelIconsBackgroundColor", "#533b1f");
      root.setProperty("--panelIconsBackgroundHoverColor", "var(--brownDarkColor)");
      root.setProperty("--panelIconsBorderColor", "var(--orangeBrownColor)");
      for (var h = 0; h < 3; h++) {
         section8SliderImgs[h].src = "assets/img/section8/slider" + h + " dark.jpg";
      }
      arrowL.src = "assets/img/section8/arrow dark.svg";
      arrowR.src = "assets/img/section8/arrow dark.svg";
      // footer
      root.setProperty("--footerBackgroundColor", "#231508c5");
      footerIcon.src = "assets/img/footer/icon dark.svg";
      // #00000093
   }
   else {
      body.classList.remove("dark");
      allH1.forEach(removeDark);
      allH2.forEach(removeDark);
      allH3.forEach(removeDark);
      allH4.forEach(removeDark);
      allH5.forEach(removeDark);
      allH6.forEach(removeDark);
      allP.forEach(removeDark);
      allSection.forEach(removeDark);
      allImg.forEach(removeDark);
      allLi.forEach(removeDark);
      allButton.forEach(removeDark);
      allA.forEach(removeDark);
      allDiv.forEach(removeDark);

      // header
      mainHeader.classList.remove("dark");
      headerLogo.src = "assets/img/header/logo-light.png";
      searchButton.src = "assets/img/header/search-light.svg";
      // panel
      root.setProperty("--panelBackgroundColor", "white");
      root.setProperty("--panelBorderColor", "#00000000");
      root.setProperty("--panelIconsBackgroundColor", "#00000000");
      root.setProperty("--panelIconsBackgroundHoverColor", "var(--lightBrownColor)");
      root.setProperty("--panelIconsBorderColor", "var(--lightBrownColor)");
      for (var h = 0; h < 3; h++) {
         section8SliderImgs[h].src = "assets/img/section8/slider" + h + ".jpg";
      }
      arrowL.src = "assets/img/section8/arrow.svg";
      arrowR.src = "assets/img/section8/arrow.svg";
      // footer
      root.setProperty("--footerBackgroundColor", "#00000093");
      footerIcon.src = "assets/img/footer/icon.svg";
   }
}

var toggleButton = document.getElementsByClassName("panel-theme-toggle")[0];
var autoButton = document.getElementsByClassName("panel-theme-auto")[0];

// check if its first time entering the website
if (localStorage.getItem("themeMode") == null || localStorage.getItem("themeMode") == undefined) {
   // the default setup is auto
   // localStorage.setItem("themeMode", "auto");
   // change toggle button's color (changing source)
   toggleButton.src = "assets/img/panel/toggle deactivated.svg";
   // create variable "toggleButtonDeactivated" in local storage
   localStorage.setItem("toggleButtonDeactivated", "true");
   localStorage.setItem("themeMode", "auto");
   updateTheme();
}

// if its auto mode
if (localStorage.getItem("themeMode") == "auto") {
   if (localStorage.getItem("theme") == "light") {
      toggleButton.src = "assets/img/panel/toggle deactivated.svg";
   }
   else {
      toggleButton.src = "assets/img/panel/toggle deactivated dark.svg";
   }
   autoButton.src = "assets/img/panel/auto.svg";
   // change variable "toggleButtonDeactivated" in local storage
   localStorage.setItem("toggleButtonDeactivated", "true");

   if (currentTime.getHours() <= 18 && currentTime.getHours() >= 6) {
      localStorage.setItem("theme", "light");
   }
   else {
      localStorage.setItem("theme", "dark");
   }
   updateTheme();
}
// if its custom mode
else {
   // make auto button deactivated (checking if it's dark or light theme for it to fit it)
   if (localStorage.getItem("theme") == "dark") {
      autoButton.src = "assets/img/panel/auto deactivated dark.svg";
   }
   else {
      autoButton.src = "assets/img/panel/auto deactivated.svg";
   }
   // make the toggle button activated
   toggleButton.src = "assets/img/panel/toggle.svg";
   // change variable "toggleButtonDeactivated" in local storage
   localStorage.setItem("toggleButtonDeactivated", "true");
   toggleButton.addEventListener("click", changeTheme);
   function changeTheme() {
      if (localStorage.toggleButtonDeactivated === false) {
         if (localStorage.getItem("themeMode") === "custom") {
            if (localStorage.getItem("theme") === "light") {
               localStorage.setItem("theme", "dark");
            }
            else {
               localStorage.setItem("theme", "light");
            }
            updateTheme();
         }
      }
      // location.reload();
   }
}

// add event listener on auto button
autoButton.addEventListener("click", autoButtonScript);

// script for the auto button
function autoButtonScript() {
   if (localStorage.getItem("themeMode") === "auto") {
      localStorage.setItem("themeMode", "custom");
      localStorage.setItem("toggleButtonDeactivated", false)
      toggleButton.src = "assets/img/panel/toggle.svg";
      if (localStorage.getItem("theme") == "dark") {
         autoButton.src = "assets/img/panel/auto deactivated dark.svg";
      }
      else {
         autoButton.src = "assets/img/panel/auto deactivated.svg";
      }
      toggleButton.addEventListener("click", changeMode);
      function changeMode() {
         if (localStorage.getItem("theme") === "light") {
            localStorage.setItem("theme", "dark");
         }
         else {
            localStorage.setItem("theme", "light");
         }
         updateTheme();
         // location.reload();
      }
   } else if (localStorage.getItem("themeMode", "custom")) {
      localStorage.setItem("themeMode", "auto");
      if (localStorage.getItem("theme") == "light") {
         toggleButton.src = "assets/img/panel/toggle.svg";
      }
      else {
         toggleButton.src = "assets/img/panel/toggle deactivated dark.svg";
      }
      autoButton.src = "assets/img/panel/auto.svg";
      autoButton.addEventListener("click", autoButtonScript);
      // change variable "toggleButtonDeactivated" in local storage
      localStorage.setItem("toggleButtonDeactivated", true);
      if (currentTime.getHours() <= 18 && currentTime.getHours() >= 6) {
         localStorage.setItem("theme", "light");
      }
      else {
         localStorage.setItem("theme", "dark");
      }
      updateTheme();
      }
   // location.reload();
}



























// 067 и 240