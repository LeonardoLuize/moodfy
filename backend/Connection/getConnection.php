<?php

$servername = "Moodfy"
$username = "root"
$password = "root" # Hide the password
function getConnection() {
    return new sqli($servername, $username, $password)
}

?>