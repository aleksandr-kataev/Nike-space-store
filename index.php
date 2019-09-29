<?php 
$servername = "eu-cdbr-west-02.cleardb.net";
$username = "bd7f314c063cdf";
$password = "bfeb2057";

// Create connection
$link = mysqli_connect( $servername, $username, $password )
or die( "Unable to Connect" );
// Check connection

$sql = "SELECT * FROM products WHERE id = 'hy1'";
$result = mysqli_query($link, $sql);

while($row = mysqli_fetch_array( $result, MYSQLI_ASSOC) {
     echo "<br> id: ". $row["id"]. ", name: ". $row["name"]. ", section: " . $row["section"] . ", isSize: " . $row["isSizeNum"] . "colour: " . $row["colourName"] . "<br>";
  }

mysqli_close($link);

?>
