<?php

require_once("mysql.php");
require_once('response.php');
class supplier{

    //選取特定id
    function getSup(){
       $response=openDB();
       if($response['status']!=200)
            return $response;
       $con=$response['result'];
       if(isset($_POST['id'])){
         $sql="select * from supplier where id=:id";
         $stmt=$con->prepare($sql);
         $result=$stmt->execute(array(":id"=>$_POST['id']));
       }else{
         $sql="select * from supplier";
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

    function newSup(){
        $response=openDB();
        if($response['status']!=200)
             return $response;
        $con=$response['result'];
       
        $sql="select * from supplier";
        try{
           $stmt=$con->prepare($sql);
           $result=$stmt->execute();
           if($result){
             $row=$stmt->fetchAll(PDO::FETCH_ASSOC);             
           }else{
             $response=response(400,'error');
           }
        }catch(PDOException $e){
            $response=response($e->getCode(),$e->getMessage());
         }

        $id=sprintf("S%03d",count($row)+1);
        $name=$_POST['name'];
        $tax_id=$_POST['tax_id'];
        $contact=$_POST['contact'];
        $tel=$_POST['tel'];
        $addr=$_POST['addr'];
        $coop=0
       
       ;

        $sql="INSERT INTO supplier(id,name,tax_id,contact,tel,addr,coop) VALUES(
            :id, :name, :tax_id,:contact,:tel,:addr,:coop)";
        try{
           $stmt=$con->prepare($sql);
           $result=$stmt->execute(array(":id"=>$id,
           ":name"=>$name,
           ":tax_id"=>$tax_id,
           ":contact"=>$contact,
           ":tel"=>$tel,
           ":addr"=>$addr,
           ":coop"=>$coop
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
        $contact=$_POST['contact'];
        $tel=$_POST['tel'];
        $addr=$_POST['addr'];
        $coop=$_POST['coop'];
       

        $sql="UPDATE supplier SET name=:name,tel=:tel,addr=:addr,
        tax_id=:tax_id,coop=:coop,contact=:contact WHERE id=:id"; 
        try{
           $stmt=$con->prepare($sql);
           $result=$stmt->execute(array(":name"=>$name,
           ":tel"=>$tel,
           ":addr"=>$addr,
           ":tax_id"=>$tax_id,
           ":coop"=>$coop,
           ":contact"=>$contact,
           ":id"=>$id));
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

     

}
