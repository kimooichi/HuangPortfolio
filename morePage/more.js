function change1() {
    document.getElementById("CMVCCap").innerHTML = "SOCIAL MEDIA CONTENT";   
}
function revert1() {
    document.getElementById("CMVCCap").innerHTML = "2023 . CARLETON FILM SOCIETY";   
}
function change2() {
    document.getElementById("BSCap").innerHTML = "FIRST-PLACE CREATE-ATHON + ANIMATION";   
}
function revert2() {
    document.getElementById("BSCap").innerHTML = "2022 . FIRST DAY OF SCHOOL";   
}

$(window).on('load', function () {
    $('#loading').hide();
  }) 