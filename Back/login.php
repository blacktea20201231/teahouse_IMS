<?php
require "vendor/autoload.php";
require_once "./newToken.php";
require_once "./response.php";
require_once './mysql.php';
function login()
{
    $id = $_POST['id'];
    $password = $_POST['password'];
    $response = openDB();
    $con = $response['result'];
    $sql = "SELECT  *  FROM  `users` WHERE `id`=:id and `password`=:password";
    $stmt = $con->prepare($sql);
    $result = $stmt->execute(array(":id" => $id, ":password" => $password));
    if ($result){
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if (count($rows) == 0) {
            $response = response(403, "account or password error");
        } else {
            $jwt = newToken($id);
            $response = response(200, "login success");
            $response['token'] = $jwt;
        }
    }
    return $response;
}
