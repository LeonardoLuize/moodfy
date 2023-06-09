<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');

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
}


// SELECT *, COUNT(p.Name) as counter FROM Places p 
// 	INNER JOIN PlaceXFilter pxf ON (pxf.IDPlace = p.ID)
//     INNER JOIN Filters f ON (pxf.IDFilter = f.ID)
//     WHERE f.Filter IN ('pop', 'rock')
//     GROUP BY p.Name
//     ORDER BY counter DESC, (ABS(p.Latitude) + ABS(p.Longitude)) ASC
?>
