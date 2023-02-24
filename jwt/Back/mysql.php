<?php

require_once("./response.php");
function openDB() {
    $db_host = 'localhost';
    $db_name = '60lan';
    $db_user = 'root';
    $db_password = '';
    $dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
    try {
        $con = new PDO($dsn, $db_user, $db_password);
        $response=response(200,'success',$con);
     } catch (PDOException $e) {
       $response=response($e->getCode(),$e->getMessage());
    }
    return ($response);
}


?>