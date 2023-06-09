<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');

function getAllFilters()
{   
    include '../Connection/getConnection.php';
    $conn = getConnection();

    $query = "SELECT * FROM filters";
    $result = $conn->query($query);
    $data = $result->fetch_all();

    $response = array(
        'status' => 'success',
        'data' => $data
    );

    return json_encode($response);
}

echo getAllFilters();
?>