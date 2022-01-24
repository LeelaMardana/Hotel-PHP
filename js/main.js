const hotelSlider = new Swiper(".hotel-swiper", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
});

const rewiewsSlider = new Swiper(".reviews-swiper", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-btn--next",
    prevEl: ".reviews-btn--prev",
  },
});

var menuButton = document.querySelector(".navbar-top__btn");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
  document
    .querySelector(".navbar-menu")
    .classList.toggle("navbar-menu--active");
});
