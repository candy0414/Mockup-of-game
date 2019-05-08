$(document).ready(function(){
  $('#Arretium-Zoom-Level3').width($(window).width());
  $('#Arretium-Zoom-Level3').height($(window).height());
});

function showSub() {
  $('#downtriangle').css('display', 'none');
  $('#uptriangle').css('display', 'block');
  $('#map-control').css('display', 'block');
}

function closeSub() {
  $('#downtriangle').css('display', 'block');
  $('#uptriangle').css('display', 'none');
  $('#map-control').css('display', 'none');
}

function showEmpire() {
  window.location.href= "../Empire";
}

function showProvince() {
  window.location.href = "../Province";

}
function showCity() {
  window.location.href = "../Normal";

}
function showTrade() {
  window.location.href = "../Trade";
}
function showNormal() {
  window.location.href = "../Normal";
}