(function($){
	"use strict";
	jQuery(document).ready(function($){
        
        $(window).on('scroll',function() {    
           var scroll = $(window).scrollTop();
           if (scroll < 73) {
            $(".header-main.sticky").removeClass("sticky");
           }else{
            $(".header-main").addClass("sticky");
           }
          });

        $(".slides-wrapper").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
        });

        $(".breadcumb-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: false,
            autoplay: false,
        });

        $(".why-img-carousal").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
        });

        $(".responsive-menu-trigger").click(function(){
            $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
            return false;
        });
        
        $(".offcanvas-close, .off-canvas-overlay").click(function(){
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
            return false;
        });

        // HIDE MOBILE MENU AFTER CLIKING ON A LINK
        $('.off-canvas-menu a').on('click', function(){
            $('.off-canvas-menu, .off-canvas-overlay').removeClass('active');
        });

       $(function() {
          var pgurl = window.location.href.substr(window.location.href
             .lastIndexOf("/") + 1);
          $("nav.menu-sidebar ul li a").each(function() {
             if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
                $(this).addClass("active");
          })
       });

       $(".video-btn").magnificPopup({
            type: 'video',
        });










	});

	jQuery(window).load(function($){
		
	});

}(jQuery));