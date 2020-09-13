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

});

