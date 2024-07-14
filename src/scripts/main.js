
// windows toTop
const toTop = document.querySelector("#to-top");


window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";

  }
})


toTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});


new Swiper(".productsSwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});




new Swiper(".menuSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,

});


  