<?php
function getData($id)
{
    include './Connection/getConnection.php';
    $conn = getConnection();

    $query = "SELECT * FROM places WHERE ID = $id";
    $result = $conn->query($query);
    $conn->close();

    return $result->fetch_assoc();
}
?>