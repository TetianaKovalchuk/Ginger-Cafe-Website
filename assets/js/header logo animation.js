var mainHeader = document.getElementsByTagName("header")[0];
var headerLogo = document.getElementsByClassName("header-logo")[0];
var section1 = document.getElementsByClassName("main-section1")[0];

headerLogo.addEventListener("mouseenter", headerLogoAnimActivate);
headerLogo.addEventListener("mouseleave", headerLogoAnimDeactivate);

function headerLogoAnimActivate() {
   section1.classList.add("logo-anim");
   mainHeader.classList.add("logo-anim");
}

function headerLogoAnimDeactivate() {
   section1.classList.remove("logo-anim");
   mainHeader.classList.remove("logo-anim");
}