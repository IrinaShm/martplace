$(function() {

  $('.weekly-products__inner').slick({
    prevArrow:'<button class="slick-arrow slick-prew"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:'<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
  });
  
  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    readOnly: true,
    normalFill: "#fff",
  });

  var mixer = mixitup('.release-products__inner-box');

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

});

