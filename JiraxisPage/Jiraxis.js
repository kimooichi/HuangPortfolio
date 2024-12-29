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
  
const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".navbar");
        const body = document.body;
        
        // Create and append an overlay element
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        body.appendChild(overlay);
        
        // Add click event to toggle the mobile menu
        hamburger.addEventListener("click", mobileMenu);
        
        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            overlay.classList.toggle("active");
        
            // Disable scrolling when menu is active
            if (hamburger.classList.contains("active")) {
                body.style.overflow = "hidden";
            } else {
                body.style.overflow = ""; // Restore scrolling
            }
        }
        
        // Close menu and overlay when a navigation link is clicked
        const navLink = document.querySelectorAll(".navbtn a");
        
        navLink.forEach(n => n.addEventListener("click", closeMenu));
        
        overlay.addEventListener("click", closeMenu); // Close the menu when clicking on the overlay
        
        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            overlay.classList.remove("active");
            body.style.overflow = ""; // Restore scrolling
        }