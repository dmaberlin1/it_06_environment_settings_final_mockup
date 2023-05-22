btnOpenBurger=document.querySelector('#burger-menu-open')
btnCloseBurger=document.querySelector('.burger-close')

let modalBookCall = document.querySelector('.modal-book-call');
let overlay = document.querySelector('.overlay');
let mainWrapper=document.querySelector('.main-wrapper')
let sideBar=document.querySelector('.side-bar')
function openBurger() {
    if(window.innerWidth>500 && window.innerWidth<=1050){
        sideBar.style.display = 'flex';
        // mainWrapper.style.display='none';
        overlay.style.display = 'flex';
    }
        sideBar.style.display = 'flex';
        mainWrapper.style.display='none';
        // overlay.style.display = 'flex';

}

function closeBurger() {
    sideBar.style.display = 'none';
    overlay.style.display = 'none';
    mainWrapper.style.display='flex';

}

btnOpenBurger.addEventListener('click',openBurger)
btnCloseBurger.addEventListener('click',closeBurger)
