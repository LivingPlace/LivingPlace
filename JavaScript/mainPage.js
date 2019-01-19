$(document).ready(function(){
    $("#signup").click(function(){
      $("#signUpForm").slideDown("slow");
      $(".loginForm").hide();
    });

    
  });

  $(".started").click(function(){
    $(".loginForm").show();
    $("#signUpForm").hide();
  });