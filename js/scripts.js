(function($) {
    "use strict";

    $(document).ready(function() {

        // sticky header
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            if (scroll < 51) {
                $(".header-bottom").removeClass("sticky");
            } else {
                $(".header-bottom").addClass("sticky");
            }
        });

        // scrollIt (for header)
        $.scrollIt({
            upKey: 0, // key code to navigate to the next section
            downKey: 0, // key code to navigate to the previous section
            easing: 'linear', // the easing function for animation
            scrollTime: 600, // how long (in ms) the animation takes
            activeClass: 'active', // class given to the active nav element
            onPageChange: null, // function(pageIndex) that is called when page is changed
            topOffset: -86.5 // offste (in px) for fixed top navigation
        });

        // data-background (for background image)
        $("[data-background]").each(function() {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
        });

        // testimonial-carousel
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            margin: 0,
            autoplay: false,
            animateOut: 'fadeOutLeft',
            animateIn: 'fadeInRight',
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


        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            if (scroll < 4500) {
                $(".go-top-btn").removeClass("show");
            } else {
                $(".go-top-btn").addClass("show");
            }
        });

        

        // // scrollIt (for header)
        // $.scrollIt({
        //     upKey: 0, // key code to navigate to the next section
        //     downKey: 0, // key code to navigate to the previous section
        //     easing: 'linear', // the easing function for animation
        //     scrollTime: 900, // how long (in ms) the animation takes
        //     activeClass: 'active', // class given to the active nav element
        //     onPageChange: null, // function(pageIndex) that is called when page is changed
        //     topOffset: -57 // offste (in px) for fixed top navigation
        // });

        // // menu active class (for removing auto class active from child 2)
        // $('.main-menu ul li:nth-child(2) a').removeClass('active');

        // //meanmenu
        // $('#menu').meanmenu({
        //     meanMenuContainer: '.hibo-mobile-menu',
        //     meanScreenWidth: "991",
        //     onePage: true,
        // });

        

        // // slides-carousel
        // $(".slides-carousel").owlCarousel({
        //     items: 1,
        //     loop: true,
        //     nav: false,
        //     dots: true,
        //     autoplay: false,
        //     animateOut: 'fadeOutLeft',
        //     animateIn: 'fadeInRight',
        // });

        // // slides animation start----------
        // $(".slides-carousel").on("translate.owl.carousel", function() {
        //     $(".single-slide h2").removeClass("animated fadeInDown").css("opacity", "0");
        //     $(".single-slide p").removeClass("animated fadeInUp").css("opacity", "0");
        //     $(".single-slide .matx-btn").removeClass("animated fadeInUp").css("opacity", "0");
        // });
        // $(".slides-carousel").on("translated.owl.carousel", function() {
        //     $(".single-slide h2").addClass("animated fadeInDown").css("opacity", "1");
        //     $(".single-slide p").addClass("animated fadeInUp").css("opacity", "0");
        //     $(".single-slide .matx-btn").addClass("animated fadeInUp").css("opacity", "1");
        // });
        // // slides animation end------------

        // // counterUp
        // $('.counter').counterUp({
        //     delay: .5,
        //     time: 300,
        // });

        // // magnificPopup video
        // $('.video-play-btn').magnificPopup({
        //     type: 'iframe',
        // });

        // // isotop massonry
        // $('.grid').imagesLoaded(function() {
        //     // init Isotope
        //     var $grid = $('.grid').isotope({
        //         itemSelector: '.grid-item',
        //         percentPosition: true,
        //         masonry: {
        //             // use outer width of grid-sizer for columnWidth
        //             columnWidth: 1,
        //         }
        //     });
        //     // filter items on button click
        //     $('.button-group').on('click', 'button', function() {
        //         var filterValue = $(this).attr('data-filter');
        //         $grid.isotope({
        //             filter: filterValue
        //         });
        //     });
        // });
        // //for isotop massonry menu active class
        // $('.button-group > button').on('click', function(event) {
        //     $(this).siblings('.active').removeClass('active');
        //     $(this).addClass('active');
        //     event.preventDefault();
        // });

        // // magnificPopup image
        // $('.image-show-btn').magnificPopup({
        //     type: 'image',
        //     gallery: {
        //         enabled: true
        //     },
        // });

        // // team-carousel
        // $(".team-carousel").owlCarousel({
        //     items: 4,
        //     loop: true,
        //     nav: false,
        //     dots: false,
        //     margin: 30,
        //     autoplay: false,
        //     responsiveClass: true,
        //     responsive: {
        //         0: {
        //             items: 1,
        //             nav: false,
        //         },
        //         480: {
        //             items: 1,
        //             nav: false,
        //         },
        //         768: {
        //             items: 2,
        //             nav: false,
        //         },
        //         992: {
        //             items: 3,
        //             nav: false,
        //         },
        //         1200: {
        //             items: 4,
        //             nav: false,
        //         }
        //     }
        // });

        // // testimonial-carousel
        // $(".testimonial-carousel").owlCarousel({
        //     items: 1,
        //     loop: false,
        //     nav: false,
        //     dots: false,
        //     margin: 0,
        //     autoplay: false,
        // });

        // // clients-carousel
        // $(".clients-carousel").owlCarousel({
        //     items: 4,
        //     loop: true,
        //     nav: false,
        //     dots: false,
        //     margin: 30,
        //     autoplay: false,
        //     responsiveClass: true,
        //     responsive: {
        //         0: {
        //             items: 1,
        //             nav: false,
        //         },
        //         480: {
        //             items: 1,
        //             nav: false,
        //         },
        //         768: {
        //             items: 3,
        //             nav: false,
        //         },
        //         992: {
        //             items: 4,
        //             nav: false,
        //         },
        //         1200: {
        //             items: 4,
        //             nav: false,
        //         }
        //     }
        // });

        // // wow js activation
        // new WOW().init();

        // // google map start
        // function basicmap() {
        //     // Basic options for a simple Google Map
        //     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        //     var mapOptions = {
        //         // How zoomed in you want the map to start at (always required)
        //         zoom: 11,
        //         scrollwheel: false,
        //         // The latitude and longitude to center the map (always required)
        //         center: new google.maps.LatLng(23.810331, 90.412521), // New York
        //         // This is where you would paste any style found on Snazzy Maps.
        //         styles: [{
        //             "featureType": "water",
        //             "elementType": "geometry",
        //             "stylers": [{
        //                 "color": "#e9e9e9"
        //             }, {
        //                 "lightness": 17
        //             }]
        //         }, {
        //             "featureType": "landscape",
        //             "elementType": "geometry",
        //             "stylers": [{
        //                 "color": "#f5f5f5"
        //             }, {
        //                 "lightness": 20
        //             }]
        //         }, {
        //             "featureType": "road.highway",
        //             "elementType": "geometry.fill",
        //             "stylers": [{
        //                 "color": "#ffffff"
        //             }, {
        //                 "lightness": 17
        //             }]
        //         }, {
        //             "featureType": "road.highway",
        //             "elementType": "geometry.stroke",
        //             "stylers": [{
        //                 "color": "#ffffff"
        //             }, {
        //                 "lightness": 29
        //             }, {
        //                 "weight": .2
        //             }]
        //         }, {
        //             "featureType": "road.arterial",
        //             "elementType": "geometry",
        //             "stylers": [{
        //                 "color": "#ffffff"
        //             }, {
        //                 "lightness": 18
        //             }]
        //         }, {
        //             "featureType": "road.local",
        //             "elementType": "geometry",
        //             "stylers": [{
        //                 "color": "#ffffff"
        //             }, {
        //                 "lightness": 16
        //             }]
        //         }, {
        //             "featureType": "poi",
        //             "elementType": "geometry",
        //             "stylers": [{
        //                 "color": "#f5f5f5"
        //             }, {
        //                 "lightness": 21
        //             }]
        //         }, {
        //             "featureType": "poi.park",
        //             "elementType": "geometry",
        //             "stylers": [{
        //                 "color": "#dedede"
        //             }, {
        //                 "lightness": 21
        //             }]
        //         }, {
        //             "elementType": "labels.text.stroke",
        //             "stylers": [{
        //                 "visibility": "on"
        //             }, {
        //                 "color": "#ffffff"
        //             }, {
        //                 "lightness": 16
        //             }]
        //         }, {
        //             "elementType": "labels.text.fill",
        //             "stylers": [{
        //                 "saturation": 36
        //             }, {
        //                 "color": "#333333"
        //             }, {
        //                 "lightness": 40
        //             }]
        //         }, {
        //             "elementType": "labels.icon",
        //             "stylers": [{
        //                 "visibility": "off"
        //             }]
        //         }, {
        //             "featureType": "transit",
        //             "elementType": "geometry",
        //             "stylers": [{
        //                 "color": "#f2f2f2"
        //             }, {
        //                 "lightness": 19
        //             }]
        //         }, {
        //             "featureType": "administrative",
        //             "elementType": "geometry.fill",
        //             "stylers": [{
        //                 "color": "#fefefe"
        //             }, {
        //                 "lightness": 20
        //             }]
        //         }, {
        //             "featureType": "administrative",
        //             "elementType": "geometry.stroke",
        //             "stylers": [{
        //                 "color": "#fefefe"
        //             }, {
        //                 "lightness": 17
        //             }, {
        //                 "weight": 1.2
        //             }]
        //         }]
        //     };
        //     // Get the HTML DOM element that will contain your map 
        //     // We are using a div with id="map" seen below in the <body>
        //     var mapElement = document.getElementById('contact-map');

        //     // Create the Google Map using our element and options defined above
        //     var map = new google.maps.Map(mapElement, mapOptions);

        //     // Let's also add a marker while we're at it
        //     var marker = new google.maps.Marker({
        //         position: new google.maps.LatLng(23.810331, 90.412521),
        //         map: map,
        //         title: 'Cryptox'
        //     });
        // }
        // if ($('#contact-map').length != 0) {
        //     google.maps.event.addDomListener(window, 'load', basicmap);
        // }
        // // google map end

    }); //document ready function end

    $(window).load(function() {
        // body-preloader
        $(".body-loader-wrap").fadeOut();
    }); // winddow load function end

})(jQuery);