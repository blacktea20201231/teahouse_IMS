<?php
function validTokenRoute($action){
    switch ($action) {
        case 'getUsers':
            require_once "./getUsers.php";
            $response = getUsers();
            break;
    //    case 'newProduct':
    //         require_once "newProduct.php";
    //         $response = newProduct();
            break;
        default:
            $response = response(200, "action not found");
            break;
    }
    return $response;
}

?>
