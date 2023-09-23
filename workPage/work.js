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

$(window).on('load', function () {
    $('#loading').hide();
  }) 