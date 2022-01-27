$(document).ready(function () {
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

  // Кнопка меню
  var menuButton = document.querySelector(".navbar-top__btn");
  menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке меню");
    document
      .querySelector(".navbar-menu")
      .classList.toggle("navbar-menu--active");
  });

  // Модальное окно
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  // Обратботка форм

  $(".form").validate({
    messages: {
      name: {
        required: "* Please specify your name",
        minlength: "* Your name is too short",
      },
      email: {
        required: "* We need your email address to contact you",
        email: "* Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "* We need your phone number to contact you",
        minlength: "* Your phone number is too short",
      },
    },
  });
});
