import $ from 'jquery';

// jQuery Smooth Scrolling Feature
// Select all links with hashes
$('a[href*="#"]').click(function(event) {
  // Links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    // Find element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Prevent default if smooth-scroll will happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Change focus
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if target focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Add tabindex for non-focusable elems
          $target.focus(); // Re-set focus
        };
      });
    }
  }
});
