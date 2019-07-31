// Fade out logo on scroll
$(window).scroll(function() {
  $(".logo-hero").css("opacity", 1 - $(window).scrollTop() / 150);
});

$(function() {
  var previousScroll = 0;
  var d = 0;
  var s = 0;

  $(window).scroll(function() {
    var currentScroll = $(this).scrollTop();

    // parallax script
    if (currentScroll > previousScroll) {
      d = s - 0.5;
      $(".parallax").css("background-position-y", d);
    } else {
      d = s + 0.5;
      $(".parallax").css("background-position-y", d);
    }
    previousScroll = currentScroll;
    s = d;

    // top nav scroll down
    console.log(currentScroll);
    if (currentScroll > 20) {
      $("nav").css("top", 0);
    } else {
      $("nav").css("top", "-100px");
    }
  });
});
