$(document).ready(function(){
  // $('#Arretium-Zoom-Level3').width($(window).width());
  // $('#Arretium-Zoom-Level3').height($(window).height());

  $('.dot').css('top', '540px');
  var currentWidth = $(window).width();
    var left = 960 - (2499 - currentWidth)/2;
    $('.dot').css('left', left);

  $(window).resize(function(){
    var currentWidth = $(window).width();
    var left = 960 - (2499 - currentWidth)/2;
    $('.dot').css('left', left);
  });

  var flag = 0;
  $('.dot').click(function(){
    if(flag == 0){
    $('.popup').css('display','block');
    flag = 1;
    }else{
    $('.popup').css('display','none');
    flag = 0;
    }
  });
  $('.popup span').click(function(){
    $('.popup').css('display','none');
    flag = 0;
  });
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
// function showNormal() {
//   window.location.href = "../Normal";
// }

function showZoom2() {
  window.location.href = "../Arretium";
}

function showItems() {

}