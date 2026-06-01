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

const open = document.getElementById('openSignOutModal');
const modalContainer = document.querySelector('.signOutModalContainer');
const close = document.getElementById('closeSignOutModal');
const signOutModal1 = document.querySelector('.signOutModal1');
const signOutModal2 = document.querySelector('.signOutModal2');
const confirmSignOut = document.getElementById('confirmSignOutModal');
const close2 = document.getElementById('closeSignOutModal2');

open.addEventListener('click', ()=> {
    modalContainer.classList.add('showSignOutModal');
})

close.addEventListener('click', ()=>{
    modalContainer.classList.remove('showSignOutModal');
    signOutModal1.style.display = 'flexk'
    signOutModal2.style.display = 'none'
})

confirmSignOut.addEventListener('click', ()=> {
    signOutModal1.style.display = 'none'
    signOutModal2.style.display = 'flex'
})

close2.addEventListener('click', ()=>{
    modalContainer.classList.remove('showSignOutModal');
    signOutModal1.style.display = 'flex'
    signOutModal2.style.display = 'none'
})