<?php

require_once('mysql.php');
require_once("response.php");

class Input{

    //選取特定id
    function getInput(){
       $response=openDB();
       if($response['status']!=200)
            return $response;
       $con=$response['result'];
       if(isset($_POST['id'])){
         $sql="select * from input where id=:id";
         $stmt=$con->prepare($sql);
         $result=$stmt->execute(array(":id"=>$_POST['id']));
       }else{
         $sql="select * from input";
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
    function newInput(){
        $response=openDB();
        if($response['status']!=200)
             return $response;
        $con=$response['result'];
        $good_id=$_POST['good_id'];
        $date=date("Y-m-d");
        $amount=$_POST['amount'];
        $price=$_POST['price'];
        $due=$_POST['due'];
        $note=$_POST['note'];

        $sql="INSERT INTO `input` (`id`, `good_id`, `date`, `amount`, `price`, `due`,`note`) 
        VALUES (NULL, :good_id, :date,:amount, :price, :due,:note);";
        
        try{
           $stmt=$con->prepare($sql);
           $result=$stmt->execute(array(":good_id"=>$good_id,
           ":date"=>$date,
           ":amount"=>$amount,
           ":price"=>$price,
           ":due"=>$due,
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

     function updateSup(){
        $response=openDB();
        if($response['status']!=200)
             return $response;
        $con=$response['result'];
        $id=$_POST['id'];
        $name=$_POST['name'];
        $tax_id=$_POST['tax_id'];
        $tel=$_POST['tel'];
        $addr=$_POST['addr'];
       

        $sql="UPDATE supplier SET name=:name,tel=:tel,addr=:addr,
        tax_id=:tax_id WHERE id=:id"; 
        try{
           $stmt=$con->prepare($sql);
           $result=$stmt->execute(array(":name"=>$name,
           ":tel"=>$tel,":addr"=>$addr,":tax_id"=>$tax_id,":id"=>$id));
           if($result){
              $response=response(200,'success');
           }else{
             $response=response(400,'error');
           }
        }catch(PDOException $e){
            $response=response($e->getCode(),$e->getMessage());
         }
         return $response; 
     }

     function removeSup(){
        $response=openDB();
        if($response['status']!=200)
             return $response;
        $con=$response['result'];
        $id=$_POST['id'];
       
        $sql="Delete from supplier where id=?";
        try{
           $stmt=$con->prepare($sql);
           $result=$stmt->execute(array($id));
           if($result){
              $response=response(200,'success');
           }else{
             $response=response(400,'error');
           }
        }catch(PDOException $e){
            $response=response($e->getCode(),$e->getMessage());
         }
         return $response; 
     }

     function getInputWithName(){
      $response=openDB();
      if($response['status']!=200)
           return $response;
      $con=$response['result'];
      if(isset($_POST['id'])){
        $sql="select * from input where id=:id";
        $stmt=$con->prepare($sql);
        $result=$stmt->execute(array(":id"=>$_POST['id']));
      }else{
        $sql="SELECT `input`.`good_id`, `input`.`date`,`input`.`amount`,`input`.`price`,`good`.`name`,`good`.`unit`
        FROM `input`,`good` 
        WHERE `input`.`good_id` = `good`.`id`
        Order BY `input`.`date`";
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
