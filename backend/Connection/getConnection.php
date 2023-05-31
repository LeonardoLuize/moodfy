<?php

$servername = "Moodfy"
$username = "root"
$password = "root"
function getConnection()
    return new sqli($servername, $username, $password)
?>