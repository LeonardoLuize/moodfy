<?php

function decideQuery($userLat, $userLong, $filters, $localName)
{
    include('getLocationByFilter.php');
    include('getLocationByName.php');
    include('getLocation.php');

    if ($localName != "")
    {
        return getLocationByName($userLat, $userLong, $filters);
    }
    else if ($filters != "")
    {
        return getLocalFilter($localName, $userLat, $userLong);
    }
    else
    {
        return getLocation($filters, $localName, $userLat, $userLong);
    }
}

$userLat = isset($_GET['userLat']) ? $_GET['userLat'] : 0;
$userLong = isset($_GET['userLong']) ? $_GET['userLong'] : 0;
$filters = isset($_GET['filters']) ? $_GET['filters'] : "";
$localName = isset($_GET['localName']) ? $_GET['localName'] : "";

echo decideQuery($userLat, $userLong, $filters, $localName);
?>
