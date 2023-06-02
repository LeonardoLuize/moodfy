<?php

$name = $_POST['name'];
$lat = $_POST['lat'];
$long = $_POST['long'];
$desc = $_POST['desc'];
$photo = $_POST['photo'];

insertData($name, $desc, $lat, $long, $photo);

function insertData($name, $desc, $lat, $long, $photo)
{
    include 'getConnection.php';
    $conn = getConnection();
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $query = "INSERT INTO Places (Name, Latitude, Longitude, Description, Photo) VALUES
        ($name, $lat, $long, $desc, $photo)";
    
    $result = $conn->query($query);

    if ($result === TRUE) {
        echo "Inserted<br>" . $query . "<br>" . mysql_insert_id() . $name . $lat . $long . $desc . $photo;
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
    
    $conn->close();
}
?>