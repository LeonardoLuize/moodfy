<?php
function getConnection() {
    $hostname = "localhost";
    $servername = "moodfy";
    $username = "root";
    $password = ""; # Hide the password or change it to your own password

    return new mysqli($hostname, $username, $password, $servername);
}

?>