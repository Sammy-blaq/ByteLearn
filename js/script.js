// ADDING THE CURRENT YEAR
const yearEl = document.querySelector(".year");
const current_year = new Date().getFullYear();
yearEl.textContent = current_year;

///////////////////////////////////////////////////////////

// HOW TO MAKE THE NAVIGATION WORK
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
