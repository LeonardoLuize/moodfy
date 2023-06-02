<?php
function getData($id)
{
    include '../Connection/getConnection.php';
    $conn = getConnection();

    $query = "SELECT TOP 1 * FROM Places WHERE ID = $id";
    $result = $conn->query($query);
    $conn->close();

    return $result;
}
?>