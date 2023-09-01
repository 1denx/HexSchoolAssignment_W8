import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

const carouselSwiper = new Swiper('.carousel-swiper', {
    autoplay: {
        delay: 3000,
    },

    direction: 'horizontal',
    loop: false,

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

//環形文字
const text = document.querySelector(".more-txt");
let length = text.innerText.length;
let degree = 360 / length;
text.innerHTML = text.innerText
    .split("")
    .map(
        (char, i) => `<span style="transform:rotate(${i * degree}deg)">${char}</span>`
    )
    .join("");

//使用分享
const commentSwiper = new Swiper('.comment-swiper', {
    // slide 間距
    spaceBetween: 24,
    slidesPerView: 3,
    // Scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true
    },
    // 使 swiper 可以使用滑鼠滾輪捲動
    mousewheel: true,
});