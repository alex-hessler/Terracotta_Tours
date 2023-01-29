// NAV BAR MENU FOR MOBILE

const btn = document.querySelector('.hamburger-button');
const content = document.querySelector('.hamburger-content');
const body = document.querySelector('body');

btn.addEventListener('touchstart', () => {
  if(!content.classList.contains('active')){
    content.classList.add('active');
    btn.classList.add('btn-shadow');
  } else {
    content.classList.remove('active');
    btn.classList.remove('btn-shadow');
  }
});


