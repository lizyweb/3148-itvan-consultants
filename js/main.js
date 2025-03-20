document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // Sticky Navbar
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 300) {
  //       $('.sticky-top').addClass('shadow-sm').css('top', '0px');
  //   } else {
  //       $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
  //   }
  // });

  var siteSticky = function() {
    $(".js-sticky-header").sticky({topSpacing:0});
  };
  siteSticky();

  var siteScroll = function() {

      

    $(window).scroll(function() {

      var st = $(this).scrollTop();

      if (st > 100) {
        $('.js-sticky-header').addClass('shrink');
      } else {
        $('.js-sticky-header').removeClass('shrink');
      }

    }) 

  };
  siteScroll();
  
  // Spinner
  var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
  };
  spinner();

  (function ($) {
    
    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#robertoNav').classyNav();
    }

    })(jQuery);

});

