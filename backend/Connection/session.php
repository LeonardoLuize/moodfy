<?php 

createSession();

function createSession()
{
    session_start();
    $_SESSION['idInserted'] = "";

    header("Location: ../backendtest.php");
}
?>