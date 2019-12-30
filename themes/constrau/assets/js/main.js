(function ($) {
"use strict";
    
    // sticky-header
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 60) {
            $(".header-main").removeClass("sticky");
        } else {
            $(".header-main").addClass("sticky");
        }
    });

    // meanmenu
    $('#menu').meanmenu({
        meanMenuContainer: '.hibo-mobile-menu',
        meanScreenWidth: "991",
        onePage: false
    });

    // data-background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    // slider-active
    $(".slider-active").owlCarousel({
    	items: 1,
		loop: true,
		nav: true,
		navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
		dots: false,
		autoplay: false,
        animateOut: 'slideOutDown',
        animateIn: 'heartBeat',
    });

    
    $(".work-carousel").owlCarousel({
    	items: 3,
		loop: true,
		nav: true,
		navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
		dots: false,
		margin: 30,
		autoplay: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    $(".testimonial-carousel").owlCarousel({
    	items: 2,
    	loop: true,
    	nav: true,
    	navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
    	dots: true,
    	margin: 30,
    	autoplay: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:2,
                nav:true,
                loop:false
            }
        }
    });

    $(".blog-carousel").owlCarousel({
    	items: 3,
        loop: true,
        nav: false,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        dots: false,
        margin: 30,
        autoplay: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    // magnificPopup video view
    $('.video-play-btn').magnificPopup({
        type: 'iframe'
    });

    new WOW().init();

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 10000
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
        //for isotop massonry menu active class
        $('.button-group > button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });


        

        

})(jQuery);



















