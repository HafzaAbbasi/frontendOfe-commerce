const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navmenu = document.querySelector('.navmenu');

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
};

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.navmenu a').forEach(link => {
    link.addEventListener('click', () => {
        navmenu.classList.remove('open');
    });
});