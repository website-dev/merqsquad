/*global document, window, alert, console, location, modal, require, $*/
$(document).ready(function () {


    /* For the sticky navigation */
    $('.js--section-mission').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    /* Scroll on buttons */
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-donations').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-servers').offset().top
        }, 1000);
    });


    /* Navigation scroll */
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Animations on Scroll*/
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
     $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animated rubberBand');
    }, {
        offset: '50%'
    });

    /* MOBILE NAVIGATION */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');



        nav.slideToggle(200);
        
        if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close-circle-outline');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close-circle-outline');
        }
    });

    $('.modal-overlay').hide();

    $('.open-modal').css('cursor', 'pointer').click(function () {

        var file = $(this).attr('data');

        $(".modal-content").load(file + ".html");

        $('.modal-overlay').fadeIn();

    });

    $('.close-modal').css('cursor', 'pointer').click(function () {

        $('.modal-overlay').fadeOut();

    });
    
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



});
