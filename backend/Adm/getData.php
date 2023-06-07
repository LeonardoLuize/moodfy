<?php

getData($_GET['id']);

function getData($id)
{
    include './Connection/getConnection.php';
    $conn = getConnection();

    $query = "SELECT * FROM places WHERE ID = $id";
    $result = $conn->query($query);
    $conn->close();

    $place = $result->fetch_assoc();

    $jsonObj->id = $place['ID'];
    $jsonObj->name = $place['Name'];
    $jsonObj->description = $place['Description'];
    $jsonObj->latitude = $place['Latitude'];
    $jsonObj->longitude = $place['Longitude'];
    $jsonObj->avaliation = $place['Avaliation'];

    return $jsonObj;
}
?>