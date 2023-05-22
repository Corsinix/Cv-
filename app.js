function darkmod (){
  $("body").toggleClass("dark")
  if ($("body").hasClass("dark")){
    $(".darkbutton").css("background-color","#FFFFFF");
    $("header").css("background-color","rgb(18, 66, 92)");
    $("#moon").css({display:"block"});
    $("#sun").css({display:"none"});
    $("section").css("background-color","rgb(50, 98, 123)");


    $(".pdp").on("mouseenter",function(){
      $(".pdp").attr("src","https://media.tenor.com/1y8zDc-ll-EAAAAC/3d-saul-saul-goodman.gif")
    });
    $(".pdp").on("mouseleave",function(){
      $(".pdp").attr("src","pdp.jpg")
    });
  }
  else {
    $(".darkbutton").css("background-color","#1e1b1b");
    $("header").css("background-color","rgb(11, 113, 168)");
    $("#moon").css({display:"none"});
    $("#sun").css({display:"block"});
    $("section").css("background-color","#FFFFFF");


    $(".pdp").off("mouseenter");
    $(".pdp").off("mouseleave");
  }
};
function slide(){
  $("header").toggleClass("left")
  if ($("header").hasClass("left")){
    $(".slider").html(">>");
    $("main").animate({position:"static",margin:"40px 0 0 -450px"});
    
  }
  else {
    $(".slider").html("<<");
    $("main").animate({position:"absolute",margin:"0"});
  }

  $(document).ready(function() {
    checkScreenSize();
  
    $(window).resize(function() {
      checkScreenSize();
    });
  });
  
  function checkScreenSize() {
    if ($(window).width() < 750) {
      $("main").css({position:"static",margin:"0 10px"});
    }
  }
};




  
  