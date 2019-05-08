$(document).ready(function(){
  $('#Arretium-Zoom-Level3').width($(window).width());
  $('#Arretium-Zoom-Level3').height($(window).height());

  var i = setInterval(function(){
    // do your thing
    $('#esp').click();
  }, 1000);
});

var leftPre, topPre;

$(document).on('click', '#esp', function(){
  
  var matrix = $(".leaflet-map-pane").css("transform");
  var left = parseInt($(".leaflet-map-pane").css("transform").split(',')[4]);
  var top = parseInt($(".leaflet-map-pane").css("transform").split(',')[5].split(')')[0]);
  console.log(left+" "+top);
  if(leftPre == left) {
    console.log("came");
    return;
  }
  var dotTop = parseInt($("#dot").css('top')) - top/20;
  var dotLeft = parseInt($("#dot").css('left')) - left/25;

  if(dotTop > 200) dotTop = 200;
  if(dotTop < 0) dotTop = 0;
  if(dotLeft >250) dotLeft = 250;
  if(dotLeft < 0) dotLeft = 0;

  $("#dot").css('top',  dotTop);
  $("#dot").css('left', dotLeft);

  leftPre = left;
  topPre = top;
  
  console.log(leftPre+" "+topPre);
  console.log(dotTop+" "+dotLeft);

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