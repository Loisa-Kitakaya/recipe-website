
// function validate() {
//   var userName = document.getElementById("username").value();
//   var passWord = document.getElementById("password").value();
//   if (userName == "admin" && passWord == "admin") {
//     alert("Login successfully");
//     window.location = "../home.html"; // Redirecting to other page.
//     return false;
//   } else {
//     alert ("Kindly provide the correct username or password")
//   }
// }

function check(form) /*function to check userid & password*/ {
  /*the following code checkes whether the entered userid and password are matching*/
  if (form.username.value === "admin" && form.password.value === "admin") {
    window.open('../home.html') /*opens the target page while Id & password matches*/
  } else {
    alert("Kindly provide the correct username or password") /*displays error message*/
  }
}