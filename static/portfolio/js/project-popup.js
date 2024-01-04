const oneProject = document.querySelector('.one__project-img');
const projectPopup = document.querySelector('.project-popup');
const exitPopupBtn = document.querySelector('.project-popup__exit-btn img');
const makeBig = document.querySelector('.make-big');
const popupImg = document.querySelector('.project-popup__img');


function showPopup() {
    const popupHeight = document.querySelector('.project-popup__block');
    const availableScreenHeight = window.screen.availHeight;

    projectPopup.classList.add('active');
    bodyLock.classList.add('active');
    makeBig.classList.add('active');
    oneProject.classList.add('active');

    if (window.matchMedia("(min-width: 1025px)").matches) {
        popupHeight.style.height = (availableScreenHeight * 0.80) + 'px';
    } else {
        popupHeight.style.height = (availableScreenHeight * 0.92) + 'px';
    }
}

function closePopup(e) {
    const currentTarget = e.target;

    if (currentTarget !== popupImg) {
        projectPopup.classList.remove('active');
        bodyLock.classList.remove('active');
        makeBig.classList.remove('active');
        oneProject.classList.remove('active');
    }
}

function popupOrientation() {
    const popupHeight = document.querySelector('.project-popup__block');
    const availableScreenHeight = window.screen.availHeight;
    const screenOrientation = screen.orientation.type;

    if (screenOrientation === "landscape-primary") {
        popupHeight.style.height = (availableScreenHeight * 0.92) + 'px';
    } else if (screenOrientation === "portrait-secondary" || screenOrientation === "portrait-primary") {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            popupHeight.style.height = (availableScreenHeight * 0.80) + 'px';
        } else {
            popupHeight.style.height = (availableScreenHeight * 0.92) + 'px';
        }
    }
}


window.addEventListener("orientationchange", popupOrientation);
oneProject.addEventListener("click", showPopup);
projectPopup.addEventListener("click", closePopup);
