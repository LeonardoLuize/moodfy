<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');

function getAllFilters()
{   
    include '../Connection/getConnection.php';
    $conn = getConnection();

    $query = "SELECT * FROM filters";
    $result = $conn->query($query);

    return $result->fetch_all();
}
?>