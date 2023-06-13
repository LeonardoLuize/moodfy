<?php

function decideQuery($userLat, $userLong, $filters, $localName)
{
    include('../Connection/getConnection.php');
    if ($localName != "")
    {
        include('getLocationByName.php');
        return json_encode(getLocationByName($userLat, $userLong, $filters));
    }
    else if ($filters != "")
    {
        include('getLocationByFilter.php');
        return json_encode(getLocalFilter($localName, $userLat, $userLong));
    }
    else
    {
        include('getLocation.php');
        return json_encode(getLocation($filters, $localName, $userLat, $userLong));
    }
}

$userLat = isset($_GET['userLat']) ? $_GET['userLat'] : 0;
$userLong = isset($_GET['userLong']) ? $_GET['userLong'] : 0;
$filters = isset($_GET['filters']) ? $_GET['filters'] : "";
$localName = isset($_GET['localName']) ? $_GET['localName'] : "";

echo decideQuery($userLat, $userLong, $filters, $localName);
?>
