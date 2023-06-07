<?php
function getAllFilters()
{   
    /* Handle CORS */

    // Specify domains from which requests are allowed
    header('Access-Control-Allow-Origin: *');

    // Specify which request methods are allowed
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');

    // Additional headers which may be sent along with the CORS request
    header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');

    // Set the age to 1 day to improve speed/caching.
    header('Access-Control-Max-Age: 86400');

    // Exit early so the page isn't fully loaded for options requests
    if (strtolower($_SERVER['REQUEST_METHOD']) == 'options') {
        exit();
    }

    $conn = getConnection();

    $query = "SELECT * FROM filters";
    $result = $conn->query($query);

    return $result->fetch_all();
}
?>