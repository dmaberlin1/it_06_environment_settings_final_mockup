import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';
// import './swipers.js'
import './burger.js'

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
let sidebar=document.querySelector('.side-bar')
let headerContentParas=document.querySelector('.header-content-info-paras')
let repairsBrandsCards=document.querySelector('.repairs-wrapper-brands-cards')
let repairsTechCards=document.querySelector('.repairs-wrapper-technical-cards')
let btnBookCallHeader=document.querySelector('#book-call-header')
let btnCallbackHeader=document.querySelector('#callback-header')
let btnReadMoreHeader=document.querySelector('#read-more-header')
let btnShowAllBrands=document.querySelector('#show-all-brands')
let btnShowAllTech=document.querySelector('#show-all-tech')

// 4) По клику на кнопку с трубкой открывается модалка "заказать звонок"
// 5) По клику на кнопку с сообщением открывается модалка "обратная связь"
function openModalCallback() {
    if(window.innerWidth<720 ||window.matchMedia('(hover: none) and (pointer: coarse)').matches )
    {
        modalCallback.style.display = 'flex';
        wrapperBody.style.display='none'
        overlay.style.display = 'block';
        sidebar.style.zIndex='1';
    }else{
    modalCallback.style.display = 'flex';
    overlay.style.display = 'flex';
        sidebar.style.zIndex='1';
    }
}
function openBookCall() {
    if(window.innerWidth<740||window.matchMedia('(hover: none) and (pointer: coarse)').matches ){
        wrapperBody.style.display='none'
        modalBookCall.style.display = 'block';
        modalBookCall.style.display = 'block';
        overlay.style.display = 'block';
        sidebar.style.zIndex='1';

    }else{
    modalBookCall.style.display = 'block';
    modalBookCall.style.display = 'block';
    overlay.style.display = 'block';
        sidebar.style.zIndex='1';
    }
}

function closeModal() {
    wrapperBody.style.display='flex'
    modalBookCall.style.display = 'none';
    modalCallback.style.display = 'none';
    overlay.style.display = 'none';
}
let isShowReadMore = false;
function readMoreHeader() {
    if(isShowReadMore){
        headerContentParas.style.maxHeight = '160px';
        btnReadMoreHeader.style.maxWidth='132px'
        btnReadMoreHeader.querySelector('div:first-child').innerHTML = `
           <img src="../assets/img/arrow-down.svg" alt="down">
           <img src="../assets/img/arrow-down.svg" alt="down">
        `;
        btnReadMoreHeader.querySelector('span').textContent = 'Читать далее';
        isShowReadMore=false
        return isShowReadMore

    }else{
        headerContentParas.style.maxHeight = '300px';
        btnReadMoreHeader.style.maxWidth='86px'
        btnReadMoreHeader.querySelector('div:first-child').innerHTML = `
           <img src="../assets/img/arrow-up.svg" alt="down">
           <img src="../assets/img/arrow-up.svg" alt="down">
        `;
    btnReadMoreHeader.querySelector('span').textContent = 'Скрыть';
        isShowReadMore=true
        return isShowReadMore

    }
}

let isShowAllBrands=false
function showAllBrands() {
    if(isShowAllBrands){
        repairsBrandsCards.style.maxHeight = '160px';
        btnShowAllBrands.style.maxWidth='132px'
       btnShowAllBrands.querySelector('div:first-child').innerHTML = `
           <img src="../assets/img/arrow-down.svg" alt="down">
           <img src="../assets/img/arrow-down.svg" alt="down">
        `;
        btnShowAllBrands.querySelector('span').textContent = 'Показать все';
        isShowAllBrands=false
        return isShowAllBrands

    }else{
        repairsBrandsCards.style.maxHeight = '338px';
        btnShowAllBrands.style.maxWidth='86px'
        btnShowAllBrands.querySelector('div:first-child').innerHTML = `
           <img src="../assets/img/arrow-up.svg" alt="down">
           <img src="../assets/img/arrow-up.svg" alt="down">
        `;
        btnShowAllBrands.querySelector('span').textContent = 'Скрыть';
        isShowAllBrands=true
        return isShowAllBrands

    }
}

let isShowAllTech=false
function showAllTech() {
    if(isShowAllTech){
        repairsTechCards.style.maxHeight = '160px';
        btnShowAllTech.style.maxWidth='132px'
        btnShowAllTech.querySelector('div:first-child').innerHTML = `
           <img src="../assets/img/arrow-down.svg" alt="down">
           <img src="../assets/img/arrow-down.svg" alt="down">
        `;
        btnShowAllTech.querySelector('span').textContent = 'Показать все';
        isShowAllTech=false
        return isShowAllTech

    }else{
        repairsTechCards.style.maxHeight = '350px';
        btnShowAllTech.style.maxWidth='86px'
        btnShowAllTech.querySelector('div:first-child').innerHTML = `
           <img src="../assets/img/arrow-up.svg" alt="down">
           <img src="../assets/img/arrow-up.svg" alt="down">
        `;
        btnShowAllTech.querySelector('span').textContent = 'Скрыть';
        isShowAllTech=true
        return isShowAllTech

    }
}



btnCallback.addEventListener('click',openModalCallback)
btnCloseCallBack.addEventListener('click',closeModal)
btnBookCall.addEventListener('click',openBookCall)
btnCloseBookCall.addEventListener('click',closeModal)
btnBookCallHeader.addEventListener('click',openBookCall)
btnCallbackHeader.addEventListener('click',openModalCallback)
btnReadMoreHeader.addEventListener('click',readMoreHeader)
btnShowAllBrands.addEventListener('click',showAllBrands)
btnShowAllTech.addEventListener('click',showAllTech)

//заглушка, в следующем можно заменить на отправку
btnSendCallBack.addEventListener('click',closeModal)
btnSendBookCall.addEventListener('click',closeModal)





if(window.innerWidth>720 && window.innerWidth<890){
    console.log('>720 && <890')

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


}

if (window.innerWidth<720){

    // slider-container
    //  class="swiper-wrapper">
    //  class="swiper-slide"

    // showAllBtn.remove()
    // wrapper.remove()
    console.log('window.innerWidth<720')

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

    const swiperServices=new Swiper(
        '.swiperServices',{
            width: 260,
            height:200,
            slidesPerView: 1,
            // centeredSlides: true,
            // watchOverflow:true,
            centeredSlidesBounds: true,
            spaceBetween:16,
            // navigation:{
            //     nextEl:'.swiper-button-next',
            //     prevEl:'.swiper-button-prev'
            // },
            pagination:{
                el:'.services',
                mousewhell:true,
                keyboard:true,
                clickable: true
            },
            // centeredSlidesOffset: 140,
            loop:true,

        })

}


