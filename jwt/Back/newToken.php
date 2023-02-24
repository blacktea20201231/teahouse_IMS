<?php

require "./vendor/autoload.php";
use Firebase\JWT\JWT;

// $secret_key = "YOUR_SECRET_KEY";
//     $issuer_claim = "http://localhost";
//     $audience_claim = "http://localhost";
//     $issuedat_claim = time(); // issued at
//     $expire_claim = $issuedat_claim + 60;
//     $payload = array(
//         "iss" => $issuer_claim,
//         "aud" => $audience_claim,
//         "iat" => $issuedat_claim,
//         "exp" => $expire_claim,
//     );
//     $jwt = JWT::encode($payload, $secret_key, 'HS256');
//     echo $jwt;

function newToken($id){
    $secret_key = "YOUR_SECRET_KEY";
    $issuer_claim = "http://localhost";
    $audience_claim = "http://localhost";
    $issuedat_claim = time(); // issued at
    $expire_claim = $issuedat_claim + 30;
    $payload = array(
        "iss" => $issuer_claim,
        "aud" => $audience_claim,
        "iat" => $issuedat_claim,
        "exp" => $expire_claim,
        "data" => array(
            "id" => $id
    ));
    $jwt = JWT::encode($payload, $secret_key, 'HS256');
    return $jwt;
}




?>