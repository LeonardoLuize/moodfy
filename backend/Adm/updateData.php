<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');

function updateData($id, $name, $lat, $long, $desc, $photo)
{
    include '../Connection/getConnection.php';
    $conn = getConnection();

    $query = "UPDATE Places SET Name = '$name', Latitude = '$lat', Longitude = '$long', Description = '$desc', Photo = '$photo' WHERE ID = $id";
    $result = $conn->query($query);
    $conn->close();

    $response = array(
        'status' => $result ? 'success' : 'error'
    );

    return json_encode($response);
}

$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];
$name = $data['name'];
$lat = $data['lat'];
$long = $data['long'];
$desc = $data['desc'];
$photo = $data['photo'];

echo updateData($id, $name, $lat, $long, $desc, $photo);
?>
