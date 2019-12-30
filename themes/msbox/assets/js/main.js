(function($){
	"use strict";
	jQuery(document).ready(function($){
        $(".responsive-menu-trigger, .off-canvas-overlay").click(function(){
            $(".off-canvas-menu-area, .off-canvas-overlay").toggleClass("active");
        });

        $(".offcanvas-close").click(function(){
            $(".off-canvas-menu-area, .off-canvas-overlay").removeClass("active");
        });

		$(".homepage-slides-carousel").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
        });

        $(".homepage-slides-carousel").on("translate.owl.carousel", function(){
            $(".single-slide-item h2").removeClass("animated fadeInDown").css("opacity", "0");
            $(".single-slide-item p").removeClass("animated fadeInRight").css("opacity", "0");
            $(".single-slide-item .slide-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".homepage-slides-carousel").on("translated.owl.carousel", function(){
            $(".single-slide-item h2").addClass("animated fadeInDown").css("opacity", "1");
            $(".single-slide-item p").addClass("animated fadeInRight").css("opacity", "1");
            $(".single-slide-item .slide-btn").addClass("animated fadeInDown").css("opacity", "1");
        });

        $('.counter').counterUp({
		    delay: 10,
		    time: 1000
		});

		$(".testimonial-wrapper").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
        });

		$(".projects-title li").on('click', function() {
            $(".projects-title li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".project-item").isotope({
               filter: selector 
            });
        });

        $(".single-project a").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
        });

        $(".service-page-section, .blog-page-section").owlCarousel({
            items: 1,
            nav: true,
            navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
            dots: false,
            autoplay: false,
            loop: true,
        });

        new WOW().init();

        $(".video-btn").magnificPopup({
            type: 'video',
        });

        
        
	});
	jQuery(window).load(function($){
		jQuery(".site-preloader-wrap").fadeOut(1000);
		jQuery(".project-item").isotope();
	});
}(jQuery));