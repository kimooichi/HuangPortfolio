function change4() {
    document.getElementById("SomCap").innerHTML = "INFOGRAPHIC";   
}
function revert4() {
    document.getElementById("SomCap").innerHTML = "2024 . SOMERSET WARD";   
}
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
function change3() {
    document.getElementById("ChefRCap").innerHTML = "MINI DOCUMENTARY + FILM";   
}
function revert3() {
    document.getElementById("ChefRCap").innerHTML = "2023 . CHEF RIC";   
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