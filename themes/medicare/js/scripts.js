(function ($) {
"use strict";

	jQuery(document).ready(function($){

		// header-sticky
		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 63) {
				$(".header-bottom-wrap").removeClass("header-sticky");
			} else {
				$(".header-bottom-wrap").addClass("header-sticky");
			}
		});

		// search-form sho-hide
	    $(".search-trigger, .close-search").on('click', function(){
	        $(".search-form-wrap").toggleClass("active");
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

       	// mean-menu
	    $('#menu').meanmenu({
	        meanMenuContainer: '.mean-menu',
	        meanScreenWidth: "991",
	        onePage: false,
	    });

	    // mean-menu-overlay
	    $(".meanmenu-reveal").on('click', function(){
	        $(".mean-menu-overlay").toggleClass("active");
	    });

		// data-background (for background image)
		$("[data-background]").each(function() {
		    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
		});

		// slides-carousel
		$('.slides-carousel').owlCarousel({
		    loop:true,
		    margin:0,
			items:1,
			autoplay:true,
			navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		    nav:false,
			dots:false,
		});
		// slides animation start
        $(".slides-carousel").on("translate.owl.carousel", function() {
            $(".single-slide h5").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide h2").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide p").removeClass("animated fadeInRight").css("opacity", "0");
            $(".single-slide .slide-btn").removeClass("animated fadeInRight").css("opacity", "0");
        });
        $(".slides-carousel").on("translated.owl.carousel", function() {
            $(".single-slide h5").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide h2").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide p").addClass("animated fadeInRight").css("opacity", "1");
            $(".single-slide .slide-btn").addClass("animated fadeInRight").css("opacity", "1");
        });
        // slides animation end

		// focus-photos-carousel
		$('.focus-photos-carousel').owlCarousel({
		    loop:true,
		    margin:15,
			items:1,
			autoplay: true,
			navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		    nav:true,
			dots:false,
		});

		// video-area magnific popup video //
		$('.play-btn').magnificPopup({
			type: 'iframe'
		});

		// photo-gallery masonry
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
		
	    // counter
	    $('.counter').counterUp({
	        delay: .5,
	        time: 300,
	    });

	    // appoinment-form niceSelect active
	    $('select').niceSelect();
		
		// appoinment-form jquery-ui - datepicker active
	    $( ".datepicker" ).datepicker();
		
		// testimonia-carousel
		$('.testimonial-carousel').owlCarousel({
		    loop:true,
		    margin:0,
			items:1,
			autoplay: true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		    nav:false,
			dots:true,
		});

		// partner-carousel
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

		// wow active
		new WOW().init();

	});

	jQuery(window).load(function(){

		// body-pre-loader
		$(".body-preloader").fadeOut();

	});

})(jQuery);