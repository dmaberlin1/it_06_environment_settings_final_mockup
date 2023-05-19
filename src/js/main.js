import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';
// import './swipers.js'

let modalCallback = document.querySelector('.modal-callback');
let modalBookCall = document.querySelector('.modal-book-call');
let overlay = document.querySelector('.overlay');
let btnCallback=document.querySelector('.btn-callback')
let btnBookCall=document.querySelector('.btn-book-call')
let btnCloseCallBack=document.querySelector('#close-callback')
let btnCloseBookCall=document.querySelector('#close-book-call')
let btnSendCallBack=document.querySelector('.btn-callback-send')
let btnSendBookCall=document.querySelector('.btn-book-call-send')
let wrapperBody=document.querySelector('.wrapper-body')
// 4) По клику на кнопку с трубкой открывается модалка "заказать звонок"
// 5) По клику на кнопку с сообщением открывается модалка "обратная связь"
function openModalCallback() {
    if(window.innerWidth<720 ||window.matchMedia('(hover: none) and (pointer: coarse)').matches )
    {
        modalCallback.style.display = 'flex';
        wrapperBody.style.display='none'
        overlay.style.display = 'block';
    }else{
    modalCallback.style.display = 'flex';
    overlay.style.display = 'flex';
    }
}
function openBookCall() {
    if(window.innerWidth<740||window.matchMedia('(hover: none) and (pointer: coarse)').matches ){
        wrapperBody.style.display='none'
        modalBookCall.style.display = 'block';
        modalBookCall.style.display = 'block';
        overlay.style.display = 'block';

    }else{
    modalBookCall.style.display = 'block';
    modalBookCall.style.display = 'block';
    overlay.style.display = 'block';
    }
}

function closeModal() {
    wrapperBody.style.display='flex'
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



console.log(window.innerWidth)
if(window.innerWidth>720 && window.innerWidth<890){
    console.log('a')
}

if (window.innerWidth<720){

    // slider-container
    //  class="swiper-wrapper">
    //  class="swiper-slide"

    // showAllBtn.remove()
    // wrapper.remove()
    console.log('work')

    // код, который будет загружаться на мобильных устройствах
    const swiperBrands=new Swiper(
        '.brandsSwiper',{
            width: 240,
            height:40,
            slidesPerView: 1,
            // centeredSlides: true,
            // watchOverflow:true,
            centeredSlidesBounds: true,
            spaceBetween:20,
            // navigation:{
            //     nextEl:'.swiper-button-next',
            //     prevEl:'.swiper-button-prev'
            // },
            pagination:{
                el:'.brands',
                mousewhell:true,
                keyboard:true,
                clickable: true
            },
            // centeredSlidesOffset: 140,
            loop:true,

        })


    const swiperHeaderNav=new Swiper(
        '.sliderHeaderNav',{
            width: 200,
            slidesPerView: 1,
            centeredSlides: true,
            // watchOverflow:true,
            centeredSlidesBounds: true,
            spaceBetween:20,
            // navigation:{
            //     nextEl:'.swiper-button-next',
            //     prevEl:'.swiper-button-prev'
            // },
            pagination:{
                el:'.swiper-pagination',
                mousewhell:true,
                keyboard:true,
                clickable: true
            },
            centeredSlidesOffset: 140,
            loop:true,

        })

    const swiperTech=new Swiper(
        '.swiperTech',{
            width: 240,
            height:160,
            slidesPerView: 1,
            // centeredSlides: true,
            // watchOverflow:true,
            centeredSlidesBounds: true,
            spaceBetween:15,
            // navigation:{
            //     nextEl:'.swiper-button-next',
            //     prevEl:'.swiper-button-prev'
            // },
            pagination:{
                el:'.technical',
                mousewhell:true,
                keyboard:true,
                clickable: true
            },
            // centeredSlidesOffset: 140,
            loop:true,

        })

}