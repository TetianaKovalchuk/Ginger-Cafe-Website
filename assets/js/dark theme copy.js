var currentTime = new Date();
var body = document.body;
var allH1 = [...document.querySelectorAll("h1")];
var allH2 = [...document.querySelectorAll("h2")];
var allH3 = [...document.querySelectorAll("h3")];
var allH4 = [...document.querySelectorAll("h4")];
var allH5 = [...document.querySelectorAll("h5")];
var allH6 = [...document.querySelectorAll("h6")];
var allP = [...document.querySelectorAll("p")];

var mainHeader = document.getElementsByTagName("header")[0];
var headerLogo = document.getElementsByClassName("header-logo")[0];
var links = [...document.getElementsByClassName("header-nav-pages-item-link")];

var section1 = document.getElementsByClassName("main-section1")[0];
var section1Header = document.getElementsByClassName("main-section1-header")[0];
var section1Image = document.getElementsByClassName("main-section1-img-wrapper-item")[0];
var section1ImageHeader = document.getElementsByClassName("main-section1-img-wrapper-text")[0];
var section1Descriptions = [...document.getElementsByClassName("main-section1-description-item")];

var section2 = document.getElementsByClassName("main-section2")[0];
var section2Header = document.getElementsByClassName("main-section2-header")[0];
var section2Buttons = [...document.getElementsByClassName("main-section2-buttons-item-button")];

var section3 = document.getElementsByClassName("section3")[0];
var section3Container = document.getElementsByClassName("section3-container")[0];
var section3Texts = [...section3Container.children];
var section3Names = [...document.getElementsByClassName("section3-dishes-item")];
var section3Extra = [...document.getElementsByClassName("section3-extra")]
var section3Descriptions = [...document.getElementsByClassName("section3-dishdes")];

var section4 = document.getElementsByClassName("section4")[0];
var section4Header = document.getElementsByClassName("section4-header")[0];
var section4Info = [...document.getElementsByClassName("section4-infos-item")];
var section4Tel = document.getElementsByClassName("section4-tel")[0];
var section4Wedo = document.getElementsByClassName("section4-wedo")[0];
var section4BreadHeader = document.getElementsByClassName("section4-breadheader")[0];

var section8 = document.getElementsByClassName("main-section8")[0];
var section8Header = document.querySelector(".main-section8-header");
var section8SliderImgs = [...document.getElementsByClassName("main-section8-slider-canvas-img")];
var section8Slider = document.getElementsByClassName("main-section8-slider")[0];

var footerTitle = document.getElementsByClassName("footer-title-header")[0];
var footerIcon = document.getElementsByClassName("footer-title-icon")[0];
var footerLinks = [...document.getElementsByClassName("footer-links-item-link")];
var comma = document.getElementsByClassName("comma")[0];


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
      // header
      mainHeader.classList.add("dark");
      headerLogo.src = "assets/img/header/logo-dark.png";
      links.forEach(addDark);
      // links[links.length - (links.length - 1)].classList.add("dark");
      // links[links.length - (links.length - 2)].classList.add("dark");
      // links[links.length - (links.length - 3)].classList.add("dark");
      // links[links.length - (links.length - 4)].classList.add("dark");
      // links[links.length - (links.length - 5)].classList.add("dark");
      searchButton.src = "assets/img/header/search-dark.svg";
      searchInput.classList.add("dark");
      // panel
      root.setProperty("--panelBackgroundColor", "var(--brownOrangeDarkColor)");
      root.setProperty("--panelBorderColor", "var(--orangeBrownColor)");
      root.setProperty("--panelIconsBackgroundColor", "#533b1f");
      root.setProperty("--panelIconsBackgroundHoverColor", "var(--brownDarkColor)");
      root.setProperty("--panelIconsBorderColor", "var(--orangeBrownColor)");
      // section 1
      section1.classList.add("dark");
      section1Header.classList.add("dark");
      section1Image.src = "assets/img/section1/img dark.png";
      section1ImageHeader.classList.add("dark");
      section1Descriptions.forEach(addDark);
      // section1Descriptions[0].classList.add("dark");
      // section1Descriptions[section1Descriptions.length - (section1Descriptions.length - 1)].classList.add("dark");
      // section1Descriptions[section1Descriptions.length - (section1Descriptions.length - 2)].classList.add("dark");
      // section 2
      section2.classList.add("dark");
      section2Header.classList.add("dark");
      section2Buttons.forEach(addDark);
      // section 3
      section3.classList.add("dark");
      section3Texts.forEach(addDark);
      section3Names.forEach(addDark);
      section3Extra.forEach(addDark);
      section3Descriptions.forEach(addDark);
      // section 4
      section4.classList.add("dark");
      section4Header.classList.add("dark");
      section4Info.forEach(addDark);
      section4Tel.classList.add("dark");
      section4Wedo.classList.add("dark");

      section4BreadHeader.classList.add("dark");
      // section 8
      section8.classList.add("dark");
      section8Header.classList.add("dark");
      section8Slider.classList.add("dark");
      for (var h = 0; h < 3; h++) {
         section8SliderImgs[h].src = "assets/img/section8/slider" + h + " dark.jpg";
      }
      arrowL.src = "assets/img/section8/arrow dark.svg";
      arrowR.src = "assets/img/section8/arrow dark.svg";
      balls.forEach(addDark);
      // footer
      root.setProperty("--footerBackgroundColor", "#301d0bc5");
      footerTitle.classList.add("dark");
      footerIcon.src = "assets/img/footer/icon dark.svg";
      footerLinks.forEach(addDark);
      comma.classList.add("dark");
   }
   else {
      body.classList.remove("dark");
      // header
      mainHeader.classList.remove("dark");
      headerLogo.src = "assets/img/header/logo-light.png";
      links.forEach(removeDark);
      // links[links.length - (links.length - 1)].classList.remove("dark");
      // links[links.length - (links.length - 2)].classList.remove("dark");
      // links[links.length - (links.length - 3)].classList.remove("dark");
      // links[links.length - (links.length - 4)].classList.remove("dark");
      // links[links.length - (links.length - 5)].classList.remove("dark");
      searchButton.src = "assets/img/header/search-light.svg";
      searchInput.classList.remove("dark");
      // panel
      root.setProperty("--panelBackgroundColor", "white");
      root.setProperty("--panelBorderColor", "#00000000");
      root.setProperty("--panelIconsBackgroundColor", "#00000000");
      root.setProperty("--panelIconsBackgroundHoverColor", "var(--lightBrownColor)");
      root.setProperty("--panelIconsBorderColor", "var(--lightBrownColor)");
      // section 1
      section1.classList.remove("dark");
      section1Header.classList.remove("dark");
      section1Image.src = "assets/img/section1/img.png";
      section1ImageHeader.classList.remove("dark");
      section1Descriptions.forEach(removeDark);
      // section1Descriptions[0].classList.remove("dark");
      // section1Descriptions[section1Descriptions.length - (section1Descriptions.length - 1)].classList.remove("dark");
      // section1Descriptions[section1Descriptions.length - (section1Descriptions.length - 2)].classList.remove("dark");
      // section 2
      section2.classList.remove("dark");
      section2Header.classList.remove("dark");
      section2Buttons.forEach(removeDark);
      // section 3
      section3.classList.remove("dark");
      section3Texts.forEach(removeDark);
      section3Names.forEach(removeDark);
      section3Extra.forEach(removeDark);
      section3Descriptions.forEach(removeDark);
      // section 4
      section4.classList.remove("dark");
      section4Header.classList.remove("dark");
      section4Info.forEach(removeDark);
      section4Tel.classList.remove("dark");
      section4Wedo.classList.remove("dark");
      // section 8
      section8.classList.remove("dark");
      section8Header.classList.remove("dark");
      section8Slider.classList.remove("dark");
      for (var h = 0; h < 3; h++) {
         section8SliderImgs[h].src = "assets/img/section8/slider" + h + ".jpg";
      }
      arrowL.src = "assets/img/section8/arrow.svg";
      arrowR.src = "assets/img/section8/arrow.svg";
      balls.forEach(removeDark);
      // footer
      root.setProperty("--footerBackgroundColor", "#00000093");
      footerTitle.classList.remove("dark");
      footerIcon.src = "assets/img/footer/icon.svg";
      footerLinks.forEach(removeDark);
      comma.classList.remove("dark");
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
   toggleButton.addEventListener("click", changeMode);
   function changeMode() {
      if (localStorage.getItem("themeMode") !== "auto") {
         if (localStorage.getItem("theme") === "light") {
            localStorage.setItem("theme", "dark");
         }
         else {
            localStorage.setItem("theme", "light");
         }
         updateTheme();
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