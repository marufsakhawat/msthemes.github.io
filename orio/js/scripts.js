(function ($) {
"use strict";
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
		loop: true,
		autoplay: true,
		margin: 30,
		items: 4,
		dots: false,
		nav: true,
		navText: ['<i class="zmdi zmdi-long-arrow-left"></i>', '<i class="zmdi zmdi-long-arrow-right"></i>']
	});

	$('.testimonial-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		margin: 60,
		items: 1,
		dots: false,
		nav: true,
		navText: ['<i class="zmdi zmdi-long-arrow-left"></i>', '<i class="zmdi zmdi-long-arrow-right"></i>'],
		autoplayTimeout: 9000,
		animateOut: 'slideOutLeft',
		animateIn: 'slideInRight',
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

})(jQuery);