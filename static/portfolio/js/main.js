//MAIN
//Links default settings
const links = document.querySelectorAll('a');

links.forEach((link) => {
    link.addEventListener("click", function (e) {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
        }
    })
});