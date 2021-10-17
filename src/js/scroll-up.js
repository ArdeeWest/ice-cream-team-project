$(document).ready(function () {
  function checkPosition() {
    if ($(this).scrollTop() > 1600) {
      $('.scroll-up').fadeIn();
    } else {
      $('.scroll-up').fadeOut();
    }
  }
  // Show or hide the sticky footer button
  $(window).scroll(checkPosition);

  // Animate the scroll to top
  $('.go-top').click(function (event) {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, 1200);
  });

  checkPosition();
});
