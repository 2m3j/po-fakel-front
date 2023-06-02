export const swiper = new Swiper('.swiper-gallery', {
  direction: 'horizontal',
  loop: 'true',
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
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.swiper-gallery-button-next',
    prevEl: '.swiper-gallery-button-prev',
  },
  freeMode: true,
});
