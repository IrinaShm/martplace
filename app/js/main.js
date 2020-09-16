$(function() {

  $('.featprod__inner').slick({
    prevArrow:'<button class="slick-arrow slick-prew"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:'<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
  });
  
  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    readOnly: true,
    normalFill: "#fff",
  });

  var mixer = mixitup('.relprod__inner-box');

  $('.yourprod__inner').slick({
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow:'<button class="slick-arrow slick-prew prew-color"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:'<button class="slick-arrow slick-next next-color"><span class="lnr lnr-chevron-right"></span></button>',
  });

});

