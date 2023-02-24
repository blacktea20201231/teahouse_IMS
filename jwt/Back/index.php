<?php
    require_once "./response.php";
    require_once "./checkToken.php";
    require_once "./login.php";
    require_once("./getUsers.php");
    require_once './validTokenRoute.php';
    require_once './InvalidTokenRoute.php';
    require_once "./checkPrevilege.php";
    
    if(isset($_GET['action'])) 
        $action=$_GET['action'];
    else
        $action='_no_action';
    $response = $responseToken=checkToken();
    $testMode = false;
     if($testMode)  
        $response['status'] = 200;    

    if($response['status'] == 200){
        $id=$response['result'];      
        $response=checkPrevilege($action,$id);
        if($response['status'] == 200){
            $response=validTokenRoute($action);
            if(!$testMode){
                $response['tokenStatus']=$responseToken['status'];
                $response['tokenMessage']=$responseToken['message'];
                $response['token']=$responseToken['token'];
            }else{
                $response['tokenStatus']=200;
            }
        }       
        //  switch ($action) {
        //      case 'getUsers':
        //          require_once "getUsers.php";
        //          $response = getUsers();
        //          break;
            //  case 'newProduct':
            //      require_once "newProduct.php";
            //      $response = newProduct();
            //      break;
            
        //  default:
        //          $response = response(200, "action not found");//200 or 404
        //          break;
        //}
        
       
    } 
    else {
        $response=invalidTokenRoute($action);
        // switch($action){
        //     case 'login':
        //         $response = login();
        //         break;
        //     default:
        //         $msg = $response['message'] . " and action =$action";
        //         $response = response(403, $msg);
        //         break;
        // }
    }
    echo json_encode($response);
