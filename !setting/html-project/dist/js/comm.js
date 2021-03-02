$(function(){

  // 스크롤 시 header에 .sticky 추가
  $(window).scroll(function(){

    if($(window).scrollTop() > 100){
      $('#gnb').addClass('sticky')
    }else{
      $('#gnb').removeClass('sticky')
    }

    $(window).trigger('scroll');    

  })

  // swiper
  var mySwiper = new Swiper('.slide-intro', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })


})