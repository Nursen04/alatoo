const ourBlogSlide = new Swiper(".our-blog__slide", {
  slidesPerView: 2,
  loop: true,
  navigation: {
    nextEl: ".slider-btn-next",
    prevEl: ".slider-btn-prev",
  },
});

const officeGarnitureSlide = new Swiper(".office-garniture__slide", {
  slidesPerView: 4,
  pagination: {
    el: ".office-garniture__pagination",
    clickable: true,
  }
});
