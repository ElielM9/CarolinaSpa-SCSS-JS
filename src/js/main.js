document.addEventListener(`DOMContentLoaded`, startApp);

function startApp() {
  openCloseNav();
  swiperConfig();
}

function openCloseNav() {
  const nav = document.querySelector(`.nav__contenedor`);
  const hamburguerBtn = document.querySelector(`.nav__hamburguer-btn`);

  hamburguerBtn.addEventListener(`click`, () => {
    nav.classList.toggle(`nav__contenedor--open`);
  });
}

function swiperConfig() {
  const swiper = new Swiper({
    el: `.slider__content`,
    slideClass: `slider__slide`,
    createElements: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: true,
  });
}
