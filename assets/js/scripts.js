$( document ).ready(function() {
    "use strict";

    //For Navigation Hover
    $(".nav a").hover(function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

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
    $('#eShopCarousel.carousel').carousel({
        interval: 2000
    });

    $('a[data-slide="prev"]').click(function() {
        $('#eShopCarousel').carousel('prev');
    });

    $('a[data-slide="next"]').click(function() {
        $('#eShopCarousel').carousel('next');
    });

    // For TAB
    // initialize tab function
    $('.nav-tabs a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // Wow animation
    new WOW().init();

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
    //--------Scroll Top---------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll_top').fadeIn();
            $('.scroll_top').removeClass('not_visible');
        } else {
            $('.scroll_top').fadeOut();
        }
    });
    $('.scroll_top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // For Preloader
    $(window).load(function() {
        $(".loader").fadeOut(), jQuery("#preloader").delay(450).fadeOut("slow"), jQuery("body").delay(450)
    });
});


