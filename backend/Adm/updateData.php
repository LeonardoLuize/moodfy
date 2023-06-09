<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');

function updateData($id, $name, $lat, $long, $desc, $photo)
{
    include '../Connection/getConnection.php';
    $conn = getConnection();

    $query = "UPDATE Places SET Name = $name, Latitude = $lat, Longitude = $long, Description = $desc, Photo = $photo WHERE ID = $id";
    $result = $conn->query($query);
    $conn->close();

    return $result;
}

?>