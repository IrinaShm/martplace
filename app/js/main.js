$(function() {

  $('.featprod__inner').slick({
    prevArrow:'<button class="slick-arrow slick-prew"><img src="images/icons/slick-left.png" alt="arrow"></button>',
    nextArrow:'<button class="slick-arrow slick-next"><img src="images/icons/slick-right.png" alt="arrow"></button>',
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
    prevArrow:'<button class="slick-arrow slick-prew prew-color"><img src="images/icons/slick-left.png" alt="arrow"></button>',
    nextArrow:'<button class="slick-arrow slick-next next-color"><img src="images/icons/slick-right.png" alt="arrow"></button>',
  });

});

