<html>

<head>
  <title>Login Form</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale= 1.0">
  <link rel="stylesheet" type="text/css" href="./css/login-styles.css" />
  <link rel="stylesheet" href="./css/bootstrap.css">
  <script src="js/script.js"></script>
  

</head>

<body onLoad="document.form1.username.focus();">
  <div class="container">
    <div class="login">
      <img src="img/recipe.jpg" />
      <p id="para1">Please provide your details below to login</p>
      <form name="form1" id="form1" method="POST" action = "action.php" onSubmit="return memloginvalidate()">
        <div class="form-input form-group">
          <input type="text" name = 'username' id="username" placeholder="Enter Username">
        </div>
        <div class="form-input form-group">
          <input type="password" name = 'password' id="password" placeholder="Enter Password">

        </div>
        <input type="submit" name = "Submit" value="LOGIN" class="btn-login">
        <input type="submit" name="cancel" value="CANCEL" class="btn-login">


      </form>
      <a href="register.php">Not Registered Here?</a>
      <a href="index.html">Return to Home?</a>
      
    </div>
  </div>

</body>

</html>