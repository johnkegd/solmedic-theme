(function ($) {
  "use strict";

	$(document).on('machicShopPageInit', function () {
		machicThemeModule.sidebarfilter();
	});

	machicThemeModule.sidebarfilter = function() {
      var sidebar = $( '.filtered-sidebar' );
      var button = $( '.filter-button' );
      var siteOverlay = $( '.site-overlay' );
      var close = $( '.close-sidebar' );

      var tl = gsap.timeline( { paused: true, reversed: true } );
      tl.set( sidebar, {
        autoAlpha: 1
      }).to( sidebar, .5, {
        x:0,
				ease: 'power4.inOut'
      }).to( siteOverlay, .5, {
        autoAlpha: 1,
        ease: 'power4.inOut'
      }, "-=.5");

      button.on( 'click', function(e) {
				e.preventDefault();
        siteOverlay.addClass( 'active' );
				tl.reversed() ? tl.play() : tl.reverse();
			});

      close.on( 'click', function(e) {
				e.preventDefault();
				tl.reverse();
        setTimeout( function() {
          siteOverlay.removeClass( 'active' );
        }, 1000);
			});
	}
	
	$(document).ready(function() {
		machicThemeModule.sidebarfilter();
	});

})(jQuery);
