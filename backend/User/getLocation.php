<?php

function filterByCurrentUser($userLat, $userLong)
{
    $conn = getConnection();

    $query = "SELECT TOP 10 * FROM Places ORDER BY ABS(Latitude - $userLat) + ABS(Longitude - $userLong)"; // TODO: Check if this query works
    // Filtrando os 10 lugares mais próximos do usuário
    $result = $conn->query($query);
    $conn->close();

    return $result;
}

function getLocation()
{
    $lat = $_POST['lat'];
    $long = $_POST['long'];

    $result = filterByCurrentUser($lat, $long);

    if ($result->num_rows > 0) {
        $places = array();
        while ($row = $result->fetch_assoc()) {
            $places[] = $row;
        }
        echo json_encode($places);
    } else {
        echo "0 results";
    }

    return $result;
}

?>