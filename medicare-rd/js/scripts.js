(function ($) {
"use strict";


		// header-sticky
		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 225) {
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
			autoplay:false,
			slideSpeed: 5000,
        	paginationSpeed: 5000,
			navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		    nav:false,
			dots:true,
		});
		// slides animation start
        $(".slides-carousel").on("translate.owl.carousel", function() {
            $(".single-slide h5").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide h2").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide .slide-btn").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide .single-side-image").removeClass("animated fadeIn").css("opacity", "0");
        });
        $(".slides-carousel").on("translated.owl.carousel", function() {
            $(".single-slide h5").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide h2").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide .slide-btn").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide .single-side-image").addClass("animated fadeIn").css("opacity", "1");
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


	// Preloader js
	function loader() {
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
	}
	loader();

})(jQuery);