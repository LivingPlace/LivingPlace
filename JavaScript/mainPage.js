$(document).ready(function(){
    $("#signup").click(function(){
      $("#signUpForm").slideDown();
      $(".loginForm").hide();
    });

    $("#fyp").click(function(){
      $(".loginForm").slideDown();
      $("#signUpForm").hide();
    });
    
  });

  
