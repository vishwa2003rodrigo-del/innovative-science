// Small enhancement: add a shadow to the header after scrolling.
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 8px 30px rgba(10, 23, 37, .08)'
    : 'none';
});
