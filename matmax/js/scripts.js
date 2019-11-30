(function ($) {
"use strict";

	jQuery(document).ready(function($){

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
            topOffset: -69 // offste (in px) for fixed top navigation
        });

        // menu active class (for removing auto class active from child 2)
        $('.main-menu ul li:nth-child(2) a').removeClass('active');




        $(".responsive-menu-trigger").click(function(){
            $(".responsive-menu-wrap, .responsive-menu-overlay").toggleClass("show");
        });
		$(".responsive-menu-close, .responsive-menu a, .responsive-menu-overlay").click(function(){
            $(".responsive-menu-wrap, .responsive-menu-overlay").removeClass("show");
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
			autoplayTimeout: 9000,
			animateOut: 'slideOutLeft',
    		animateIn: 'slideInRight',
			navText:['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],
		    nav:false,
			dots:true,
		});
		// slides animation start
        $(".slides-carousel").on("translate.owl.carousel", function() {
        	// $(".single-slide h2").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide .matmax-slide-btn").removeClass("animated fadeInUp").css("opacity", "0");
        });
        $(".slides-carousel").on("translated.owl.carousel", function() {
        	// $(".single-slide h2").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide .matmax-slide-btn").addClass("animated fadeInUp").css("opacity", "1");
        });
        // slides animation end

		// wcu-image-carousel
		$('.wcu-image-carousel').owlCarousel({
		    loop:true,
		    margin:0,
			items:1,
			autoplay:false,
			animateOut: 'slideOutRight',
    		animateIn: 'slideInLeft',
			navText:['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],
		    nav:false,
			dots:false,
			mouseDrag:false,
			touchDrag:false,
		});

        // wcu-content-carousel
		$('.wcu-content-carousel-wrap').owlCarousel({
		    loop:true,
		    margin:0,
			items:1,
			autoplay:false,
			animateOut: 'fadeOutDown',
    		animateIn: 'fadeInDown',
			navText:['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],
		    nav:false,
			dots:false,
			mouseDrag:false,
			touchDrag:false,
		});

		// testimonial-carousel
		$('.testimonial-carousel').owlCarousel({
		    loop:true,
		    margin:0,
			items:1,
			autoplay:false,
			autoplayTimeout: 9000,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
			navText:['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],
		    nav:false,
			dots:true,
		});
		
		// partner-carousel
		$('.partner-carousel').owlCarousel({
		    loop:true,
		    margin:50,
			items:4,
			autoplay: false,
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
		            items:5
		        }
		    }
		});

		// blog-carousel
		$('.blog-carousel').owlCarousel({
		    loop:true,
		    margin:0,
			items:2,
			autoplay: false,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		    nav:false,
			dots:true,
			responsive:{
		        0:{
		            items:1
		        },
		        767:{
		            items:2
		        },
		        992:{
		            items:2
		        }
		    }
		});

		// isotop massonry
        $('.grid').imagesLoaded(function() {
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                }
            });
            // filter items on button click
            $('.button-group').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
        });
        // for isotop massonry menu active class
        $('.button-group > button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        // magnificPopup image
        $('.pis-btn').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
        });

       // counter
	   $('.counter').counterUp({
	       delay: .5,
	       time: 300,
	   });

	   	// video-area magnific popup video //
		$('.video-play-btn').magnificPopup({
			type: 'iframe'
		});

		new WOW().init();
	});

	jQuery(window).load(function(){

		// body-pre-loader
		$(".body-preloader").fadeOut();

	});

})(jQuery);