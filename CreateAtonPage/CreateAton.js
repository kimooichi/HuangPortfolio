$(window).on('load', function () {
    $('#loading').hide();
  }) 

  var btn = $('#topBtn');

  $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
      btn.addClass('show');
      } else {
          btn.removeClass('show');
      }
  });

  btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
  });

$(window).on('load', function () {
    $('#loading').hide();
  }) 

  var video = document.getElementById("myVideo");

  video.addEventListener("click", function() {
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
  });