//SLIDERS
//GRAPHIC SLIDER
const graphicSlider = new Swiper('.graphic-slider', {
    navigation: {
        nextEl: '.graphic-slider-btn.swiper-button-next',
        prevEl: '.graphic-slider-btn.swiper-button-prev',
    },
    pagination: {
        el: '.graphic-slider-pagination.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    autoHeight: false,
    slidesPerView: 2,
    grid: {
        rows: 2,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            grid: {
                rows: 3,
            },
        },
        500: {
            slidesPerView: 2,
            grid: {
                rows: 3,
            },
        },
        768: {
            slidesPerView: 1.2,
            grid: {
                rows: 2,
            },
        },
        1024: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },
    },
});

//WEB SLIDER
const webSlider = new Swiper('.web-slider', {
    navigation: {
        nextEl: '.web-slider-btn.swiper-button-next',
        prevEl: '.web-slider-btn.swiper-button-prev',
    },
    pagination: {
        el: '.web-slider-pagination.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    autoHeight: false,
    slidesPerView: 2,
    grid: {
        rows: 2,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            grid: {
                rows: 3,
            },
        },
        500: {
            slidesPerView: 2,
            grid: {
                rows: 3,
            },
        },
        768: {
            slidesPerView: 1.2,
            grid: {
                rows: 2,
            },
        },
        1024: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },
    },
});