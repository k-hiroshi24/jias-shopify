

$(function() {

const swiper = new Swiper(".swiper", {
    loop: true,
    //autoplay: {
    //    delay: 3000,
     //   disableOnInteraction: false
   // },

  //loopedSlides: 2,
    slidesPerView: "auto",
   allowTouchMove: false,
    speed: 7000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    
    slidesPerView: 1.5/* この行を追加 */,
    pagination: {
        el: ".swiper-pagination"
    },
    
    // ナビボタンが必要なら追加
   // navigation: {
  //  nextEl: ".swiper-button-next",
   // prevEl: ".swiper-button-prev"
  //  },
    
    breakpoints: {
    // スライドの表示枚数：600px以上の場合
    600: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 5,
    },
    },

    });

});


$(document).ready(function ($){
    // フェードイン
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var scroll = $(window).scrollTop(); // 現在のスクロール位置
            var offset = $(this).offset().top; // 対象の上からの位置
            var windowHeight = $(window).height(); // ウィンドウの高さ
          
            if (scroll > offset - windowHeight + 400) {
                $(this).addClass("scrollIn");
            }
        });
    });
});