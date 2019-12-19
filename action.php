<!-- Connection to database called records.sql hosted on 127.0.0.1-->
<?php
ini_set ("display_errors", "1");
error_reporting(E_ALL);

session_start();
$host="localhost"; // Host name
$username="root"; // Database username
$password=""; // Database password
$db_name="records"; // Database name
$tbl_name="users"; // Table name

// This will connect you to your database
$conn = mysqli_connect('localhost', 'root', '','records');
if (!$conn)
{
	echo 'Error '.mysqli_error($conn);
}

// Defining your login details into variables
$username=$_POST['username'];
$password=$_POST['password'];
$encrypted_mypassword=md5($password);
 //MD5 Hash for security
// MySQL injection protections
$username = stripslashes($username);
$password = stripslashes($password);
$username = mysqli_real_escape_string($conn,$username);
$password = mysqli_real_escape_string($conn,$password);

$sql="SELECT * FROM $tbl_name WHERE username='$username' and hash='$encrypted_mypassword'" or die(mysqli_error());
$result=mysqli_query($conn,$sql) or die(mysqli_error($conn));

// Checking table row
$count=mysqli_num_rows($result);
// If username and password is a match, the count will be 1

if($count==1){
// If everything checks out, you will now be forwarded to admin.php
$user = mysqli_fetch_assoc($result);
 $_SESSION['ID'] = $user['ID'];
header("location:recipes.html");
}
//If the username or password is wrong, you will receive this message below.
else {
echo "Wrong Username or Password<br><br>Return to <a href=\"index.php\">login</a>";
}
git 
ob_end_flush();

?>

<!-- Code for allowing a user to register for an account -->
<?php

$conn = mysqli_connect('localhost', 'root', '','records');
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

die( "You have registered for an account.<br><br>Go to <a href=\"index.php\">Login</a>");
}
?>
