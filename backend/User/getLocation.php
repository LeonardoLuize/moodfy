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

        $filters = array();
        $queryForFilters = "SELECT * FROM Filters f INNER JOIN PlaceXFilter pxf ON (pxf.IDFilter = f.ID) " .
            "WHERE pxf.IDPlace = '" . $row['ID'] . "'";
        $result2 = $conn->query($queryForFilters);
        while ($row2 = $result2->fetch_assoc())
        {
            array_push($filters, $row2['Filter']);
        }
        
        $jsonObj = array(
            'id' => $row['ID'],
            'name' => $row['Name'],
            'description' => $row['Description'],
            'latitude' => $row['Latitude'],
            'longitude' => $row['Longitude'],
            'avaliation' => $row['Avaliation'],
            'photo' => $row['Photo'],
            'address' => $row['Address'],
            'filters' => $filters
        );

        array_push($jsonObjs, $jsonObj);
    }

    $conn->close();
    return $jsonObjs;
}

?>
