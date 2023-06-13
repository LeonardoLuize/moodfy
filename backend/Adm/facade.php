<?php

function decideQuery($userLat, $userLong, $filters, $localName)
{
    include_once('../Connection/getConnection.php');
    if ($localName != "")
    {
        include_once('getLocationByName.php');
        return json_encode(getLocationByName($localName, $userLat, $userLong));
    }
    else if ($filters != "")
    {
        include_once('getLocationByFilter.php');
        return json_encode(getLocalFilter($userLat, $userLong, $filters));
    }
    else if ($filters != "" && $localName != ""){
        include_once('getLocation.php');
        return json_encode(getLocation($filters, $localName, $userLat, $userLong));
    }
    else
    {
        include_once('../User/getLocation.php');
        return json_encode(getLocation($userLat, $userLong));
    }
}

$userLat = isset($_GET['userLat']) ? $_GET['userLat'] : 0;
$userLong = isset($_GET['userLong']) ? $_GET['userLong'] : 0;
$filters = isset($_GET['filters']) ? $_GET['filters'] : "";
$localName = isset($_GET['localName']) ? $_GET['localName'] : "";

echo decideQuery($userLat, $userLong, $filters, $localName);
?>
