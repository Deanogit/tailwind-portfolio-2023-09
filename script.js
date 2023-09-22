const menuBtn = document.querySelector('#menu-btn');
const menuBtnClose = document.querySelector('#menu-btn-close');
const menu = document.querySelector('#menu');
const mobiles = document.querySelectorAll('.mobile');
const tailBtn = document.querySelector('.tail-btn');
const tails = document.querySelectorAll('.tail-more');

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
  tails.forEach((tail) => {
    tail.classList.toggle('hidden');
    tail.classList.toggle('flex');
  });
});
