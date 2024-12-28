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

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navbar");
  
  hamburger.addEventListener("click", mobileMenu);
  
  function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  }

  const navLink = document.querySelectorAll(".navbtn a");

  navLink.forEach(n => n.addEventListener("click", closeMenu));
  
  function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  }