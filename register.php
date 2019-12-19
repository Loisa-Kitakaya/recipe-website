<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./css/login-styles.css">
  <title>Document</title>
</head>
<body>
<div class = "container" >
	        <img src="images/set.png"/>
	        <p id ="para1">Please provide your details below to login</p>
	<form name="formreg" action="reg-action.php" id="formreg" method="post" >

			<div class = "form-input">
			<input type="text" name = "firstname" placeholder = "First Name">
	        </div>
			<div class = "form-input">
			<input type="text" name = "lastname" placeholder = "Last Name">
	        </div>
			<div class = "form-input">
			<input type="text" name = "contact" placeholder = "Contact">
	        </div>
			<div class = "form-input">
			<input type="text" name = "emailadd" placeholder = "Valid Email Address">
	        </div>
			<div class = "form-input">
			<input type="text" name = "username" placeholder = "Enter Username">
	        </div>

	        <div class="form-input">
	        <input type="password" name="password" placeholder = "Enter Password">

	        </div>
			<div class="form-input">
	        <input type="password" name="confirmpassword" placeholder = "Reenter Password">

	        </div>

	        <input type = "submit" name = "submit" value ="REGISTER" class="btn-login">



	</form>
</body>
</html>