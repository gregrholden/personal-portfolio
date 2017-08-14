import $ from 'jquery';

// Reset navbar when viewport is resized
$(window).on("load, resize", function viewUpdate() {
  var viewportWidth = $(window).width();
  if (viewportWidth < 768) {
    $('.primary-nav').removeClass('visibleMenu');
    $('.primary-nav li').css({
                          "display": "none",
                          "margin-right": "25px"
                        });
    $('.primary-nav #icon').css({
                              "position": "absolute",
                              "right": "0",
                              "font-size": "1.25rem",
                              "display": "block",
                              "margin-right": "25px"
                            });
  } else if (viewportWidth > 767) {
    $('.primary-nav').removeClass('visibleMenu');
    $('.primary-nav li').css({
                          "display": "inline",
                          "float": "left",
                          "margin-right": "25px"
                        });
    $('.primary-nav li a').css("display", "block");
    $('.primary-nav #icon').css("display", "none");
  }
});
