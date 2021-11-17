const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navbar-links');
const navBar = document.querySelector('[data-nav]');

toggleButton.addEventListener('click', () => {
    if (navLinks.classList.contains('show-links')){
        navLinks.classList.remove('show-links');
    } else {
        navLinks.classList.add('show-links');
    }
})

window.addEventListener("resize", () => {
    if (navLinks.classList.contains('show-links') && window.innerWidth >= "800"){
        navLinks.classList.remove('show-links');
    } else {
        return;
    }
});

