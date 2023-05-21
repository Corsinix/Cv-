function darkmod (){
    $("body").toggleClass("dark")
    if ($("body").hasClass("dark")){
      $("#moon").css({display:"block"})
      $(".darkbutton").css("background-color","#FFFFFF")
      $("#sun").css({display:"none"})
      $(".pdp").on("mouseenter",function(){
        $(".pdp").attr("src","https://media.tenor.com/1y8zDc-ll-EAAAAC/3d-saul-saul-goodman.gif")
      })
      $(".pdp").on("mouseleave",function(){
        $(".pdp").attr("src","pdp.jpg")
      })
    }
    else {
      $("#moon").css({display:"none"})
      $(".darkbutton").css("background-color","#1e1b1b")
      $("#sun").css({display:"block"})
      $(".pdp").off("mouseenter")
      $(".pdp").off("mouseleave")
    }
  };


  
  