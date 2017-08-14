import $ from 'jquery';

$('#icon').on('click', function() {
  if($('.primary-nav').hasClass('visibleMenu')) {
    $('.primary-nav').removeClass('visibleMenu');
    $('.primary-nav li').css({
                            "display": "none",
                            "float": "left",
                            "margin-right": "25px"
                         });
    $('.primary-nav li a').css({
                           "display": "block"
                         });
  } else {
    $('.primary-nav').addClass('visibleMenu');
    $('.primary-nav li').css({
                            "float": "none",
                            "margin-right": "100px",
                            "display": "inline"
                         });
    $('.primary-nav li a').css({
                            "display": "block"
                          });
  }
});
