<?php

require_once("mysql.php");
require_once("response.php");

class good{
    function getGood(){
        $response=openDB();
        if($response['status']!=200)
            return $response;
        $con=$response['result'];
        $sql="select * from good";
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

    function newGood(){
        $response=openDB();
        if($response['status']!=200)
            return $response;
        try{
            $id=$_POST['id'];
            $name=$_POST['name'];
            $price=$_POST['price'];
            $unit=$_POST['unit'];
            $safe_stock=$_POST['safe_stock'];
            $supplier_id=$_POST['supplier_id'];
            $sql="INSERT INTO good(id,name,price,unit,safe_stock,supplier_id) 
                  VALUES(:id ,:name ,:price ,:unit ,:safe_stock ,:supplier_id)";
            $con=$response['result'];
            $stmt=$con->prepare($sql);
            $result=$stmt->execute(array(":id"=>$id, ":name"=>$name, ":price"=>$price,
                          ":unit"=>$unit,":safe_stock"=>$safe_stock ,":supplier_id"=>$supplier_id));
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

    function updateGood(){
        $response=openDB();
        if($response['status']!=200)
            return $response;
        try{
            $id=$_POST['id'];
            $name=$_POST['name'];
            $price=$_POST['price'];
            $unit=$_POST['unit'];
            $safe_stock=$_POST['safe_stock'];
            $supplier_id=$_POST['supplier_id'];
            $sql="UPDATE good SET name=:name ,price=:price ,unit=:unit ,
                  safe_stock=:safe_stock WHERE id=:id and supplier_id=:supplier_id"; 
            $con=$response['result'];
            $stmt=$con->prepare($sql);
            $result=$stmt->execute(array(":name"=>$name, ":price"=>$price,
                          ":unit"=>$unit,":safe_stock"=>$safe_stock 
                          ,":id"=>$id,":supplier_id"=>$supplier_id));
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

    function removeGood(){

    }
}

?>