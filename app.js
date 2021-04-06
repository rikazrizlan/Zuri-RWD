const burgerBtn = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle("nav-active");
})