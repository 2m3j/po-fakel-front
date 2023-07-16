if (document.querySelector('.swiper-develop-team')) {
    new Swiper('.swiper-develop-team', {
        direction: 'horizontal',
        autoHeight: 'true',
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
        },
        pagination: {
            el: '.swiper-develop-team-pagination',
            clickable: 'true',
          },
        freeMode: true,
    });
}