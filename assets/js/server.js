const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".site-header__top-menu-list")
const menuActiveLinks = document.querySelectorAll('.site-header__top-link');

menuToggle.addEventListener('click', function(){
  menuToggle.classList.toggle('active');
  menu.classList.toggle('sitenav--open')
  menu.classList.toggle('sitenav--close')
})


function changeActiveLink(){
  menuActiveLinks.forEach(link => link.classList.remove('site-menu__active'));
  this.classList.add('site-menu__active');
}

menuActiveLinks.forEach(link => link.addEventListener('click', changeActiveLink));


