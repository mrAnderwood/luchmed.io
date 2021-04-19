(function() {



$(window).on('load resize', function() {
    let width = $(window).width();

    if(width > 1170){

      let delay=175, setTimeoutConst;
        $('.services-menu__item').hover(function(){
          $this = $(this);
          setTimeoutConst = setTimeout(function(){
            $this.find('.services-menu__sub-menu').slideDown(400, function(){

            $this.find('.services-menu__sub-menu').css( "overflow", "initial" );

           });
          }, delay);
        },function(){
          clearTimeout(setTimeoutConst );
        })


      $( ".services-menu__item" ).mouseleave(function() {

        $this = $(this);
        $this.find('.services-menu__sub-menu').css( "overflow", "hidden" );
        $(this).find('.services-menu__sub-menu').slideUp(400);

      });

    }

});






$('.header__gamburger').click(function() {
    $('.header__menu').addClass("header__menu_open");
    $('html, body').css('overflowY', 'hidden'); 
  });

  $('.header__menu-close').click(function() {
    $('.header__menu').removeClass("header__menu_open");
    $('html, body').css('overflowY', 'auto'); 

});

$('.header__mob-btn').click(function() {
    $('.services-menu').addClass("services-menu_open");
    $('html, body').css('overflowY', 'hidden'); 
  });

  $('.services-menu__close').click(function() {
    $('.services-menu').removeClass("services-menu_open");
    $('html, body').css('overflowY', 'auto'); 

});



/*Price cards btn*/

$(".price-cards__drop-btn").click(function(){

  $(this).toggleClass('price-cards__drop-btn_open');
  $('.price-cards__drop-btn').not(this).removeClass('price-cards__drop-btn_open');
  $(this).prev(".price-cards__list").toggleClass('price-cards__list_open');
  $('.price-cards__drop-btn').not(this).prev(".price-cards__list").removeClass('price-cards__list_open');

  $('.price-cards__drop-btn').text('Подробнее ↓');
  $('.price-cards__drop-btn_open').text('Скрыть ↑');

});





/*Article btn*/

$(".article__btn").click(function() {

	$('.article__content').toggleClass('article__content_hidden');
	if ($('.article__content').hasClass('article__content_hidden')) {
		$(".article__btn").text('Читать дальше');
	}
	else{
		$(".article__btn").text('Скрыть');
	}

});


/*Popup*/

$( ".open-big-popup" ).click(function(e) {
	e.preventDefault();
	$('.big-popup').css("display", "flex").hide().fadeIn();
	$('html, body').css('overflowY', 'hidden'); 
});

$( ".open-small-popup" ).click(function(e) {
	e.preventDefault();
	$('.small-popup').css("display", "flex").hide().fadeIn();
	$('html, body').css('overflowY', 'hidden'); 
});

$( ".header__city-select" ).click(function(e) {
	e.preventDefault();
	$('.select-city-popup').css("display", "flex").hide().fadeIn();
	$('html, body').css('overflowY', 'hidden'); 
});


$( ".big-popup .popup__close, .big-popup .popup-screen__close, .small-popup .popup__close, .small-popup .popup-screen__close, .select-city-popup .popup__close, .select-city-popup .popup-screen__close" ).click(function() {
	$(this).parents().find('.popup-screen').fadeOut();
	$('html, body').css('overflowY', 'auto'); 
});


/*Sliders*/


$('.order-cards__slider').slick({

	arrows: true,
	infinite: true,
	cssEase: 'ease-out',
	speed: 300,
	slidesToShow: 5,
   slidesToScroll: 1,
   appendArrows: $('.order-cards__slider+.slider__arrows-block'),
   waitForAnimate: false,
   responsive: [
   {
      breakpoint: 1361,
      settings: {
        variableWidth: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        variableWidth: true
      }
    }
  ]
});


$('.licenses__slider').slick({

	arrows: true,
	infinite: true,
	cssEase: 'ease-out',
	speed: 300,
	slidesToShow: 4,
   slidesToScroll: 1,
   waitForAnimate: false,
   appendArrows: $('.licenses__slider+.slider__arrows-block'),
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        variableWidth: true
      }
    }
  ]
});

$('.doctors-slider').slick({

	arrows: true,
	infinite: true,
	cssEase: 'ease-out',
	speed: 300,
	slidesToShow: 4,
   slidesToScroll: 1,
   waitForAnimate: false,
   appendArrows: $('.doctors-slider+.slider__arrows-block'),
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        variableWidth: true
      }
    }
  ]
});

$('.reviews__slider').slick({

	arrows: true,
	infinite: true,
	cssEase: 'ease-out',
	speed: 300,
	slidesToShow: 3,
   slidesToScroll: 1,
   waitForAnimate: false,
   appendArrows: $('.reviews__slider+.slider__arrows-block'),
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        variableWidth: true
      }
    }
  ]
});

$('.may-interested__slider').slick({

	arrows: true,
	infinite: true,
	cssEase: 'ease-out',
	speed: 300,
	slidesToShow: 3,
   slidesToScroll: 1,
   waitForAnimate: false,
   appendArrows: $('.may-interested__slider+.slider__arrows-block'),
   responsive: [
   {
      breakpoint: 1361,
      settings: {
        variableWidth: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        variableWidth: true
      }
    }
  ]
});


$('.FAQ__tab-head').on('click', function() {

		$(this).next(".FAQ__content").slideToggle();
		$('.FAQ__tab-head').not(this).next(".FAQ__content").slideUp();

		$(this).parent().toggleClass('FAQ__tab_active');
		$('.FAQ__tab-head').not(this).parent().removeClass('FAQ__tab_active');

});



}());