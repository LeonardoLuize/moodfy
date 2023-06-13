<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');

function getLocation($filters, $localName, $userLat, $userLong)
{
    $conn = getConnection();
    
    $filters = explode(",", $_GET['filters']);

    $query = "SELECT *, COUNT(p.Name) as counter FROM Places p INNER JOIN PlaceXFilter pxf ON (pxf.IDPlace = p.ID) " .
        "INNER JOIN Filters f ON (pxf.IDFilter = f.ID) WHERE f.Filter IN (";

    for ($i = 0; $i < sizeof($filters); $i++)
    {
        $query .= "'" . $filters[$i] . "', ";
    }
    $query = rtrim($query, ', ') . ") ";

    $query = $query . "AND p.Name = %'$localName'% ";

    $query .= "GROUP BY p.Name ";
    $query .= "ORDER BY counter DESC, (ABS(p.Latitude - $userLat) + ABS(p.Longitude - $userLong)) ASC";

    $filters = array();
    $queryForFilters = "SELECT * FROM Filters f INNER JOIN PlaceXFilter pxf ON (pxf.IDFilter = f.ID) " .
        "WHERE pxf.IDPlace = '" . $row['ID'] . "'";
    $result2 = $conn->query($queryForFilters);
    while ($row2 = $result2->fetch_assoc())
    {
        array_push($filters, $row2['Filter']);
    }

    
    
    $result = $conn->query($query);
    
    $response = array(
        'id' => $result['ID'],
        'name' => $result['Name'],
        'description' => $result['Description'],
        'latitude' => $result['Latitude'],
        'longitude' => $result['Longitude'],
        'avaliation' => $result['Avaliation'],
        'photo' => $result['Photo'],
        'address' => $result['Address'],
        'filters' => $filters
    );
    
    $conn->close();
    return json_encode($response);
}

$filters = explode(",", $_GET['filters']);
$localName = $_GET['localName'];
echo getLocation($filters, $localName, 0, 0);

?>