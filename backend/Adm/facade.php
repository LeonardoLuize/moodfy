<?php

function decideQuery($userLat, $userLong, $filters, $localName)
{
    include('getLocationByFilter.php');
    include('getLocationByName.php');
    include('getLocation.php');
    
    if ($localName == "")
    {
        return getLocalFilter($userLat, $userLong, $filters);
    }
    
    else if ($filters == "")
    {
        return getLocationByName($localName, $userLat, $userLong);
    }

    else
    {
        return getLocation($filters, $localName, $userLat, $userLong);
    }
}

$userLat = $_GET['userLat'] ? $_GET['userLat'] : ""
$userLong = $_GET['userLong'] ? $_GET['userLong'] : ""
$filters = $_GET['filters'] ? $_GET['filters'] : ""
$localName = $_GET['localName'] ? $_GET['localName'] : ""

echo decideQuery($userLat, $userLong, $filters, $localName);
?>
