  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    centeredSlides: false,
    loopedSlides: 6,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 6,
            loopedSlides: 6,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4,
            loopedSlides: 3,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 3,
            loopedSlides: 2,
            spaceBetween: 10
        },
        675: {
            slidesPerView: 2,
            loopedSlides: 1,
            spaceBetween: 20,
        },
        250: {
            slidesPerView: 2,
            loopedSlides: 1,
            spaceBetween: 30,
        }
    },
  });