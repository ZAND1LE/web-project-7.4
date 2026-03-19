const swiper = new swiper(".brands__icon", {
  loop: true,

  slidesPerview: 1,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerview: 2,
    },
    1024: {
      slidesPerview: 3,
    },
  },
});

/*const swiper = new Swiper("#brandcard", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  },*/
