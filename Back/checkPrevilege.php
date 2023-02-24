<?php
require_once ('./mysql.php');
require_once('./response.php');

function checkPrevilege($action, $id){
    $response=openDB();
    $con=$response['result'];
    $sql = "SELECT role_id  FROM  `user_role` WHERE `user_id`=:id";
    $stmt=$con->prepare($sql);
    $result=$stmt->execute(array(":id"=>$id));
    if($result){
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        for ($i=0; $i < count($rows); $i++) { 
            $user_roles[$i] = $rows[$i]['role_id'];    
        }
    }
    
    $sql = "SELECT role_action.role_id  FROM  `action`, `role_action` WHERE  action.name=:action and role_action.action_id=action.id";
    $stmt=$con->prepare($sql);
    $result=$stmt->execute(array(":action"=>$action));
   if($result){
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    for ($i=0; $i < count($rows); $i++) { 
        $action_roles[$i] = $rows[$i]['role_id'];    
    }
   } 

    $r = array_intersect($user_roles, $action_roles);
    if(count($r)!=0){
        return response(200, '有權限');
    }
    else{
        return response(403, '沒有權限');
    }
}

    
?>