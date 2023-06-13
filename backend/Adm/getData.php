<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');

function getData($id)
{
    include_once '../Connection/getConnection.php';
    $conn = getConnection();

    $query = "SELECT * FROM places WHERE ID = $id";
    $result = $conn->query($query);
    $conn->close();

    if ($result->num_rows > 0) {
        $data = $result->fetch_assoc();

        $response = array(
            'status' => 'success',
            'data' => $data
        );
    } else {
        $response = array(
            'status' => 'failure',
            'message' => 'No data found'
        );
    }

    return json_encode($response);
}

$id = $_GET['id'];

echo getData($id);
?>
