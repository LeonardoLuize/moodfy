<?php
function insertPlace($name, $desc, $lat, $long, $photo)
{
    include 'getConnection.php';
    $conn = getConnection();
    if ($conn->connect_error)
        die("Connection failed: " . $conn->connect_error);
    
    $query = "INSERT INTO Places (Name, Latitude, Longitude, Description, Photo) VALUES
        ($name, $lat, $long, $desc, $photo)"
    
    
}
?>