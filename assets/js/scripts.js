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
            topOffset: -70 // offste (in px) for fixed top navigation
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

        // $(window).on('scroll', function() {
        //     var scroll = $(window).scrollTop();
        //     if (scroll < 4500) {
        //         $(".go-top-btn").removeClass("show");
        //     } else {
        //         $(".go-top-btn").addClass("show");
        //     }
        // });

    }); //document ready function end

    $(window).load(function() {
        // body-preloader
        $(".body-loader-wrap").fadeOut();
    }); // winddow load function end

})(jQuery);