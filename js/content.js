var swiper = null
var swiper2 = null

if(screen.width > 1024) {
  swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    
    thumbs: {
      swiper: swiper,
    },
  });
} else {

  swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    
    thumbs: {
      swiper: swiper,
    },
  });

}

