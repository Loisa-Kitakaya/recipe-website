$(document).ready(function() {
  //Business logic
  function check(form) /*function to check userid & password*/ {
	  /*the following code checkes whether the entered userid and password are matching*/
	  if (form.username.value === "admin" && form.password.value === "admin") {
	    window.open('../home.html') /*opens the target page while Id & password matches*/
	  } else {
	    alert("Kindly provide the correct username or password") /*displays error message*/
	  }
  }
  
  //Checks whether user has provided credentials
  function memloginvalidate()
{
   if(document.form1.username.value == "")
     {
        alert("Please Enter Username");
        document.form1.username.focus();
        return false;
     }
   if(document.form1.password.value == "")
     {
        alert("Please Enter Password");
        document.form1.password.focus();
        return false;
     }
   }

  //UI logic
  //display in grid one
  $(".recipe-one").click(function() {
    $(".recipe-two-details").hide();
    $(".recipe-three-details").hide();
    $(".recipe-four-details").hide();
    $(".recipe-one-details").slideToggle();
  });
  $(".recipe-two").click(function() {
    $(".recipe-one-details").hide();
    $(".recipe-three-details").hide();
    $(".recipe-four-details").hide();
    $(".recipe-two-details").slideToggle();
  });
  $(".recipe-three").click(function() {
    $(".recipe-two-details").hide();
    $(".recipe-one-details").hide();
    $(".recipe-four-details").hide();
    $(".recipe-three-details").slideToggle();
  });
  $(".recipe-four").click(function() {
    $(".recipe-two-details").hide();
    $(".recipe-three-details").hide();
    $(".recipe-one-details").hide();
    $(".recipe-four-details").slideToggle();
  });
  //display in grid two
  $(".recipe-five").click(function() {
    $(".recipe-six-details").hide();
    $(".recipe-seven-details").hide();
    $(".recipe-eight-details").hide();
    $(".recipe-five-details").slideToggle();
  });
  $(".recipe-six").click(function() {
    $(".recipe-five-details").hide();
    $(".recipe-seven-details").hide();
    $(".recipe-eight-details").hide();
    $(".recipe-six-details").slideToggle();
  });
  $(".recipe-seven").click(function() {
    $(".recipe-six-details").hide();
    $(".recipe-seven-details").hide();
    $(".recipe-eight-details").hide();
    $(".recipe-seven-details").slideToggle();
  });
  $(".recipe-four").click(function() {
    $(".recipe-two-details").hide();
    $(".recipe-three-details").hide();
    $(".recipe-one-details").hide();
    $(".recipe-four-details").slideToggle();
  });
  //display in grid two
  $(".recipe-five").click(function() {
    $(".recipe-six-details").hide();
    $(".recipe-seven-details").hide();
    $(".recipe-eight-details").hide();
    $(".recipe-five-details").slideToggle();
  });
  $(".recipe-six").click(function() {
    $(".recipe-five-details").hide();
    $(".recipe-seven-details").hide();
    $(".recipe-eight-details").hide();
    $(".recipe-six-details").slideToggle();
  });
  $(".recipe-seven").click(function() {
    $(".recipe-six-details").hide();
    $(".recipe-five-details").hide();
    $(".recipe-eight-details").hide();
    $(".recipe-seven-details").slideToggle();
  });
  $(".recipe-eight").click(function() {
    $(".recipe-six-details").hide();
    $(".recipe-seven-details").hide();
    $(".recipe-five-details").hide();
    $(".recipe-eight-details").slideToggle();
  });
  //display grid three
  $(".recipe-nine").click(function() {
    $(".recipe-ten-details").hide();
    $(".recipe-eleven-details").hide();
    $(".recipe-twelve-details").hide();
    $(".recipe-nine-details").slideToggle();
  });
  $(".recipe-ten").click(function() {
    $(".recipe-nine-details").hide();
    $(".recipe-eleven-details").hide();
    $(".recipe-twelve-details").hide();
    $(".recipe-ten-details").slideToggle();
  });
  $(".recipe-eleven").click(function() {
    $(".recipe-ten-details").hide();
    $(".recipe-nine-details").hide();
    $(".recipe-twelve-details").hide();
    $(".recipe-eleven-details").slideToggle();
  });
  $(".recipe-twelve").click(function() {
    $(".recipe-ten-details").hide();
    $(".recipe-eleven-details").hide();
    $(".recipe-nine-details").hide();
    $(".recipe-twelve-details").slideToggle();
  });
  //display grid three
  $(".recipe-thirteen").click(function() {
    $(".recipe-fourteen-details").hide();
    $(".recipe-fifteen-details").hide();
    $(".recipe-sixteen-details").hide();
    $(".recipe-thirteen-details").slideToggle();
  });
  $(".recipe-fourteen").click(function() {
    $(".recipe-thirteen-details").hide();
    $(".recipe-fifteen-details").hide();
    $(".recipe-sixteen-details").hide();
    $(".recipe-fourteen-details").slideToggle();
  });
  $(".recipe-fifteen").click(function() {
    $(".recipe-fourteen-details").hide();
    $(".recipe-thirteen-details").hide();
    $(".recipe-sixteen-details").hide();
    $(".recipe-fifteen-details").slideToggle();
  });
  $(".recipe-sixteen").click(function() {
    $(".recipe-fourteen-details").hide();
    $(".recipe-fifteen-details").hide();
    $(".recipe-thirteen-details").hide();
    $(".recipe-sixteen-details").slideToggle();
  });
});
