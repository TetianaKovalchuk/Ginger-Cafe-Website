var searchButton = document.getElementsByClassName("header-search")[0];
var searchInput = document.getElementsByClassName("header-field")[0];
var fieldOpened = false;

function searchButtonScript() {
   if (searchInput.classList.contains("header-field-active")) {
      searchInput.classList.remove("header-field-active")
   }
   else {
      searchInput.classList.add("header-field-active")
   }
}

searchButton.addEventListener("click", searchButtonScript);