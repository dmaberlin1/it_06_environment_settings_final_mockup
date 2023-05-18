import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';

let modalCallback = document.querySelector('.modal-callback');
let modalBookCall = document.querySelector('.modal-book-call');
let overlay = document.querySelector('.overlay');
let btnCallback=document.querySelector('.btn-callback')
let btnBookCall=document.querySelector('.btn-book-call')
let btnCloseCallBack=document.querySelector('#close-callback')
let btnCloseBookCall=document.querySelector('#close-book-call')
let btnSendCallBack=document.querySelector('.btn-callback-send')
let btnSendBookCall=document.querySelector('.btn-book-call-send')
// 4) По клику на кнопку с трубкой открывается модалка "заказать звонок"
// 5) По клику на кнопку с сообщением открывается модалка "обратная связь"
function openModalCallback() {
    modalCallback.style.display = 'flex';
    // modalCallback.style.display = 'block';
    overlay.style.display = 'block';
}
function openBookCall() {
    modalBookCall.style.display = 'block';
    modalBookCall.style.display = 'block';
    overlay.style.display = 'block';
}

function closeModal() {
    modalBookCall.style.display = 'none';
    modalCallback.style.display = 'none';
    overlay.style.display = 'none';
}

btnCallback.addEventListener('click',openModalCallback)
btnCloseCallBack.addEventListener('click',closeModal)
btnBookCall.addEventListener('click',openBookCall)
btnCloseBookCall.addEventListener('click',closeModal)

//заглушка, в следующем можно заменить на отправку
btnSendCallBack.addEventListener('click',closeModal)
btnSendBookCall.addEventListener('click',closeModal)
