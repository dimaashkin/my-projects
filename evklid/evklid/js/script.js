

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-nav-forms').addEventListener('click', (e) => {
    document.getElementById('nav-forms').classList.add('nav__forms--active')
  })
  document.getElementById('nav-forms-close').addEventListener('click', (e) => {
    document.getElementById('nav-forms').classList.remove('nav__forms--active')
  })
  document.getElementById('nav-forms-close').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})



//swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__list_link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll')
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active')
    menu.classList.remove('header__nav--active')
    document.body.classList.remove('stop-scroll')
  })
})

//tabs
let tabsBtn = document.querySelectorAll('.third__list_btn');
let tabsItem = document.querySelectorAll('.third__content');

tabsBtn.forEach(function (element) {

  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('list__btn--active') });
    e.currentTarget.classList.add('list__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('third__content--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('third__content--active');
  });
});

//accordion
$("#accordion").accordion({
  heightStyle: "content"
});
