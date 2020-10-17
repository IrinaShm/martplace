$(function() {

  $('.weekly-products__inner').slick({
    prevArrow:'<button class="slick-arrow slick-prew"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:'<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerMode: true,
          variableWidth: false
          // infinite: true,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerMode: true,
          variableWidth: false
        }
      },
      {
        breakpoint: 630,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: false
        }
      }
    ]
  });
  
  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    readOnly: true,
    ratedFill: "#ffc000",
    normalFill: "#transparent",
    spacing: "3px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z" fill="#ffc000"/></svg>'
  });

  $('.release-products__filter-btn').on('click', function() {
    $('.filter-dropdown').slideToggle();
  });

  $('.followers-feed__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow:'<button class="slick-arrow slick-prew prew-color"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:'<button class="slick-arrow slick-next next-color"><span class="lnr lnr-chevron-right"></span></button>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          centerMode: true,
          variableWidth: false
          // infinite: true,
        }
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerMode: true,
          variableWidth: false
        }
      },
      {
        breakpoint: 630,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: false
        }
      }
    ]
  });

  $('.clients__inner').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow:'<button class="slick-arrow-item slick-prew-white"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:'<button class="slick-arrow-item slick-next-white"><span class="lnr lnr-chevron-right"></span></button>',
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerMode: true,
          variableWidth: false
          // infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
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

$('.header__top-btn').on('click', function() {
  $('.header__top-block').toggleClass('active');
  // $('.header__icons').toggleClass('active');
});

$('.menu__btn').on('click', function() {
  $('.menu__list').slideToggle();
});

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

