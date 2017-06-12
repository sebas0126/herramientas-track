(function() {
  $(document).ready(function() {
    var path, target;
    $('.background').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      adaptiveHeight: true
    });
    path = window.location.pathname.split('/').pop();
    if (path === '') {
      path = 'index.html';
    }
    target = $('.nav li a[href="' + path + '"]');
    return target.addClass('active');
  });

}).call(this);

