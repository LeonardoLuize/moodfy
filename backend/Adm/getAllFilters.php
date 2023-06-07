<?php
getAllFilters();

function getAllFilters()
{
    $jsonObjs = array();
    $conn = getConnection();

    $query = "SELECT * FROM filters";
    $result = $conn->query($query);

    while ($row->$result->fetch_assoc()) {
        $jsonObj->filterName = $row['Filters'];
        $jsonObj->id = $row['ID'];

        array_push($jsonObjs, $jsonObj);
    }

    // RESPONSE TO REQUEST
    return $jsonObjs;
}
?>