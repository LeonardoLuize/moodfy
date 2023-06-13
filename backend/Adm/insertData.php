<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$lat = $data['lat'];
$long = $data['long'];
$desc = $data['desc'];
$photo = $data['photo'];
$address = $data['address'];

session_start();

function insertData($name, $desc, $lat, $long, $photo)
{
    include '../Connection/getConnection.php';
    $conn = getConnection();
    
    $query = "INSERT INTO Places (Name, Latitude, Longitude, Description, Photo, Address) VALUES
        ('$name', '$lat', '$long', '$desc', '$photo')";
    
    $result = $conn->query($query);

    $lastId = $conn->insert_id;

    if ($result === TRUE) {
        $response = array(
            'status' => 'success',
            'lastId' => $lastId,
            'name' => $name,
            'lat' => $lat,
            'long' => $long,
            'desc' => $desc,
            'photo' => $photo,
            'address' => $address
        );
    } else {
        $response = array(
            'status' => 'error',
            'message' => 'Error inserting data: ' . $conn->error
        );
    }

    $conn->close();

    $_SESSION['idInserted'] = $lastId;

    return json_encode($response);
}

echo insertData($name, $desc, $lat, $long, $photo);
?>
