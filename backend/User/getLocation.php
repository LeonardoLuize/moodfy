<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');

function getLocation($userLat, $userLong)
{
    include_once("../Connection/getConnection.php");

    $conn = getConnection();

    $result = $conn->query("SELECT * FROM places ".
    "ORDER BY (ABS(Latitude - " . floatval($userLat) . ") + ABS(Longitude - " . floatval($userLong) . ")) ASC");


    $jsonObjs = array(); 
    while ($row = $result->fetch_assoc()) {
        $jsonObj = array(
            'id' => $row['ID'],
            'name' => $row['Name'],
            'description' => $row['Description'],
            'latitude' => $row['Latitude'],
            'longitude' => $row['Longitude'],
            'avaliation' => $row['Avaliation'],
            'photo' => $row['Photo'],
            'address' => $row['Address'],
        );

        array_push($jsonObjs, $jsonObj);
    }

    $conn->close();
    return $jsonObjs;
}

?>
