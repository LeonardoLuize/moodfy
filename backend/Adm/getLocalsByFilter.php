<?php

function getLocalFilter($userLat, $userLong)
{
    include('../Connection/getConnection.php');
    $conn = getConnection();
    
    $filters = str_split($_GET['filters'], ",")

    echo $filters . "<br>";

    for ($i = 0; $i < sizeof($filters); i++)
    {
        $query = "SELECT * FROM Places p INNER JOIN PlaceXFilter pxf ON (pxf.IDPlace = p.ID) " .
        "INNER JOIN Filters f ON (pxf.IDFilter = f.ID) WHERE f.Filter = " . $filters[i] . 
        "ORDER BY (ABS(p.Latitude) + ABS(p.Longitude))";
        
        $result = $conn->query($query);  
    }

    
    $query = substr($query, 0, sizeof($query) - 4);

    echo $query;

}

?>
