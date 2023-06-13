<?php

function getLocation($filters, $localName)
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

    $query = $query . "AND p.Name = %'$localName'% ";

    $query .= "GROUP BY p.Name ";
    $query .= "ORDER BY counter DESC, (ABS(p.Latitude) + ABS(p.Longitude)) ASC";

    $filters = array();
    $queryForFilters = "SELECT * FROM Filters f INNER JOIN PlaceXFilter pxf ON (pxf.IDFilter = f.ID) " .
        "WHERE pxf.IDPlace = '" . $row['ID'] . "'";
    $result2 = $conn->query($queryForFilters);
    while ($row2 = $result2->fetch_assoc())
    {
        array_push($filters, $row2['Filter']);
    }

    
    
    $result = $conn->query($query);
    $conn->close();

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

    return json_encode($response);
}

$filters = explode(",", $_GET['filters']);
$localName = $_GET['localName'];
echo getLocation($filters, $localName);

?>