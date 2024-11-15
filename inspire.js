const mainNavbar = document.querySelector('.navbar');
const stickyNavbar = document.querySelector('.sticky-navbar');
const mainNavbarHeight = mainNavbar.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY >= mainNavbar.offsetTop + mainNavbarHeight) {
        stickyNavbar.classList.add('show');
    } else {
        stickyNavbar.classList.remove('show');
    }
});