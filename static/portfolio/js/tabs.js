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











// const tabsButtons = document.querySelectorAll('.tabs__btns button')
// const mainTabsList = ['.tab-1', '.tab-2'];
// const mainContentsList = ['.tabs__content_1', '.tabs__content_2'];

// let classNum = 1;
//
// tabsButtons.forEach((btn) => {
//     btn.classList.add(`.tab-${classNum}`);
//     mainTabsList.push(btn.className);
//     classNum++;
// })
// console.log(mainTabsList)


// const mainTabs = new Tabs(mainTabsList, mainContentsList);
//
// mainTabs.getTabsClasses().forEach((tab) => {
//     tab.addEventListener("click", (e) => {
//         tabOnClick(e, mainTabs);
//     });
// })