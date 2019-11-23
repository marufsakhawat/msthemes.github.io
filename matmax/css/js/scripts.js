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
            topOffset: -62 // offste (in px) for fixed top navigation
        });
        // menu active class (for removing auto class active from child 2)
        $('.main-menu ul li:nth-child(2) a').removeClass('active');

        // slides-carousel
		$('.wcu-content-carousel-wrap').owlCarousel({
		    loop:true,
		    margin:0,
			items:1,
			autoplay:true,
			autoplayTimeout: 7000,
			animateOut: 'fadeOutUp',
    		animateIn: 'fadeInUp',
			navText:['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],
		    nav:false,
			dots:true,
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


		// // search-form sho-hide
	 //    $(".search-trigger, .close-search").on('click', function(){
	 //        $(".search-form-wrap").toggleClass("active");
	 //    });		
		
		// // menu add class active
		// $(function() {
  //         var pgurl = window.location.href.substr(window.location.href
  //            .lastIndexOf("/") + 1);
  //         $(".main-menu > ul > li > a, .submenu > li > a").each(function() {
  //            if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
  //               $(this).addClass("active");
  //         })
  //      	});

  //      	// mean-menu
	 //    $('#menu').meanmenu({
	 //        meanMenuContainer: '.mean-menu',
	 //        meanScreenWidth: "991",
	 //        onePage: false,
	 //    });

	 //    // mean-menu-overlay
	 //    $(".meanmenu-reveal").on('click', function(){
	 //        $(".mean-menu-overlay").toggleClass("active");
	 //    });

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
			autoplayTimeout: 9000,
			animateOut: 'slideOutLeft',
    		animateIn: 'slideInRight',
			navText:['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],
		    nav:false,
			dots:true,
		});

		// testimonial-carousel
		$('.testimonial-carousel').owlCarousel({
		    loop:true,
		    margin:0,
			items:1,
			autoplay:true,
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
		            items:5
		        }
		    }
		});
		// slides animation start
        // $(".slides-carousel").on("translate.owl.carousel", function() {
        // 	$(".single-slide h2").removeClass("animated fadeIn").css("opacity", "0");
        //     $(".single-slide p").removeClass("animated fadeInUp").css("opacity", "0");
        //     $(".single-slide .matmax-slide-btn").removeClass("animated fadeInUp").css("opacity", "0");
        // });
        // $(".slides-carousel").on("translated.owl.carousel", function() {
        // 	$(".single-slide h2").addClass("animated fadeIn").css("opacity", "0");
        //     $(".single-slide p").addClass("animated fadeInUp").css("opacity", "1");
        //     $(".single-slide .matmax-slide-btn").addClass("animated fadeInUp").css("opacity", "1");
        // });
        // slides animation end

		// // focus-photos-carousel
		// $('.focus-photos-carousel').owlCarousel({
		//     loop:true,
		//     margin:15,
		// 	items:1,
		// 	autoplay: true,
		// 	navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		//     nav:true,
		// 	dots:false,
		// });

		

		// // photo-gallery masonry
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
		
	 

	 //    // appoinment-form niceSelect active
	 //    $('select').niceSelect();
		
		// // appoinment-form jquery-ui - datepicker active
	 //    $( ".datepicker" ).datepicker();
		
		// // testimonia-carousel
		// $('.testimonial-carousel').owlCarousel({
		//     loop:true,
		//     margin:0,
		// 	items:1,
		// 	autoplay: true,
		// 	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		//     nav:false,
		// 	dots:true,
		// });

		// // partner-carousel
		// $('.partner-carousel').owlCarousel({
		//     loop:true,
		//     margin:50,
		// 	items:4,
		// 	autoplay: true,
		// 	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		//     nav:false,
		// 	dots:false,
		// 	responsive:{
		//         0:{
		//             items:1
		//         },
		//         767:{
		//             items:3
		//         },
		//         992:{
		//             items:4
		//         }
		//     }
		// });

		// wow active
		new WOW().init();

	});

	jQuery(window).load(function(){

		// body-pre-loader
		$(".site-preloader-wrap").fadeOut();

	});

})(jQuery);