const menuBtn = document.querySelector('#menu-btn');
const menuBtnClose = document.querySelector('#menu-btn-close');
const menu = document.querySelector('#menu');
const mobiles = document.querySelectorAll('.mobile');
const tailBtn = document.querySelector('.tail-btn');
const tails = document.querySelectorAll('.tail-more');
// const tailBtnLess = document.querySelector('.tail-btn-less');
const htmlBtn = document.querySelector('.html-btn');
const htmls = document.querySelectorAll('.html-more');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('flex');
  menuBtn.classList.toggle('hidden');
  menuBtnClose.classList.toggle('hidden');
  menuBtnClose.classList.toggle('flex');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});

menuBtnClose.addEventListener('click', function () {
  menuBtn.classList.toggle('flex');
  menuBtn.classList.toggle('hidden');
  menuBtnClose.classList.toggle('hidden');
  menuBtnClose.classList.toggle('flex');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});

mobiles.forEach((mobile) => {
  mobile.addEventListener('click', function () {
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
    menuBtnClose.classList.toggle('hidden');
    menuBtnClose.classList.toggle('flex');
    menuBtn.classList.toggle('flex');
    menuBtn.classList.toggle('hidden');
  });
});

tailBtn.addEventListener('click', function () {
  tailBtn.classList.toggle('hidden');
  // tailBtnLess.classList.toggle('hidden');
  // tailBtnLess.classList.toggle('flex');
  tails.forEach((tail) => {
    tail.classList.toggle('hidden');
    tail.classList.toggle('flex');
  });
});

// tailBtnLess.addEventListener('click', function () {
//   tailBtnLess.classList.toggle('hidden');
//   tailBtnLess.classList.toggle('flex');
//   tailBtn.classList.toggle('flex');
//   tailBtn.classList.toggle('hidden');
//   tails.forEach((tail) => {
//     tail.classList.toggle('hidden');
//     tail.classList.toggle('flex');
//   });
// });

// HTML more btn

htmlBtn.addEventListener('click', function () {
  htmlBtn.classList.toggle('hidden');
  htmlBtn.classList.toggle('flex');
  htmls.forEach((html) => {
    html.classList.toggle('hidden');
    html.classList.toggle('flex');
  });
});

// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;
