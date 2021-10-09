{
    "settings":
    {
        "domain_prefix": <?= $domain_prefix? "true" : "false" ?>
    },
    "endpints":

<?php
    $subdomain = str_replace($Basedomain, "", $_SERVER['HTTP_HOST']);
    if($subdomain === "") {
        $subdomain = "@";
    }
    $config = '../config/' . $subdomain;
    if (!file_exists($config))
    {
        $config = '../config/fallback.json';
    }

    $last_modified_time = filemtime($config);
    $etag = md5_file($config);

    header("Last-Modified: ".gmdate("D, d M Y H:i:s", $last_modified_time)." GMT");
    header("Etag: $etag"); 

    if (@strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']) == $last_modified_time || 
        trim($_SERVER['HTTP_IF_NONE_MATCH']) == $etag) { 
        header("HTTP/1.1 304 Not Modified"); 
        exit; 
    }
    
    echo file_get_contents($config, true);

    
?>

}