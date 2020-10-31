// import './js/main-swiper';
const mySwiperWeekly = new Swiper('.weekly-products__swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 900,
  navigation: {
    nextEl: '.button-arrow.button-arrow--next',
    prevEl: '.button-arrow.button-arrow--prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
      // autoHeight: true,
      // setWrapperSize: true
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      // autoHeight: true,
      // slidesPerColumnFill: 'column',
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1180: {
      slidesPerView: 1,
      spaceBetween: 30
    },
  }
});

const mySwiperFollowers = new Swiper('.followers__swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 600,
  navigation: {
    nextEl: '.button-arrow.button-arrow--next',
    prevEl: '.button-arrow.button-arrow--prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // 1180: {
    //   slidesPerView: 1,
    //   spaceBetween: 30
    // },
  }
});

$(function() {

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    readOnly: true,
    ratedFill: "#ffc000",
    normalFill: "#transparent",
    spacing: "3px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z" fill="#ffc000"/></svg>'
  });

  $('.filter-btn').on('click', function() {
    $('.filter-dropdown').slideToggle();
  });

  $('.clients__inner').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true,
    prevArrow:'<button class="arrow-item arrow-prew-white"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:'<button class="arrow-item arrow-next-white"><span class="lnr lnr-chevron-right"></span></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false
        }
      }
    ]
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 400,
    from: 30,
    to: 300,
    prefix: "$"
});

$('.lnr-list').on('click', function() {
  $('.product-page__item').addClass('list');
  $('.lnr-list').addClass('active');
  $('.icon-border-outer').removeClass('active');
});

$('.icon-border-outer').on('click', function() {
  $('.product-page__item').removeClass('list');
  $('.icon-border-outer').addClass('active');
  $('.lnr-list').removeClass('active');
});

// $('.header__top-btn').on('click', function() {
//   $('.header__top-block').toggleClass('active');
// });

$('.header__top-btn').on('click', function() {
  $('.header__top-box').slideToggle();
});

$('.menu__btn').on('click', function() {
  $('.menu__list').slideToggle();
});





// $(".menu__link").on('click', function() {
//   $('.menu__dropdown-home').slideToggle();
// });

// $(".menu__link").on('click', function() {
//   $(this).addClass(".show");
// });

// $(function(){
    
  var $burger = $('.menu__link');
  
  var $menu = $('.menu__dropdown-home');
  
  $burger.click(function(){

      if($menu.hasClass('active')){
      
          $menu.slideDown('normal').removeClass('active');
      }
      else{
          
          $menu.slideUp('normal').addClass('active');
      }
  });

// });






$('.aside__title-categories').on('click', function() {
  $('.aside__list-categories').slideToggle();
});

$('.aside__title-filter-product').on('click', function() {
  $('.aside__form-radio').slideToggle();
});

$('.aside__title-range').on('click', function() {
  $('.price-range__form').slideToggle();
});

if($('div').is('.mix')){
  var mixer = mixitup('.release-products__inner-box');
  };

});

