<html>

<head>
  <title>Login Form</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale= 1.0">
  <link rel="stylesheet" type="text/css" href="./css/login-styles.css" />
  <link rel="stylesheet" href="./css/bootstrap.css">
  <script src="js/script.js"></script>
  

</head>

<body>
  <div class="container">
    <div class="login">
      <img src="img/recipe.jpg" />
      <p id="para1">Please provide your details below to login</p>
      <form name="form_id" id="form_id" method="post">
        <div class="form-input form-group">
          <input type="text" id="username" placeholder="Enter Username">
        </div>
        <div class="form-input form-group">
          <input type="password" id="password" placeholder="Enter Password">

        </div>
        <input type="button" id="submit" onclick="check(form)" value="LOGIN" class="btn-login">
        <input type="submit" name="cancel" value="CANCEL" class="btn-login">


      </form>
      
    </div>
  </div>

</body>

</html>