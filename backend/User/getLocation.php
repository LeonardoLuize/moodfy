<?php
/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');

function filterByCurrentUser($userLat, $userLong)
{
    $conn = getConnection();

    $query = "SELECT TOP 10 * FROM Places ORDER BY ABS(Latitude - $userLat) + ABS(Longitude - $userLong)"; // TODO: Check if this query works
    // Filtrando os 10 lugares mais próximos do usuário
    $result = $conn->query($query);
    $conn->close();

    return $result;
}

function getLocation($lat, $long)
{
    $result = filterByCurrentUser($lat, $long);

    if ($result->num_rows > 0) {

        $places = array();       
        while ($row = $result->fetch_assoc()) {
            $places[] = $row; // Add place to array // TODO: Check if this works
        }

        echo json_encode($places);

    } else {
        $response = array(
            'status' => 'error',
            'message' => 'No results found'
        );
        echo json_encode($response);
    }
}

?>
