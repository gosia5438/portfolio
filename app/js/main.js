'use strict';

$(function () {

    $(window).scroll(function () {
        var win = $(window);
        if (win.scrollTop() >= 500) {
            $('#main-nav').addClass('scroll');
        } else {
            $('#main-nav').removeClass('scroll');
        }
    });



    $('#carouselExampleControls').carousel({
        interval: 1600,
    });

    //nawigacja

    $("a[href^='#']").on('click', function () {
        var elementTarget = $(this.hash);
        $('html, body').animate({
            scrollTop: elementTarget.offset().top - 74
        }, 600);
    });
    

    
    
    
    
    // timeline
    
    (function() {


  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();
  
    
    
    //progress bar
    
    $('.html').animate({width:'85%'},2000);
    
    
    
    
    
    
    
    
    
    
    
    
});