if (document.querySelector('.swiper-gallery .swiper')) {
    new Swiper('.swiper-gallery .swiper', {
        slidesPerView: 1,
        grabCursor: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
        navigation: {
            nextEl: '.swiper-gallery__navigation-right',
            prevEl: '.swiper-gallery__navigation-left',
        }
    });
}
