<?php
function getAllFilters()
{
    $conn = getConnection();

    $query = "SELECT * FROM filters";
    $result = $conn->query($query);

    return $result->fetch_all();
}
?>