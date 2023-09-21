const menuBtn = document.querySelector('#menu-btn');
const menuBtnClose = document.querySelector('#menu-btn-close');
const menu = document.querySelector('#menu');
const mobiles = document.querySelectorAll('.mobile');

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
