<?php
function getConnection() {
    $servername = "Moodfy";
    $username = "root";
    $password = "123"; # Hide the password

    return new mysqli($servername, $username, $password);
}

?>