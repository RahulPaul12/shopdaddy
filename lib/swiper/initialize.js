var swiper = new Swiper(".shopSwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    breakpoints: {
       400:{
        slidesPerView: 2,
        spaceBetween: 16,
       },
       640: {
         slidesPerView: 3,
         spaceBetween: 24,
       },
       768: {
         slidesPerView: 4,
         spaceBetween: 24,
       },
       1024: {
         slidesPerView: 6,
         spaceBetween: 24,
       },
      },
  });
var swiper = new Swiper(".newArrivalSwiper", {
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    breakpoints: {
       500:{
        slidesPerView: 3,
        spaceBetween: 16,
       },
       640: {
         slidesPerView: 3,
         spaceBetween: 24,
       },
       768: {
         slidesPerView: 4,
         spaceBetween: 24,
       },
       1024: {
         slidesPerView: 5,
         spaceBetween: 24,
       },
      },
  });
  
var swiper = new Swiper(".brandSwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    breakpoints: {
       400:{
        slidesPerView: 2,
        spaceBetween: 16,
       },
       640: {
         slidesPerView: 3,
         spaceBetween: 24,
       },
       768: {
         slidesPerView: 4,
         spaceBetween: 24,
       },
       1024: {
         slidesPerView: 6,
         spaceBetween: 24,
       },
      },
  });
var swiper = new Swiper(".blogSwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    breakpoints: {
       400:{
        slidesPerView: 2,
        spaceBetween: 16,
       },
       640: {
         slidesPerView: 3,
         spaceBetween: 24,
       },
       768: {
         slidesPerView: 4,
         spaceBetween: 24,
       },
       1024: {
         slidesPerView: 4,
         spaceBetween: 24,
       },
      },
  });
var swiper = new Swiper(".shopProductSwiper", {
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    breakpoints: {
      400:{
        slidesPerView: 2,
        spaceBetween: 16,
       },
       521:{
        slidesPerView: 3,
        spaceBetween: 16,
       },
       640: {
         slidesPerView: 3,
         spaceBetween: 24,
       },
       768: {
         slidesPerView: 4,
         spaceBetween: 24,
       },
       1024: {
         slidesPerView: 5,
         spaceBetween: 24,
       },
      },
  });
var swiper = new Swiper(".relatedProductSwiper", {
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    breakpoints: {
       400:{
        slidesPerView: 2,
        spaceBetween: 16,
       },
       521:{
        slidesPerView: 3,
        spaceBetween: 16,
       },
       640: {
         slidesPerView: 3,
         spaceBetween: 24,
       },
       768: {
         slidesPerView: 4,
         spaceBetween: 24,
       },
       1024: {
         slidesPerView: 5,
         spaceBetween: 24,
       },
      },
  });
var swiper = new Swiper(".trendySwiper", {
    
    slidesPerView: "auto",
  freeMode: true,
  slideToClickedSlide: true,
  
  scrollbar: {
    draggable: true,
    dragSize: 100
  },
  mousewheel: true
});
  
var swiper = new Swiper(".detailsSwiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
  