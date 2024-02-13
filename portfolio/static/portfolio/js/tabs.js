//TABS
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsContent = document.querySelectorAll('.tabs__content');

function tabOnClick(e) {
    let currentBtn = e.target;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentContent = document.querySelector(tabId);

    tabsBtn.forEach((tab) => {
       tab.classList.remove('active');
    });

    tabsContent.forEach((content) => {
       content.classList.remove('active');
    });

    currentBtn.classList.add('active');
    currentContent.classList.add('active');
}

tabsBtn.forEach((tab) => {
    tab.addEventListener("click", tabOnClick);
});

document.querySelector('.tabs__nav-btn').click();
