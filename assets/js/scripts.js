$( document ).ready(function() {
    "use strict";

    // For On hover mega menu show
    var navbarToggle = '.navbar-toggle';
    $('.dropdown, .dropup').each(function() {
        var dropdown = $(this),
            dropdownToggle = $('[data-toggle="dropdown"]', dropdown),
            dropdownHoverAll = dropdownToggle.data('dropdown-hover-all') || false;

        // Mouseover
        dropdown.hover(function(){
            var notMobileMenu = $(navbarToggle).size() > 0 && $(navbarToggle).css('display') === 'none';
            if ((dropdownHoverAll == true || (dropdownHoverAll == false && notMobileMenu))) {
                dropdownToggle.trigger('click');
            }
        })
    });

    // For Carosel
    $('.carousel').carousel({
        interval: 2000
    })

    // For owlCarousel
    $(".product-wrapper").owlCarousel({
        items: 5,
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });

    // For Back to Top
    scroller.init();
});

// For Preloader
jQuery(window).load(function() {
    jQuery(".loader").fadeOut(), jQuery("#preloader").delay(450).fadeOut("slow"), jQuery("body").delay(450)
});
