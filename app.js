function darkmod (){
  $("body").toggleClass("dark")
  if ($("body").hasClass("dark")){
    $(".darkbutton").css("background-color","#FFFFFF");
    $("header").css("background-color","rgb(18, 66, 92)");
    $("#moon").css({display:"block"});
    $("#sun").css({display:"none"});
    $("section").css("background-color","rgb(50, 98, 123)");


  }
  else {
    $(".darkbutton").css("background-color","#1e1b1b");
    $("header").css("background-color","rgb(11, 113, 168)");
    $("#moon").css({display:"none"});
    $("#sun").css({display:"block"});
    $("section").css("background-color","#FFFFFF");


  }
};
function slide(){
  $("header").toggleClass("left")
  if ($("header").hasClass("left")){
    $(".slider").html(">>");
    $("main").animate({margin:"40px 0 0 -47%"});
    
  }
  else {
    $(".slider").html("<<");
    $("main").animate({margin:"0"});
  }

  $(document).ready(function() {
    checkScreenSize();
  
    $(window).resize(function() {
      checkScreenSize();
    });
  });
  
  function checkScreenSize() {
    if ($(window).width() < 750) {
      $("header").removeClass("left");
      $("main").css({position:"static",margin:"0 10px"});
    }
  }
};




  
  
