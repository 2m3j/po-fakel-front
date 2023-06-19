if ( document.querySelector('.main-names .card-slider') ) {
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
}
if (document.querySelector('.aboutus__slider')) {
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
}
if (document.querySelector('.swiper-volonteer')) {
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
}
if (document.querySelector('.search-names__slider')) {
  new Swiper(".search-names__slider", {
    // loop: true,
    navigation: {
      nextEl: ".search-btn-swiper__next",
      prevEl: ".search-btn-swiper__prev",
    },
    pagination: {
      el: ".search-names__pagination",
      clickable: true,
    },
    /*   slidesPerView: auto, */
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      560: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}
if (document.querySelector('.media-main-details__slider')) {
  new Swiper(".media-main-details__slider", {
    // loop: true,
    navigation: {
      nextEl: ".search-btn-swiper__next",
      prevEl: ".search-btn-swiper__prev",
    },
    pagination: {
      el: ".media-main-details__pagination",
      clickable: true,
    },
    /*   slidesPerView: auto, */
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      560: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}