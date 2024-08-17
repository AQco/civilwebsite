// custom.js

jQuery(document).ready(function($) {

    // ISOTOPE FILTER
    if ($('.iso-box-wrapper').length > 0) {
        var $container = $('.iso-box-wrapper'),
            $imgs = $('.iso-box img');
        $container.imagesLoaded(function() {
            $container.isotope({
                layoutMode: 'fitRows',
                itemSelector: '.iso-box'
            });
            $imgs.load(function() {
                $container.isotope('reLayout');
            })
        });
        //filter items on button click
        $('.filter-wrapper li a').click(function() {
            var $this = $(this),
                filterValue = $this.attr('data-filter');
            $container.isotope({
                filter: filterValue,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            // don't proceed if already selected 
            if ($this.hasClass('selected')) {
                return false;
            }
            var filter_wrapper = $this.closest('.filter-wrapper');
            filter_wrapper.find('.selected').removeClass('selected');
            $this.addClass('selected');
            return false;
        });
    }

    // MAIN NAVIGATION
    $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: $('.navbar-fixed-top').outerHeight(), // Use the actual header height
        filter: ':not(.external)',
        changeHash: true
    });

    // HIDE MOBILE MENU AFTER CLICKING ON A LINK
    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });

    // Smooth scrolling for within-page links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - $('.navbar-fixed-top').outerHeight() // Subtract header height
            }, 1000);
        }
    });

    // Adjust padding-top of body when window is resized
    $(window).resize(function() {
        $('body').css('padding-top', $('.navbar-fixed-top').outerHeight() + 'px');
    });

    // Initial adjustment of body padding
    $('body').css('padding-top', $('.navbar-fixed-top').outerHeight() + 'px');

    // WOW JS
    new WOW({ mobile: false }).init();

});

// PRELOADER JS
$(window).load(function() {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});
