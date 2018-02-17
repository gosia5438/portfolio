'use strict';

$(function () {

	if($(window).scrollTop() >= 500){
		$('#main-nav').addClass('scroll');
	}



//    $('#carouselExampleControls').carousel({
//        interval: 1600,
//    });
    	$(window).scroll(function(){
		if($(window).scrollTop() >= 500 ) {
			$('#main-nav').addClass('scroll');
			$('#main-nav').css({'transition':'all 0.3s'})
		} else {
			$('#main-nav').removeClass('scroll');
		}
	});

    //nawigacja

    $("a[href^='#']").on('click', function () {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 74
        }, 500);
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
    $('.css').animate({width:'75%'},2000);
    $('.js').animate({width:'20%'},2000);
    $('.git').animate({width:'50%'},2000);
    $('.sass').animate({width:'65%'},2000);
    $('.rwd').animate({width:'70%'},2000);
    $('.wp').animate({width:'20%'},2000);
    $('.ps').animate({width:'75%'},2000);
    $('.id').animate({width:'40%'},2000);
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
});