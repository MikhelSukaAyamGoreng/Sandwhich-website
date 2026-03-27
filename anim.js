const nav = document.querySelector('.navigation');
const logo = document.querySelector('.header-logo');

function toggleNavigation(e) {
    if (e) e.preventDefault(); 
    
    nav.classList.toggle('open');
}

logo.addEventListener('click', toggleNavigation);

document.addEventListener('mousedown', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !logo.contains(e.target)) {
        nav.classList.remove('open');
    }
});