<?php
require "vendor/autoload.php";
require_once "./response.php";
require_once("./newToken.php");

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

// $headers = getallheaders();
// $jwt = $headers['Auth'];
// $secret_key = "YOUR_SECRET_KEY";
// try {
//     $payload = JWT::decode($jwt, new Key($secret_key, 'HS256'));
//     echo "Token is valid, Access granted"; //標準化輸出
// } catch (Exception $e) {
//     echo "Token is invalid, Access denied";
//     echo $e->getMessage();
//     //標準化輸出
// }
function checkToken()
{
    $headers = getallheaders();
    $jwt = $headers['Auth'];
    $secret_key = "YOUR_SECRET_KEY";
    try {
        $payload = JWT::decode($jwt, new Key($secret_key, 'HS256'));
        $jwt = newToken($payload->data->id);
        $response = response(200, "Valid token",$payload->data->id);
        $response['token'] = $jwt;
    } catch (Exception $e) {
        $response = response($e->getCode(), $e->getMessage());
    }
    return $response;
}
