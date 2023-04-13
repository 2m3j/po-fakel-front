new Swiper(".main-names .card-slider", {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
new Swiper(".aboutus__slider", {
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
new Swiper(".swiper-volonteer", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  /*   slidesPerView: auto, */
  slidesPerView: 1,
  grabCursor: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper('.audio__slider', {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})
