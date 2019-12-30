(function($){
	"use strict";
	jQuery(document).ready(function($){
		$(".responsive-menu-trigger, .off-canvas-overlay").click(function(){
            $(".off-canvas-menu, .off-canvas-overlay").toggleClass("active");
            return false;
        });

		$(".menu-close").click(function(){
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        });

		$(".slide-carousel").owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
			dots: false,
			autoplay: false,
		});

		$(".client-carousel").owlCarousel({
			items: 2,
			loop: true,
			nav: false,
			dots: true,
			autoplay: false,
			margin: 40,
			responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:2,
                }
            }
		});

		$('.counter').counterUp({
		    delay: 10,
		    time: 1000
		});
	});
	jQuery(window).load(function($){
		jQuery(".site-preloader-wrap").fadeOut(1000);
	});
}(jQuery));