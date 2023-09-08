const swiper = new Swiper(".swiper", {
  effect: "fade",
  crossFade: true,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper1 = new Swiper(".swiper1", {
  effect: "fade",
  crossFade: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
const aside_banner = new Swiper(".aside_banner", {
  effect: "fade",
  crossFade: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
