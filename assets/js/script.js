'use strict';



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

let slideIndex = 0;
let slideTimer;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";

  slideTimer = setTimeout(showSlides, 5000); // 5s między zdjęciami
}

function plusSlides(n) {
  clearTimeout(slideTimer); // zatrzymanie automatu
  slideIndex += n - 1;      // poprawne przesunięcie
  showSlides();
}

showSlides();