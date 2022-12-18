
/*=============== SHOW MENU ==================*/

const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')


/*=============== MENU SHOW =============*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add('show-menu')
  })
}

/*============== MENU HIDDEN =============*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove('show-menu')
  })
}

/*============== SWIPER ===================*/
var homeSwiper = new Swiper(".ome-swiper", {
  spaceBetween: 30,
  loop: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*============== SCROLL NAV ===============*/

function ScrollHeader() {
    const header = document.getElementById('header')

    if (this.scrollY >= 20) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', ScrollHeader)


