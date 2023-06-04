<?php

$name = $_POST['name'];
$lat = $_POST['lat'];
$long = $_POST['long'];
$desc = $_POST['desc'];
$photo = $_POST['photo'];

session_start();
$_SESSION['idInserted'] = insertData($name, $desc, $lat, $long, $photo);

function insertData($name, $desc, $lat, $long, $photo)
{
    include '../Connection/getConnection.php';
    $conn = getConnection();
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $query = "INSERT INTO Places (Name, Latitude, Longitude, Description, Photo) VALUES
        ('$name', '$lat', '$long', '$desc', '$photo')";
    
    $result = $conn->query($query);

    $lastId = $conn->insert_id;

    if ($result === TRUE) {
        echo "Inserted<br>" . $query . "<br>" . $lastId . $name . $lat . $long . $desc . $photo;
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
    
    $conn->close();

    // Change for the page you want to redirect to
    header("Location: ../backendtestChangeFilters.php");
    return $lastId;
}
?>