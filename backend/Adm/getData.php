<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');

function getData($id)
{
    include '../Connection/getConnection.php';
    $conn = getConnection();

    $query = "SELECT * FROM places WHERE ID = $id";
    $result = $conn->query($query);
    $conn->close();

    return $result->fetch_assoc();
}
?>