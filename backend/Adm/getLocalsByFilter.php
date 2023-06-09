<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');

getLocalFilter($_GET['latitude'], $_GET['longitude']);

function getLocalFilter($userLat, $userLong)
{
    include('../Connection/getConnection.php');
    $conn = getConnection();
    
    $filters = str_split($_GET['filters'], ",")

    echo $filters . "<br>";

    $query = "SELECT *, COUNT(p.Name) as counter FROM Places p INNER JOIN PlaceXFilter pxf ON (pxf.IDPlace = p.ID) " .
    "INNER JOIN Filters f ON (pxf.IDFilter = f.ID) WHERE f.Filter IN (";

    for ($i = 0; $i < sizeof($filters); i++)
    {
        $query = $query . $filters[i] . ", "
        
    }
    $query = substr($query, 0, sizeof($query) - 2) . ") ";

    $query = $query . " GROUP BY p.Name";
    $query = $query . "ORDER BY counter DESC, (ABS(p.Latitude) + ABS(p.Longitude)) ASC";

    echo $query;

    $jsonObjs = array();
    $jsonObj;

    $result = $conn->query($query);
    while ($row = $result->fetch_assoc())
    {
        $jsonObj->id = $row['ID'];
        $jsonObj->name = $row['Name'];   
        $jsonObj->description = $row['Description'];
        $jsonObj->latitude = $row['Latitude'];
        $jsonObj->longitude = $row['Longitude'];
        $jsonObj->avaliation = $row['Avaliation'];
        $jsonObj->filter = $row['Filter']

        array_push($jsonObjs, $jsonObj);
    }

    return $jsonObjs;
}


// SELECT *, COUNT(p.Name) as counter FROM Places p 
// 	INNER JOIN PlaceXFilter pxf ON (pxf.IDPlace = p.ID)
//     INNER JOIN Filters f ON (pxf.IDFilter = f.ID)
//     WHERE f.Filter IN ('pop', 'rock')
//     GROUP BY p.Name
//     ORDER BY counter DESC, (ABS(p.Latitude) + ABS(p.Longitude)) ASC
?>
