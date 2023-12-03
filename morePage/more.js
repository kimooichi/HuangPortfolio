function change1() {
    document.getElementById("CMVCCap").innerHTML = "SOCIAL MEDIA CONTENT + DESIGN";   
}
function revert1() {
    document.getElementById("CMVCCap").innerHTML = "2023 . CARLETON FILM SOCIETY";   
}
function change2() {
    document.getElementById("BSCap").innerHTML = "DIGITAL ILLUSTRATION + ANIMATION";   
}
function revert2() {
    document.getElementById("BSCap").innerHTML = "2022 . FIRST DAY OF SCHOOL";   
}

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