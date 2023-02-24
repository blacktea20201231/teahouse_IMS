<?php
require_once("./mysql.php");
require_once("./response.php");
function getUsers(){
    $response=openDB();
    $con=$response['result'];
    $sql="SELECT * FROM user";
    $stmt=$con->prepare($sql);
    $result=$stmt->execute();
    if($result){
        $rows=$stmt->fetchAll(PDO::FETCH_ASSOC);
        $response=response(200,"success",$rows);
    }else{
        $response=response(400,'error');
    }
    return $response;
}

?>