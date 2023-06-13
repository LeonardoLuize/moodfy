<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');

function getLocationByName($localName, $userLat, $userLong)
{
    include '../Connection/getConnection.php';
    $conn = getConnection();

    $query = "SELECT * FROM Places WHERE Name = %'$localName'% ORDER BY (ABS(Latitude) + ABS(Longitude)) ASC";
    $result = $conn->query($query);
    $conn->close();

    $response = array(
        'id' => $result['ID'],
        'name' => $result['Name'],
        'description' => $result['Description'],
        'latitude' => $result['Latitude'],
        'longitude' => $result['Longitude'],
        'avaliation' => $result['Avaliation'],
        'filter' => $result['Filter'],
        'photo' => $result['Photo'],
        'address' => $result['Address']
    );

    return json_encode($response);
}

$localName = $_GET['localName'];
echo updateData($localName);

?>