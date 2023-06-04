<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<?php 
session_start();

include 'Adm/getData.php';
include 'Adm/getAllFilters.php';

$place = getData($_SESSION['idInserted']);
$filters = getAllFilters();
?>
<body>
    <div class="card">
        <div class="card-img">
            <?php
                echo $place['Photo'] . "<br>";
                echo $place['Description'] . "<br>";
                echo $place['Latitude'] . "<br>";
                echo $place['Longitude'] . "<br>";
                echo $place['Name'] . "<br>";
                echo $place['ID'] . "<br>";
            ?>

            <select name="filter" id="">
                <?php
                    foreach ($filters as $filter) {
                        echo "<option value='"
                         . $filter['ID'] . "'>"
                         . $filter['Filter'] . "</option>";
                    }
                ?>
            </select>
        </div>
    </div>
</body>
</html>