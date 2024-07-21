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
    document.getElementById("AgriCap").innerHTML = "2024 . CANADA AGRICULTURE AND FOOD MUSEUM";   
}

$(window).on('load', function () {
    $('#loading').hide();
  }) 