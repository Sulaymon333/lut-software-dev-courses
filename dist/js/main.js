const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');
const menuBranding = document.querySelector('.branding');

// set initial state of menu to be false
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        navMenu.classList.add('show');
        navList.classList.add('show');
        menuBranding.classList.remove('show');
        navItems.forEach((item) => item.classList.add('show'));

        // set menu state to true
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        navMenu.classList.remove('show');
        menuBranding.classList.remove('show');
        navList.classList.remove('show');
        navItems.forEach((item) => item.classList.remove('show'));

        // set menu state to false
        showMenu = false;
    }
}
