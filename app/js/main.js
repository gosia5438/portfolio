'use strict';

$(function () {

    
    // navigation - smooth scroll 

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;

        // scroll and show hash
        $('html, body').animate({
            'scrollTop': $(target).offset().top
        }, 700, 'swing', function () {
            window.location.hash = target;
        });
    });


    // navigation - change color of the navbar after scroll

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 700) {
            $('#main-nav').addClass('scroll');
            $('#main-nav').css({
                'transition': 'all 0.3s'
            })
        } else {
            $('#main-nav').removeClass('scroll');
        }
    });


    // timeline

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    var items = $(".timeline li");

    function showExperience() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }
    
    //skills 
    var progress = $(".progress");

    function showSkills() {
        for (var i = 0; i < progress.length; i++) {
            if (isElementInViewport(progress[i])) {
                $(this).addClass("in-view");
                progressWidth();
            }
        }
    }
    
    // listen for events
    $(window).bind('load resize scroll', showExperience);
    $(window).bind('load resize scroll', showSkills);


    //progress bar
    function progressWidth() {
        $('.html').animate({
            width: '80%'
        }, 2000);
        $('.css').animate({
            width: '70%'
        }, 2000);
        $('.js').animate({
            width: '20%'
        }, 2000);
        $('.git').animate({
            width: '50%'
        }, 2000);
        $('.sass').animate({
            width: '65%'
        }, 2000);
        $('.rwd').animate({
            width: '70%'
        }, 2000);
        $('.wp').animate({
            width: '20%'
        }, 2000);
        $('.ps').animate({
            width: '75%'
        }, 2000);
        $('.id').animate({
            width: '40%'
        }, 2000);
    }



    //    portfolio gallery

    $(".graphic-box[data-orientation!='vertical']").twentytwenty({
        default_offset_pct: 0.5
    });

    
    
    //    scroll to top

     $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.scroll-top').fadeIn(500);
        } else {
            $('.scroll-top').fadeOut(500);
        }
    });


});