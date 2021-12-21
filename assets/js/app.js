
  
//  up button toggle //
  let screenHeight = $(window).height();

  $(window).scroll(function(){
    let currentPos = $(this).scrollTop();
    console.log(currentPos)

    if(currentPos>=500){
      $(".next-page").removeClass("d-none");
      $(".next-page").addClass("d-block");
    }
    else if(currentPos <= 500){
        $(".next-page").addClass("d-none");
      $(".next-page").removeClass("d-block");
    }
  })


//   animation //
  new WOW().init();


//   navigation mobile icon //
  $(".navbar-toggler").click(function(){
    let result = $(".navbar-collapse").hasClass("show");
  
    if(result){
      $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
    }
    else{
      $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
    }
  })

//   loader //
  $(window).on("load",function(){
    $(".loader-container").fadeOut(500,function(){
      $(this).remove();
    });
  })