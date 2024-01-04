//HEADER
const burgerMenu = document.querySelector('.menu-burger');
const headerMenu = document.querySelector('.header__menu');
const arrowBack = document.querySelector('.arrow-back');
const bodyLock = document.querySelector('body');
const headerBrand = document.querySelector('.header__brand')
const headerMenus = document.querySelectorAll('.header__link');

//BURGER MENU
const elementsList = [burgerMenu, headerMenu, arrowBack, bodyLock, headerBrand];
const menusList = [];

headerMenus.forEach((el) => {
    menusList.push(el);
});

function burgerClick() {
    elementsList.forEach((element) => {
        element.classList.add('active');
    })
}

function menusClick() {
    elementsList.forEach((element) => {
        element.classList.remove('active')
    })
}

function arrowClick() {
    elementsList.forEach((element) => {
        element.classList.remove('active')
    })
}

burgerMenu.addEventListener("click", burgerClick);
headerMenus.forEach((el) => {
    el.addEventListener("click", menusClick);
});
arrowBack.addEventListener("click", arrowClick);

//SMART HEADER
const header = document.querySelector('.header');

let lastScroll = 0;
const defaultOffset = 200;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header_hide');

window.addEventListener("scroll", () => {
    if (scrollPosition() > lastScroll && !containHide()) {
        //scroll down
        header.classList.add('header_hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
        //scroll up
        header.classList.remove('header_hide');
    }

    lastScroll = scrollPosition();
    if (lastScroll > 1) {
        header.classList.add('like_a_glass');
    } else {
        header.classList.remove('like_a_glass');
    }
});

//HIGHLIGHT MENUS WITH SCROLL
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.header__link').forEach((link) => {
                let id = link.getAttribute('href').replace('#', '');
                if (id === entry.target.id) {
                    link.classList.add('header__link_active');
                } else {
                    link.classList.remove('header__link_active');
                }
            });
        }
    });
}, {
    threshold: 0.4,
});

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section)
});