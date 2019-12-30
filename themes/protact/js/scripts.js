(function ($) {
	"use strict";
	jQuery(document).ready(function($){
	
		// stickyHeader
		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 1) {
				$(".header-area").removeClass("header-sticky");
			} else {
				$(".header-area").addClass("header-sticky");
			}
		});

		// menu add class active
		// $(function() {
  //         var pgurl = window.location.href.substr(window.location.href
  //            .lastIndexOf("/") + 1);
  //         $(".main-menu > ul > li > a").each(function() {
  //            if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
  //               $(this).addClass("active");
  //         })
  //      	});

       	// meanmenu
	    $('#menu').meanmenu({
	        meanMenuContainer: '.mean-menu',
	        meanScreenWidth: "991",
	        onePage: false,
	    });

	    // off-canvas-overlay
        $("a.meanmenu-reveal").on('click', function(){
            $(".menu-overlay").toggleClass("active");
        });

		// data-background (for background image)
		$("[data-background]").each(function() {
		    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
		});

       	// slidesCarousel
		$('.slides-carousel').owlCarousel({
		    loop:true,
		    autoplay:false,
		    margin:0,
			items:1,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		    nav:false,
			dots:false,
		});

		// testimonialsCarousel
		$('.testimonials-carousel').owlCarousel({
		    loop:true,
		    autoplay:false,
		    margin:0,
			items:1,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		    nav:false,
			dots:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        767:{
		            items:1
		        },
		        992:{
		            items:1
		        }
		    }
		});

		// articlesCarousel
		$('.articles-carousel').owlCarousel({
		    loop:true,
		    autoplay:false,
		    margin:30,
			items:3,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		    nav:false,
			dots:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:2
		        },
		        992:{
		            items:3
		        }
		    }
		});

		// ctaCarousel
		$('.cta-carousel').owlCarousel({
		    loop:true,
		    autoplay:false,
		    margin:0,
			items:1,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		    nav:false,
			dots:true,
		});

		// scrollIt (for header)
        $.scrollIt({
            upKey: 0, // key code to navigate to the next section
            downKey: 0, // key code to navigate to the previous section
            easing: 'linear', // the easing function for animation
            scrollTime: 900, // how long (in ms) the animation takes
            activeClass: '', // class given to the active nav element
            onPageChange: null, // function(pageIndex) that is called when page is changed
            topOffset: 0 // offste (in px) for fixed top navigation
        });

        // go-top-btn
		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 3700) {
				$(".go-top-btn").removeClass("show");
			} else {
				$(".go-top-btn").addClass("show");
			}
		});

		// partnerCarousel
		$('.partner-carousel').owlCarousel({
		    loop:true,
		    autoplay:false,
		    margin:30,
			items:4,
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

		// blog pagination add class active
		// $(function() {
  //         var pgurl = window.location.href.substr(window.location.href
  //            .lastIndexOf("/") + 1);
  //         $(".pagination a").each(function() {
  //            if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
  //               $(this).addClass("active");
  //         })
  //      	});




		// // magnificPopup img view
		// $('.popup-image').magnificPopup({
		// 	type: 'image',
		// 	gallery: {
		// 	  enabled: true
		// 	}
		// });



		// // magnificPopup video view
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
		// // Filter items on button click
		// $('.portfolio-menu').on( 'click', 'button', function() {
		//   var filterValue = $(this).attr('data-filter');
		//   $grid.isotope({ filter: filterValue });
		// });
		// // For menu active class
		// $('.portfolio-menu button').on('click', function(event) {
		// 	$(this).siblings('.active').removeClass('active');
		// 	$(this).addClass('active');
		// 	event.preventDefault();
		// });



		// // Wow active
		// new WOW().init();
	});
	jQuery(window).load(function(){
		// body-pre-loader
		$(".body-preloader").fadeOut();
	});
})(jQuery);


