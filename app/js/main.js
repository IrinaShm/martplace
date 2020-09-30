$(function() {

  $('.weekly-products__inner').slick({
    prevArrow:'<button class="slick-arrow slick-prew"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:'<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
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

  if($('div').is('.mix')){
  var mixer = mixitup('.release-products__inner-box');
  };

  $('.followers-feed__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow:'<button class="slick-arrow slick-prew prew-color"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:'<button class="slick-arrow slick-next next-color"><span class="lnr lnr-chevron-right"></span></button>',
  });

  $('.clients__inner').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow:'<button class="slick-arrow-item slick-prew-white"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:'<button class="slick-arrow-item slick-next-white"><span class="lnr lnr-chevron-right"></span></button>',
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

});

