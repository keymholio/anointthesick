$(function() {
  var previousScroll = 0;
  var d = 0;
  var s = 0;
  var isMobile = window.matchMedia("only screen and (max-width: 760px)")
    .matches;

  $(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    var amount = isMobile ? 0.1 : 0.3;

    // parallax script
    if (currentScroll > previousScroll) {
      d = s - amount;
      $(".parallax").css("background-position-y", d);
    } else {
      d = s + amount;
      $(".parallax").css("background-position-y", d);
    }
    previousScroll = currentScroll;
    s = d;

    // top nav scroll down
    if (currentScroll > 50) {
      $("nav").css("top", 0);
    } else {
      $("nav").css("top", "-100px");
    }

    // fade out logo in hero on scroll
    $(".logo-hero").css("opacity", 1 - $(window).scrollTop() / 150);
  });

  $(".bio-link").click(function() {
    $("body").scrollTo("#bio", 800);
  });

  $(".releases-link").click(function() {
    $("body").scrollTo("#releases", 800);
  });

  $(".contact-link").click(function() {
    $("body").scrollTo(".contact", 800);
  });
});
