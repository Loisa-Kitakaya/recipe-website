
<!-- Code for allowing a user to register for an account -->
<?php

$conn = mysqli_connect('localhost', 'root', '','recipe');
if (!$conn)
{
	echo 'Error '.mysqli_error($conn);
}
//Process
if (isset($_POST['submit']))
{

$firstname = addslashes( $_POST['firstname'] ); //prevents types of SQL injection
$lastname = addslashes( $_POST['lastname'] ); //prevents types of SQL injection
$contact = addslashes( $_POST['contact'] ); //prevents type
$email = addslashes( $_POST['emailadd'] );
$username = $_POST['username'];
$password = $_POST['password'];
$newpass = md5($password); //This will make your password encrypted into md5, a high security hash

$sql = mysqli_query( $conn,"INSERT INTO users(fname, lname, contact, email, username, hash) VALUES ('$firstname','$lastname', '$contact', '$email', '$username', '$newpass')" )
        or die( mysqli_error($conn) );

die( "You have registered for an account.<br><br>Go to <a href=\"login.php\">Login</a>");
}

ob_end_flush();
?>
