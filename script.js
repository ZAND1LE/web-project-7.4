let swiper;

function initSwiper() {
  if (window.innerWidth < 768) {
    if (!swiper) {
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 16,
        grabCursor: false,

        touchStartPreventDefault: false,
        preventClicks: false,
        preventClicksPropagation: false,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      document.querySelectorAll(".brands__icon").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          swiper.slideNext();
        });
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
}

window.addEventListener("load", initSwiper);
window.addEventListener("resize", initSwiper);
