$(document).on('click', '.button', function(){
  console.log($(this).children('ul').height());
  if($(this).children('ul').height() > $(window).height()) {
    $(this).children('ul').height($(window).height() - 20);
    $(this).children('ul').addClass('overFlow');
  }
  console.log("POSITION");
  console.log($(this).position());
  var top = 0;
  top -= $(this).position().top;
  console.log("top"+top);
  $(this).children('ul').css('top', top);

  $(".buttontree").children('ul').css('visibility', 'hidden');
  $('.sub-button-tree').children('ul').css('visibility', 'hidden');
  $(".sub-button-tree").children('a').css('color','white');
  $(".buttontree").children('img:nth-child(1)').css('display', "block");
  $(".buttontree").children('img:nth-child(2)').css('display', "none");

  $(".button").children('ul').css('visibility', 'hidden');
  //HelpColumn
  $("#helpnormalStatus").css('display', 'block');
  $("#helpactiveStatus").css('display', 'none'); 
  $("#helpcolumn").css('display','none');
  //Advisors
  $("#advisorsnormalStatus").css('display', 'block');
  $("#advisorsactiveStatus").css('display', 'none'); 
  $("#advisorscolumn").css('display','none');
      // $('.sub-button').children('ul').css('visibility', 'hidden');
      // console.log($(this).children('img'));

  $(".button").children('img:nth-child(1)').css('display', "block");
  $(".button").children('img:nth-child(2)').css('display', "none");
  $(this).children('img:nth-child(1)').css('display', "none");
  $(this).children('img:nth-child(2)').css('display', "block");

  $(this).children('ul').css('visibility', 'visible');
  $(this).children('ul').css('left', '100%');
  $(this).children('ul').css('opacity', '1');
  $(this).children('ul').css('-webkit-transition', 'opacity .5s');
  $(this).children('ul').css('transition', 'opacity .5s;');
});

$(document).on('click', '.sub-button', function(){
 // console.log($(this));
  console.log($(this).position());
  var top = 0;
  top -= $(this).position().top;
  console.log("top"+top);
  $(this).children('ul').css('top', top);
  
  $('.sub-button').children('ul').css('visibility', 'hidden');
  $(".sub-button").children('a').css('color','white');
  $(this).children('a').css('color','yellow');

  $(this).children('ul').css('visibility', 'visible');
  console.log($(this).children('ul').css('visibility'));

  $(this).children('ul').css('left', '100%');
  $(this).children('ul').css('opacity', '1');
  $(this).children('ul').css('-webkit-transition', 'opacity .5s');
  $(this).children('ul').css('transition', 'opacity .5s;');
});

$(document).on('click', '.buttontree', function(){
  console.log($(this).children('ul').height());
  if($(this).children('ul').height() > $(window).height()) {
    $(this).children('ul').height($(window).height() - 20);
    $(this).children('ul').addClass('overFlow');
  }
  console.log("POSITION");
  console.log($(this).position());
  var top = 0;
  top -= $(this).position().top;
  console.log("top"+top);
  $(this).children('ul').css('top', top);

  $(".buttontree").children('ul').css('visibility', 'hidden');
  //HelpColumn
  $("#helpnormalStatus").css('display', 'block');
  $("#helpactiveStatus").css('display', 'none'); 
  $("#helpcolumn").css('display','none');
  //Advisors
  $("#advisorsnormalStatus").css('display', 'block');
  $("#advisorsactiveStatus").css('display', 'none'); 
  $("#advisorscolumn").css('display','none');
      // $('.sub-button').children('ul').css('visibility', 'hidden');
      // console.log($(this).children('img'));

  $(".buttontree").children('img:nth-child(1)').css('display', "block");
  $(".buttontree").children('img:nth-child(2)').css('display', "none");
  $(this).children('img:nth-child(1)').css('display', "none");
  $(this).children('img:nth-child(2)').css('display', "block");

  $(this).children('ul').css('visibility', 'visible');
  $(this).children('ul').css('left', '100%');
  $(this).children('ul').css('opacity', '1');
  $(this).children('ul').css('-webkit-transition', 'opacity .5s');
  $(this).children('ul').css('transition', 'opacity .5s;');
});

$(document).on('click', '.sub-button-tree', function(){
 // console.log($(this));
  console.log($(this).position());
  var top = 0;
  top -= $(this).position().top;
  console.log("top"+top);
  $(this).children('ul').css('top', top);
  
  $('.sub-button-tree').children('ul').css('visibility', 'hidden');
  $(".sub-button-tree").children('a').css('color','white');
  $(this).children('a').css('color','yellow');

  $(this).children('ul').css('visibility', 'visible');
  console.log($(this).children('ul').css('visibility'));

  $(this).children('ul').css('left', '100%');
  $(this).children('ul').css('opacity', '1');
  $(this).children('ul').css('-webkit-transition', 'opacity .5s');
  $(this).children('ul').css('transition', 'opacity .5s;');
});

//ColumnButton
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
    }
};
xhttp.open("GET", "../buttonColumn.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("buttonColumn")[0];
    var y = x.childElementCount;
    // console.log(y);
    var str = "";

    for(i = 1;i < y*2; i +=2) {
      var button = x.childNodes[i];
      var id = button.tagName;
      // console.log(id);
      
      str += "<li id='"+id+"' class='button'>";
      str += "<img src='../images/buttons/"+id+".png' style='width: 100px; height: 70px'><img src='../images/buttons/"+id+"X.png' style='width: 100px; height: 70px; display: none'>";
      str += "<ul>";

      var subButtons = button.getElementsByTagName("menuButtons")[0];
      // console.log(subButtons.childElementCount);
      for(j = 1;j < subButtons.childElementCount*2; j+=2){
        var subButton = subButtons.childNodes[j];
        var subButtonName = subButton.childNodes[0];
        // console.log(subButton);
        // console.log(subButtonName.nodeValue);

        str += "<li class='sub-button'><a href='#''>"+subButtonName.nodeValue+"</a>";

        if(subButton.childElementCount != 0) {
          // console.log(subButtonName);
          str += "<ul>";
          for(q = 1 ; q <= subButton.childElementCount; q++) {
            var subsubButton = subButton.childNodes[q];
            // console.log(subsubButton);
            var subsubButtonName = subsubButton.childNodes[0];
            // console.log(subsubButtonName);
            str += "<li class='sub-sub-button'><a href='#'>"+subsubButtonName.nodeValue+"</a></li>";
          }
          str += "</ul>";
          
        }
        str +="</li>"
      }
      str += "</ul></li>";
    }
    // console.log(str);
    $('#columncontent ul').append(str);
}

//Advisors
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunctionAdvisors(this);
    }
};
xhttp.open("GET", "../advisors.xml", true);
xhttp.send();

function myFunctionAdvisors(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("graphic")[1];
    var y = x.childNodes[0];
    // console.log(y.nodeValue);
    var str = '<img class="advisorsstatus" id="advisorsnormalStatus" src="../images/buttons/'+y.nodeValue+'" style="width: 100px; height: 70px">';
    str += '<img class="advisorsstatus" id="advisorsactiveStatus" src="../images/buttons/advisorsX.png" style="width: 100px; height: 70px; display:none">'
    $('#advisors').append(str);
    var controlButtons = xmlDoc.getElementsByTagName("menuButtons")[0];
    // console.log(controlButtons.childElementCount);
    for(i = 1; i < controlButtons.childElementCount*2; i+=2){
      // console.log(controlButtons.childNodes[i]);
      var controlButton = controlButtons.childNodes[i];
      var controlButtonName = controlButton.childNodes[0].nodeValue;
      // console.log(controlButtonName);
      var str = '<div class="helplist"><p style="">'+controlButtonName+'</p></div>';
      $('#advisorscolumn').append(str);
    }
}

//knowledgeTree
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunctionTree(this);
    }
};
xhttp.open("GET", "../knowledgeTree.xml", true);
xhttp.send();

function myFunctionTree(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("knowledgeTree")[0];
    var y = x.childElementCount;
    console.log(y);
    var str = "";

    var id = xmlDoc.getElementsByTagName("graphic")[0].childNodes[0].nodeValue;
    console.log(id);
    str += "<li id='"+id+"' class='buttontree'>";
    str += "<img src='../images/buttons/"+id+"' style='width: 100px; height: 70px'><img src='../images/buttons/knowledgeTreeX.png' style='width: 100px; height: 70px; display: none'>";
    str += "<ul>";
    for(i = 3;i < y*2; i +=2) {
      var button = x.childNodes[i];
      console.log(button.tagName);
      
      
      str +="<li class='sub-button-tree'><a href='#''>"+button.tagName+"</a>";
      var subsubButtons = button.getElementsByTagName("menuButtons")[0];
      console.log(subsubButtons.childElementCount);
      str += "<ul>";
      for(q = 1 ; q <= subsubButtons.childElementCount*2; q+=2) {
        var subsubButton = subsubButtons.childNodes[q];
        console.log(subsubButton);
        var subsubButtonName = subsubButton.childNodes[0];
        console.log(subsubButtonName);
        str += "<li class='sub-sub-button'><a href='#'>"+subsubButtonName.nodeValue+"</a></li>";
      }
      str += "</ul>";
      str +="</li>";  
    }
    str += "</ul></li>";
    // console.log(str);
    $('#treecontent ul').append(str);
}

//MasterGameControlButton
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunctionMasterGame(this);
    }
};
xhttp.open("GET", "../masterGameControl.xml", true);
xhttp.send();

function myFunctionMasterGame(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("graphic")[1];
    var y = x.childNodes[0];
    // console.log(y.nodeValue);
    var str = '<img class="status" id="normalStatus" src="../images/buttons/'+y.nodeValue+'" style="width: 100px; height: 70px" data-toggle="modal" data-target="#masterModal">';
    str += '<img class="status" id="activeStatus" src="../images/buttons/masterGameControlX.png" style="width: 100px; height: 70px; display:none">'
    $('#masterGameControlButton').append(str);
    // $('#masterGameControl>img').css('src', './images/buttons/'+y);
    var controlButtons = xmlDoc.getElementsByTagName("menuButtons")[0];
    // console.log(controlButtons.childElementCount);
    for(i = 1; i < controlButtons.childElementCount*2; i+=2){
      // console.log(controlButtons.childNodes[i]);
      var controlButton = controlButtons.childNodes[i];
      var controlButtonName = controlButton.childNodes[0].nodeValue;
      // console.log(controlButtonName);
      var str = '<div style="background-image: url(../images/buttons/longButton.jpg); height: 50px;background-repeat: no-repeat;background-position:center; background-size: 300px 50px;"><h2 style="padding-top:8px">'+controlButtonName+'</h2></div>';
      $('#masterbody').append(str);
    }
}

//Help
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunctionhelp(this);
    }
};
xhttp.open("GET", "../help.xml", true);
xhttp.send();

function myFunctionhelp(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("graphic")[1];
    var y = x.childNodes[0];
    // console.log(y.nodeValue);
    var str = '<img class="helpstatus" id="helpnormalStatus" src="../images/buttons/'+y.nodeValue+'" style="width: 100px; height: 70px" data-toggle="modal" data-target="#helpModal">';
    str += '<img class="helpstatus" id="helpactiveStatus" src="../images/buttons/helpX.png" style="width: 100px; height: 70px; display:none">'
    $('#help').append(str);
    var controlButtons = xmlDoc.getElementsByTagName("menuButtons")[0];
    // console.log(controlButtons.childElementCount);
    for(i = 1; i < controlButtons.childElementCount*2; i+=2){
      // console.log(controlButtons.childNodes[i]);
      var controlButton = controlButtons.childNodes[i];
      var controlButtonName = controlButton.childNodes[0].nodeValue;
      // console.log(controlButtonName);
      var str = '<div class="helplist"><p style="">'+controlButtonName+'</p></div>';
      $('#helpcolumn').append(str);
    }
}
//Master
$(document).on('click', '.status', function(){
  var id = $(this).attr('id');
  console.log(id);
  $(this).css('display', 'none');
  if(id=='normalStatus') {
    $('#activeStatus').css('display', 'block');
  }else{
    $('#normalStatus').css('display', 'block');
  }
  $("#helpnormalStatus").css('display', 'block');
  $("#helpactiveStatus").css('display', 'none'); 
  $("#helpcolumn").css('display','none');
  $("#advisorsnormalStatus").css('display', 'block');
  $("#advisorsactiveStatus").css('display', 'none'); 
  $("#advisorscolumn").css('display','none');

  $(".button").children('ul').css('visibility', 'hidden');
  $('.sub-button').children('ul').css('visibility', 'hidden');
  $(".sub-button").children('a').css('color','white');
  $(".button").children('img:nth-child(1)').css('display', "block");
  $(".button").children('img:nth-child(2)').css('display', "none");

  $(".buttontree").children('ul').css('visibility', 'hidden');
  $('.sub-button-tree').children('ul').css('visibility', 'hidden');
  $(".sub-button-tree").children('a').css('color','white');
  $(".buttontree").children('img:nth-child(1)').css('display', "block");
  $(".buttontree").children('img:nth-child(2)').css('display', "none");
});
//help
$(document).on('click', '.helpstatus', function(){
  var id = $(this).attr('id');
  console.log(id);
  $(this).css('display', 'none');
  if(id=='helpnormalStatus') {
    $('#helpactiveStatus').css('display', 'block');
    $('#helpcolumn').css('display', 'block');
  }else{
    $('#helpnormalStatus').css('display', 'block');
    $('#helpcolumn').css('display', 'none');

  }
  $("#advisorsnormalStatus").css('display', 'block');
  $("#advisorsactiveStatus").css('display', 'none'); 
  $("#advisorscolumn").css('display','none');
  $(".button").children('ul').css('visibility', 'hidden');
  $('.sub-button').children('ul').css('visibility', 'hidden');
  $(".sub-button").children('a').css('color','white');
  $(".button").children('img:nth-child(1)').css('display', "block");
  $(".button").children('img:nth-child(2)').css('display', "none");

  $(".buttontree").children('ul').css('visibility', 'hidden');
  $('.sub-button-tree').children('ul').css('visibility', 'hidden');
  $(".sub-button-tree").children('a').css('color','white');
  $(".buttontree").children('img:nth-child(1)').css('display', "block");
  $(".buttontree").children('img:nth-child(2)').css('display', "none");
});
//Advisors
$(document).on('click', '.advisorsstatus', function(){
  var id = $(this).attr('id');
  // console.log(id);
  $(this).css('display', 'none');
  if(id=='advisorsnormalStatus') {
    $('#advisorsactiveStatus').css('display', 'block');
    $('#advisorscolumn').css('display', 'block');
  }else{
    $('#advisorsnormalStatus').css('display', 'block');
    $('#advisorscolumn').css('display', 'none');

  }
  $("#helpnormalStatus").css('display', 'block');
  $("#helpactiveStatus").css('display', 'none'); 
  $("#helpcolumn").css('display','none');
  $(".button").children('ul').css('visibility', 'hidden');
  $('.sub-button').children('ul').css('visibility', 'hidden');
  $(".sub-button").children('a').css('color','white');
  $(".button").children('img:nth-child(1)').css('display', "block");
  $(".button").children('img:nth-child(2)').css('display', "none");

  $(".buttontree").children('ul').css('visibility', 'hidden');
  $('.sub-button-tree').children('ul').css('visibility', 'hidden');
  $(".sub-button-tree").children('a').css('color','white');
  $(".buttontree").children('img:nth-child(1)').css('display', "block");
  $(".buttontree").children('img:nth-child(2)').css('display', "none");
});

//Pause and Play
var pause = 0;
var play = 1;

$(document).ready(function(){
  $('#pause').click(function(){
    if(pause == 0) {
      $('#pauseactive').css('display', 'block');
      $('#pausenormal').css('display', 'none');
      $('#playnormal').css('display', 'block');
      $('#playactive').css('display', 'none');

      $('#speedUpactive').css('display', 'none');
      $('#speedUpnormal').css('display', 'block');
      $('#speedDownactive').css('display', 'none');
      $('#speedDownnormal').css('display', 'block');
      pause = 1;
      play = 0;
    }else{
    }
  });
  $('#play').click(function(){
    if(play == 0) {
      $('#playactive').css('display', 'block');
      $('#playnormal').css('display', 'none');
      $('#pausenormal').css('display', 'block');
      $('#pauseactive').css('display', 'none');
      pause = 0;
      play  = 1;
    }
  });
});

//Speed
$(document).ready(function(){
  $('#speedUp').click(function(){
    if(play == 1) {
      $('#speedUpactive').css('display', 'block');
      $('#speedUpnormal').css('display', 'none');
      $('#speedDownactive').css('display', 'none');
      $('#speedDownnormal').css('display', 'block');
    }
  });
  $('#speedDown').click(function(){
    if(play == 1) {
      $('#speedDownactive').css('display', 'block');
      $('#speedDownnormal').css('display', 'none');
      $('#speedUpactive').css('display', 'none');
      $('#speedUpnormal').css('display', 'block');
    }
  });
});
window.addEventListener('click', function(e){   
  if (document.getElementById('columnButton').contains(e.target) || document.getElementById('tree').contains(e.target) || document.getElementById('sub-window').contains(e.target) || document.getElementById('normalStatus').contains(e.target) || document.getElementById('activeStatus').contains(e.target) || document.getElementById('helpnormalStatus').contains(e.target) || document.getElementById('helpactiveStatus').contains(e.target) || document.getElementById('advisorsnormalStatus').contains(e.target) || document.getElementById('advisorsactiveStatus').contains(e.target)){
    // Clicked in box
  } else{
      $(".button").children('ul').css('visibility', 'hidden');
      $('.sub-button').children('ul').css('visibility', 'hidden');
      $(".sub-button").children('a').css('color','white');
      $(".button").children('img:nth-child(1)').css('display', "block");
      $(".button").children('img:nth-child(2)').css('display', "none");

      $(".buttontree").children('ul').css('visibility', 'hidden');
      $('.sub-button-tree').children('ul').css('visibility', 'hidden');
      $(".sub-button-tree").children('a').css('color','white');
      $(".buttontree").children('img:nth-child(1)').css('display', "block");
      $(".buttontree").children('img:nth-child(2)').css('display', "none");

      $("#normalStatus").css('display', 'block');
      $("#activeStatus").css('display', 'none');  
      $("#helpnormalStatus").css('display', 'block');
      $("#helpactiveStatus").css('display', 'none'); 
      $("#helpcolumn").css('display','none');
      $("#advisorsnormalStatus").css('display', 'block');
      $("#advisorsactiveStatus").css('display', 'none'); 
      $("#advisorscolumn").css('display','none');
  }
});

$(document).ready(function(){
  $(window).resize(function(){
    $('.title').css('left', $(window).width()/2-125);
  });
});