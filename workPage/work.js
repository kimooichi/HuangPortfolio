function change1() {
    document.getElementById("CMVCCap").innerHTML = "UI DESIGN + FRONT-END";   
}
function revert1() {
    document.getElementById("CMVCCap").innerHTML = "2023 . CARLETON MEN'S VOLLEYBALL CLUB";   
}
function change2() {
    document.getElementById("BSCap").innerHTML = "UI DESIGN + FRONT-END + BRAND IDENTITY";   
}
function revert2() {
    document.getElementById("BSCap").innerHTML = "2022 . BERRY SOUP";   
}
function change3() {
    document.getElementById("AgriCap").innerHTML = "UI DESIGN + GRAPHIC DESIGN";   
}
function revert3() {
    document.getElementById("AgriCap").innerHTML = "2024 . AGRICULTURE AND FOOD MUSEUM";   
}
function change4() {
    document.getElementById("BlebleCap").innerHTML = "UI DESIGN + GRAPHIC DESIGN + BRAND IDENTITY";
}
function revert4() {
    document.getElementById("BlebleCap").innerHTML = "2024 . BLÉBLÉ CAFE";   
}
function change5() {
    document.getElementById("NRCanCap").innerHTML = "UI/UX DESIGN + WIREFRAMING + PROTOTYPING";
}
function revert5() {
    document.getElementById("NRCanCap").innerHTML = "2024 . NATURAL RESOURCES CANADA";   
}

$(window).on('load', function () {
    $('#loading').hide();
  }) 

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