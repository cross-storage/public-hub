<?php

include_once '../config.php';

if(str_replace(".json", "", $_SERVER['REQUEST_URI']) === "/config")
{
    header('Content-Type: application/json; charset=utf-8');
    include_once '../page/config.php';

}
else {
    include_once '../page/home.php';
}
?>