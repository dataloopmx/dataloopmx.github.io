$(function () {
  //  open and close nav
  $('#navbar-toggle').click(function () {
    $('nav ul').slideToggle();
  });

  // hamburger toggle
  $('#navbar-toggle').on('click', function () {
    this.classList.toggle('active');
  });
});
