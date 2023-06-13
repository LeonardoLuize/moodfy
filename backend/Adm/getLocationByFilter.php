<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');

function getLocalFilter($userLat, $userLong)
{
    $conn = getConnection();
    
    $filters = explode(",", $_GET['filters']);

    $query = "SELECT p.ID, p.Name, p.Description, p.Latitude, p.Longitude, p.Avaliation, p.Address," .
    "p.Photo, COUNT(p.Name) as counter FROM Places p INNER JOIN PlaceXFilter pxf ON (pxf.IDPlace = p.ID) " .
        "INNER JOIN Filters f ON (pxf.IDFilter = f.ID) WHERE f.Filter IN (";

    for ($i = 0; $i < sizeof($filters); $i++)
    {
        $query .= "'" . $filters[$i] . "', ";
    }
    $query = rtrim($query, ', ') . ") ";

    $query .= "GROUP BY p.Name ";
    $query .= "ORDER BY counter DESC, (ABS(p.Latitude - " . floatval($userLat) . ") + ABS(p.Longitude - " . floatval($userLong) . ")) ASC";
    
    $result = $conn->query($query);
    
    
    
    
    
    $jsonObjs = array();
    

    while ($row = $result->fetch_assoc())
    {
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

    return json_encode($jsonObjs);
}

echo getLocalFilter($userLat, $userLong);
?>
