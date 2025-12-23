const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 25,
  centeredSlides: true,
  loop: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  breakpoints: {
    768: { slidesPerView: 1.8 },
    1024: { slidesPerView: 2.2 }, // نمایش اسلاید وسط کامل و کناره‌ها نصفه
  },
});
