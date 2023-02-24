<?php
require_once("mysql.php");
require_once("response.php");

class inv{
   
    function getInv(){
        $response=openDB();
        if($response['status']!=200)
            return $response;
        $con=$response['result'];
        $sql="select * from inv";
        try{
            $stmt=$con->prepare($sql);
            $result=$stmt->execute();
            if($result){
                $row=$stmt->fetchAll(PDO::FETCH_ASSOC);
                $response=response(200,'success',$row);
            }else{
                $response=response(400,'SQL Server Error');
            }
        }catch(PDOException $e){
            $response=response($e->getCode(),$e->getMessage());            
        }
        return $response;        
    }
    
    function getInvWithName(){
        $response=openDB();
        if($response['status']!=200)
            return $response;
        $con=$response['result'];
        $sql="SELECT `inv`.*, `good`.`name`,`good`.`unit`,`good`.`safe_stock` FROM `inv`,`good` 
        WHERE `inv`.`good_id` = `good`.`id`";
        try{
            $stmt=$con->prepare($sql);
            $result=$stmt->execute();
            if($result){
                $row=$stmt->fetchAll(PDO::FETCH_ASSOC);
                $response=response(200,'success',$row);
            }else{
                $response=response(400,'SQL Server Error');
            }
        }catch(PDOException $e){
            $response=response($e->getCode(),$e->getMessage());            
        }
        return $response;        
    }
}