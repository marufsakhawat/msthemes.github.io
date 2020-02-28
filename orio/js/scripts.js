(function ($) {
"use strict";

	// header-sticky
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 1) {
			$(".header-area").removeClass("header-sticky");
		} else {
			$(".header-area").addClass("header-sticky");
		}
	});

	



	// scrollIt (for header)
    $.scrollIt({
        upKey: 0, // key code to navigate to the next section
        downKey: 0, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 900, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -82 // offste (in px) for fixed top navigation
    });

    $('.js-target-scroll').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - navbar.outerHeight())
            }, 1000);
            return false;
        }
    });


    // preloader js
	$(window).on('load', function () {
		$('#ctn-preloader').addClass('loaded');
		$("#loading").fadeOut(500);
		// Una vez haya terminado el preloader aparezca el scroll

		if ($('#ctn-preloader').hasClass('loaded')) {
			// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
			$('#preloader').delay(900).queue(function () {
				$(this).remove();
			});
		}
	});

	// data-background (for background image)
	$("[data-background]").each(function() {
	    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});

	// video-area magnific popup video //
	$('.play-btn').magnificPopup({
		type: 'iframe'
	});

	// counter
	$('.counter').counterUp({
    	delay: .5,
    	time: 300,
	});

	

	$('.partner-logo-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:30,
	    dots: false,
		nav: false,
		navText: ['<i class="zmdi zmdi-long-arrow-left"></i>', '<i class="zmdi zmdi-long-arrow-right"></i>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:true,
	            loop:false
	        }
	    }
	});


	$('.testimonial-carousel').owlCarousel({
		loop: true,
		autoplay: false,
		margin: 60,
		items: 1,
		dots: false,
		nav: true,
		navText: ['<i class="zmdi zmdi-long-arrow-left"></i>', '<i class="zmdi zmdi-long-arrow-right"></i>'],
		autoplayTimeout: 9000,
		animateOut: 'slideOutLeft',
		animateIn: 'slideInRight',
	});

	$('.blog-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:30,
	    dots: false,
		nav: true,
		navText: ['<i class="zmdi zmdi-long-arrow-left"></i>', '<i class="zmdi zmdi-long-arrow-right"></i>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:true,
	            loop:false
	        }
	    }
	});





	// meanmenu
	$('#responsive-menu').meanmenu({
		meanMenuContainer: '.mean-menu-wrap',
		meanScreenWidth: "991",
		onePage: true,
	});




















	$('.hero-carousel-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite:true,
		asNavFor: '.hero-carousel-thumbnail-slider',
		dots: true,
		dotsClass:'slick-modified-dots',
		});


	$('.hero-carousel-thumbnail-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.hero-carousel-active',
		arrows:false,
		infinite:true,
		focusOnSelect: true
	});

	$('.wwd-services-carousel').slick({
	dots: false,
	infinite: true,
	arrows:false,
	slidesToShow: 3,	
	slidesToScroll: 1,
	variableWidth:false,
	accessibility:true,
	responsive: [
		{
		  breakpoint:1300,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 1,
		    infinite: true,
		    dots:true
		  }
		},
		{
		  breakpoint:568,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    infinite: true,
		    dots:true
		  }
		}
	]	
	});

	// $('.hero-section').owlCarousel({
	//     loop:true,
	//     margin:0,
	// 	items:1,
	// 	autoplay:false,
	// 	autoplayTimeout: 9000,
	// 	animateOut: 'slideOutLeft',
	// 	animateIn: 'slideInRight',
	// 	navText:['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],
	//     nav:false,
	// 	dots:true,
	// });
	$('.focus-carousel').owlCarousel({
	    loop:true,
	    margin:10,
		items:3,
		autoplay:false,
		navText:['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],
	    nav:false,
		dots:true,
	});

	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/



    $('.js-target-scroll').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - navbar.outerHeight())
            }, 1000);
            return false;
        }
    });


	// body-pre-loader
	// $(".body-preloader").fadeOut();
})(jQuery);