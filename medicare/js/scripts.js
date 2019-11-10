(function ($) {
"use strict";
	jQuery(document).ready(function($){

		/* magnificPopup video view */
		$('.ht-location, .f-location').magnificPopup({
			type: 'iframe'
		});
		
		// menu add class active
		$(function() {
          var pgurl = window.location.href.substr(window.location.href
             .lastIndexOf("/") + 1);
          $(".main-menu > ul > li > a, .submenu > li > a").each(function() {
             if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
                $(this).addClass("active");
          })
       	});

		// data-background (for background image)
		$("[data-background]").each(function() {
		    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
		});

		// owlCarousel
		$('.slides-carousel').owlCarousel({
		    loop:true,
		    margin:0,
			items:1,
			autoplay:true,
			navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		    nav:false,
			dots:false,
		});
		
		// meanmenu
	    $('#menu').meanmenu({
	        meanMenuContainer: '.mean-menu',
	        meanScreenWidth: "991",
	        onePage: false,
	    });

	    // off-canvas-overlay
	    $("a.meanmenu-reveal").on('click', function(){
	        $(".responsive-menu-overlay").toggleClass("active");
	    });

	    // counterUp
	    $('.counter').counterUp({
	        delay: .5,
	        time: 300,
	    });

		// // isotop
		$('.grid').imagesLoaded( function() {
			// init Isotope
			var $grid = $('.grid').isotope({
			  itemSelector: '.grid-item',
			  percentPosition: true,
			  masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			  }
			});
		});

		// owlCarousel
		$('.focus-photos-carousel').owlCarousel({
		    loop:true,
		    margin:15,
			items:1,
			autoplay: false,
			navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		    nav:true,
			dots:false,
		});
		
		// owlCarousel
		$('.testimonial-carousel').owlCarousel({
		    loop:true,
		    margin:0,
			items:1,
			autoplay: true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		    nav:false,
			dots:true,
		});

		// owlCarousel
		$('.partner-carousel').owlCarousel({
		    loop:true,
		    margin:50,
			items:4,
			autoplay: true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		    nav:false,
			dots:false,
			responsive:{
		        0:{
		            items:1
		        },
		        767:{
		            items:3
		        },
		        992:{
		            items:4
		        }
		    }
		});

		$('select').niceSelect();
		
	    $( ".datepicker" ).datepicker();

		/* magnificPopup video view */
		$('.play-btn').magnificPopup({
			type: 'iframe'
		});

		// stickyHeader
		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 63) {
				$(".header-bottom").removeClass("header-sticky");
			} else {
				$(".header-bottom").addClass("header-sticky");
			}
		});
	});
  

// // meanmenu
// $('#mobile-menu').meanmenu({
// 	meanMenuContainer: '.mobile-menu',
// 	meanScreenWidth: "992"
// });

// // One Page Nav
// var top_offset = $('.header-area').height() - 10;
// $('.main-menu nav ul').onePageNav({
// 	currentClass: 'active',
// 	scrollOffset: top_offset,
// });


// $(window).on('scroll', function () {
// 	var scroll = $(window).scrollTop();
// 	if (scroll < 245) {
// 		$(".header-sticky").removeClass("sticky");
// 	} else {
// 		$(".header-sticky").addClass("sticky");
// 	}
// });



// // mainSlider
// function mainSlider() {
// 	var BasicSlider = $('.slider-active');
// 	BasicSlider.on('init', function (e, slick) {
// 		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
// 		doAnimations($firstAnimatingElements);
// 	});
// 	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
// 		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
// 		doAnimations($animatingElements);
// 	});
// 	BasicSlider.slick({
// 		autoplay: false,
// 		autoplaySpeed: 10000,
// 		dots: false,
// 		fade: true,
// 		arrows: false,
// 		responsive: [
// 			{ breakpoint: 767, settings: { dots: false, arrows: false } }
// 		]
// 	});

// 	function doAnimations(elements) {
// 		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
// 		elements.each(function () {
// 			var $this = $(this);
// 			var $animationDelay = $this.data('delay');
// 			var $animationType = 'animated ' + $this.data('animation');
// 			$this.css({
// 				'animation-delay': $animationDelay,
// 				'-webkit-animation-delay': $animationDelay
// 			});
// 			$this.addClass($animationType).one(animationEndEvents, function () {
// 				$this.removeClass($animationType);
// 			});
// 		});
// 	}
// }
// mainSlider();


// // owlCarousel
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:0,
// 	items:1,
// 	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
//     nav:true,
// 	dots:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         767:{
//             items:3
//         },
//         992:{
//             items:5
//         }
//     }
// })


// /* magnificPopup img view */
// $('.popup-image').magnificPopup({
// 	type: 'image',
// 	gallery: {
// 	  enabled: true
// 	}
// });

// /* magnificPopup video view */
// $('.popup-video').magnificPopup({
// 	type: 'iframe'
// });


// // isotop
// $('.grid').imagesLoaded( function() {
// 	// init Isotope
// 	var $grid = $('.grid').isotope({
// 	  itemSelector: '.grid-item',
// 	  percentPosition: true,
// 	  masonry: {
// 		// use outer width of grid-sizer for columnWidth
// 		columnWidth: '.grid-item',
// 	  }
// 	});
// });

// // filter items on button click
// $('.portfolio-menu').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });
// });

// //for menu active class
// $('.portfolio-menu button').on('click', function(event) {
// 	$(this).siblings('.active').removeClass('active');
// 	$(this).addClass('active');
// 	event.preventDefault();
// });




// // scrollToTop
// $.scrollUp({
// 	scrollName: 'scrollUp', // Element ID
// 	topDistance: '300', // Distance from top before showing element (px)
// 	topSpeed: 300, // Speed back to top (ms)
// 	animation: 'fade', // Fade, slide, none
// 	animationInSpeed: 200, // Animation in speed (ms)
// 	animationOutSpeed: 200, // Animation out speed (ms)
// 	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
// 	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
// });

// // WOW active
// new WOW().init();

	jQuery(window).load(function(){
		// body-pre-loader
		$(".body-preloader").fadeOut();
	});
})(jQuery);