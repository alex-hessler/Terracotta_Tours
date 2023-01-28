// NAV BAR MENU FOR MOBILE

const btn = document.querySelector('.hamburger-button');
const content = document.querySelector('.hamburger-content');
const body = document.querySelector('body');

btn.addEventListener('touchstart', () => {
  if(!content.classList.contains('active')){
    content.classList.add('active');
  } else {
    content.classList.remove('active');
  }
  
});

body.addEventListener('onscroll', function(evnt) {
    if(content.style.display != 'none'){
        content.style.display = 'none';
        content.classList.remove('active');
      } 
});
