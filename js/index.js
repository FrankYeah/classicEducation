$(document).ready(function(){

	var swiper1 = new Swiper('.mySwiper', {
		loop: true,
		lazy: true,
		slidesPerView: 1,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
	});
})