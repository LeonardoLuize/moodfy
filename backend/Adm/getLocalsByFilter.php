<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');

function getLocalFilter($userLat, $userLong)
{
    include('../Connection/getConnection.php');
    $conn = getConnection();
    
    $filters = explode(",", $_GET['filters']);

    $query = "SELECT *, COUNT(p.Name) as counter FROM Places p INNER JOIN PlaceXFilter pxf ON (pxf.IDPlace = p.ID) " .
        "INNER JOIN Filters f ON (pxf.IDFilter = f.ID) WHERE f.Filter IN (";

    for ($i = 0; $i < sizeof($filters); $i++)
    {
        $query .= "'" . $filters[$i] . "', ";
    }
    $query = rtrim($query, ', ') . ") ";

    $query .= "GROUP BY p.Name ";
    $query .= "ORDER BY counter DESC, (ABS(p.Latitude) + ABS(p.Longitude)) ASC";

    $jsonObjs = array();

    $result = $conn->query($query);
    while ($row = $result->fetch_assoc())
    {
        $jsonObj = array(
            'id' => $row['ID'],
            'name' => $row['Name'],
            'description' => $row['Description'],
            'latitude' => $row['Latitude'],
            'longitude' => $row['Longitude'],
            'avaliation' => $row['Avaliation'],
            'filter' => $row['Filter']
        );

        array_push($jsonObjs, $jsonObj);
    }

    $conn->close();

    return json_encode($jsonObjs);
}

echo getLocalFilter($userLat, $userLong);
?>
