<?php
function invalidTokenRoute($action){
    switch($action){
        case 'login':
            require_once "./login.php";
            $response = login();
            break;
        default:
            $msg = $response['message'] . " and action =$action";
            $response = response(403, $msg);
            break;
    }
    return $response;
}
?>