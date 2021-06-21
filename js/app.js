$(function ($) {
  $('#navbarSupportedContent ul li').click(function () {
    // $('#navbarSupportedContent ul li').removeClass('active')
    $('#navbarSupportedContent ul').find('li.active').removeClass('active')
    $(this).addClass('active')
    var mclass = $(this).attr('class')
    console.log(mclass)
  })
  //   search toggler

  $('.small_device_small_toggler').click(function () {
    $('#mobile_search_form').toggle()
  })

  // turing on dark mode

  let darkmode = localStorage.getItem('darkmode')
  const dark_btn = $('.dark_mode_toggler')

  // enable dark

  function enableDark() {
    $('html body').addClass('dark_mode_body')
    darkmode = localStorage.setItem('darkmode', 'enable')
  }
  // disable dark

  function disableDark() {
    $('html body').removeClass('dark_mode_body')
    darkmode = localStorage.setItem('darkmode', null)
  }

  // storing value
  if (darkmode === 'enable') {
    enableDark()
  }

  $(dark_btn).click(function () {
    darkmode = localStorage.getItem('darkmode')

    if (darkmode !== 'enable') {
      enableDark()
    } else {
      disableDark()
    }
  })

  // index swiper banner part

  var swiper = new Swiper('.myswiper', {
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })



  // backtotop

  var backToTopBtn = $('.back_to_top');
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop>3000){
      backToTopBtn.fadeIn();
    }else{
      backToTopBtn.fadeOut();
    }


   



  });
 
  backToTopBtn.click(function(){
    $('html ,body').animate({
      scrollTop: 0
    });
  });
  



})
