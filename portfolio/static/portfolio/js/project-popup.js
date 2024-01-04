const oneProject = document.querySelector('.one__project-img');
const projectPopup = document.querySelector('.project-popup');
const exitPopupBtn = document.querySelector('.project-popup__exit-btn img');
const makeBig = document.querySelector('.make-big');
const popupImg = document.querySelector('.project-popup__img');


function showPopup() {
    projectPopup.classList.add('active');
    bodyLock.classList.add('active');
    makeBig.classList.add('active');
    oneProject.classList.add('active');
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

oneProject.addEventListener("click", showPopup);
projectPopup.addEventListener("click", closePopup);
