(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  $(document).ready(function() {
    $('#owl-team').owlCarousel({
      center: false,
      items: 3,
      loop: true,
      stagePadding: 0,
      margin: 40,
      autoplay: false,
      pauseOnHover: true,
      dots:false,
      nav: true,
      navText : ["<i class='fa fa-arrow-left fa-3x' aria-hidden='true'></i>","<i class='fa fa-arrow-right fa-3x' aria-hidden='true'></i>"],
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
      }
    });
  });


  $(document).ready(function() {
    $('#owl-ad').owlCarousel({
      center: false,
      items: 3,
      loop: true,
      stagePadding: 0,
      margin: 40,
      autoplay: false,
      pauseOnHover: true,
      dots:false,
      nav: true,
      navText : ["<i class='fa fa-arrow-left fa-3x' aria-hidden='true'></i>","<i class='fa fa-arrow-right fa-3x' aria-hidden='true'></i>"],
      responsive:{
        0:{
            items:1
        }
      }
    });
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
