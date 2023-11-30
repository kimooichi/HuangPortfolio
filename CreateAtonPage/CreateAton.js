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