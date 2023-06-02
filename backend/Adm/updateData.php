<?php
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