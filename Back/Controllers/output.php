<?php
require_once("mysql.php");
require_once("response.php");

class output{
    //選取特定id
    function getOutput(){
        $response=openDB();
        if($response['status']!=200)
             return $response;
        $con=$response['result'];
        if(isset($_POST['id'])){
          $sql="select * from output where id=:id";
          $stmt=$con->prepare($sql);
          $result=$stmt->execute(array(":id"=>$_POST['id']));
        }else{
          $sql="select * from output";
          $stmt=$con->prepare($sql);
          $result=$stmt->execute();
        }
        
        try{        
           if($result){
             $row=$stmt->fetchAll(PDO::FETCH_ASSOC);
             $response=response(200,'success',$row);
           }else{
             $response=response(400,'error');
           }
        }catch(PDOException $e){
            $response=response($e->getCode(),$e->getMessage());
         }
         return $response; 
     }
 //新增
     function newOutput(){
         $response=openDB();
         if($response['status']!=200)
              return $response;
         $con=$response['result'];
         $good_id=$_POST['good_id'];
         $output_date=date("Y-m-d");
         $amount=$_POST['amount'];        
         $note=$_POST['note'];
        //  $sql="INSERT INTO `output` (`id`, `good_id`, `sup_id`, `output_date`, `amount`,`output_reason`, `note`) 
        //  VALUES (NULL,:good_id,:sup_id,:output_data, :amount, :output_reason,:note);";
         $sql = "INSERT INTO `output` (`id`, `good_id`,`date`, `amount`, `note`) 
         VALUES (NULL, :good_id,:output_date, :amount,:note);";
         
         try{
            $stmt=$con->prepare($sql);
            $result=$stmt->execute(array(
            ":good_id"=>$good_id,           
            ":output_date"=>$output_date,
            ":amount"=>$amount,           
            ":note"=>$note
         ));
            if($result){
             $count=$stmt->rowCount();
             if($count<1){
                 $response=response(204,'Insert failed');
             }else{
                 $response=response(200,'Insert succeeded');
             }
         }else{
             $response=response(400,"SQL Server Error");
         }
 
         }catch(PDOException $e){
             $response=response($e->getCode(),$e->getMessage());
          }
          return $response; 
      }

      function getOutputWithName(){
        $response=openDB();
        if($response['status']!=200)
             return $response;
        $con=$response['result'];
        if(isset($_POST['id'])){
          $sql="select * from input where id=:id";
          $stmt=$con->prepare($sql);
          $result=$stmt->execute(array(":id"=>$_POST['id']));
        }else{
          $sql="SELECT `output`.`good_id`, `output`.`date`,`output`.`amount`,`good`.`name`,`good`.`unit`
          FROM `output`,`good` 
          WHERE `output`.`good_id` = `good`.`id`";
          $stmt=$con->prepare($sql);
          $result=$stmt->execute();
        }
        
        try{        
           if($result){
             $row=$stmt->fetchAll(PDO::FETCH_ASSOC);
             $response=response(200,'success',$row);
           }else{
             $response=response(400,'error');
           }
        }catch(PDOException $e){
            $response=response($e->getCode(),$e->getMessage());
         }
         return $response; 
     }
}

?>