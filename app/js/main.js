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
