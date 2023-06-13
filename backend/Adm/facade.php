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

echo decideQuery($_GET['userLat'], $_GET['userLong'], $_GET['filters'], $_GET['localName']);

?>
