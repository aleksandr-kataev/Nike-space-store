<?php
$servername = "eu-cdbr-west-02.cleardb.net";
$username = "bd7f314c063cdf";
$password = "bfeb2057";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
      
$sql = "SELECT * FROM products WHERE id = 'ab1'";
$result = $conn->query($sql);
echo $results;
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br> id: ". $row["id"]. ", name: ". $row["name"]. ", section: " . $row["section"] . ", isSize: " . $row["isSizeNum"] . "colour: " . $row["colourName"] . "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
      

?>
