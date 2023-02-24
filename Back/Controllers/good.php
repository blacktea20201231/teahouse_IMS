<?php

require_once("mysql.php");
require_once("response.php");

class good{
    function getGood(){
        $response=openDB();
       if($response['status']!=200)
            return $response;
       $con=$response['result'];
       if(isset($_POST['id'])){
         $sql="select * from good where id=:id";
         $stmt=$con->prepare($sql);
         $result=$stmt->execute(array(":id"=>$_POST['id']));
       }else{
         $sql="select * from good";
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

    function getGood_detail(){
        $response=openDB();
        if($response['status']!=200)
             return $response;
        $con=$response['result'];
        if(isset($_POST['id'])){
          $sql="select * from good where supplier_id=:id";
          $stmt=$con->prepare($sql);
          $result=$stmt->execute(array(":id"=>$_POST['id']));
        }else{
          $sql="select * from good";
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

    function getGood_detail2(){
        // $sql='SELECT good.*,supplier.name AS supplier_name
        // FROM good,supplier
        // WHERE good.supplier_id=supplier.id AND good.id=:id';
        $response=openDB();
        if($response['status']!=200)
             return $response;
        $con=$response['result'];
        if(isset($_POST['id'])){
          $sql="SELECT good.*,supplier.name AS sup_name 
          FROM good,supplier 
          WHERE good.supplier_id=supplier.id AND good.id=:id;";
          $stmt=$con->prepare($sql);
          $result=$stmt->execute(array(":id"=>$_POST['id']));
        }else{
          $sql="SELECT good.*,supplier.name AS sup_name 
          FROM good,supplier 
          WHERE good.supplier_id=supplier.id";
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

    function getGood_unit(){
        $response=openDB();
        if($response['status']!=200)
             return $response;
        $con=$response['result'];         
          $sql="SELECT good.id,good.unit FROM good GROUP BY good.id;";
          $stmt=$con->prepare($sql);
          $result=$stmt->execute();
             
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



  

    function newGood(){
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
           }else{
             $response=response(400,'error');
           }
        }catch(PDOException $e){
            $response=response($e->getCode(),$e->getMessage());
        }


        try{
            $id=sprintf("G%03d",count($row)+1);
            $name=$_POST['name'];
            $unit=$_POST['unit'];
            $safe_stock=$_POST['safe_stock'];
            $supplier_id=$_POST['supplier_id'];
            $sql="INSERT INTO good(id,name,unit,safe_stock,supplier_id) 
                  VALUES(:id ,:name,:unit ,:safe_stock ,:supplier_id)";
            $con=$response['result'];
            $stmt=$con->prepare($sql);
            $result=$stmt->execute(array(":id"=>$id, ":name"=>$name,":unit"=>$unit,
            ":safe_stock"=>$safe_stock ,":supplier_id"=>$supplier_id));
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
            $unit=$_POST['unit'];
            $safe_stock=$_POST['safe_stock'];
            $supplier_id=$_POST['supplier_id'];
            $sql="UPDATE good SET 
            name=:name ,
            unit=:unit ,
            safe_stock=:safe_stock, 
            supplier_id=:supplier_id 
            WHERE id=:id"; 
            $con=$response['result'];
            $stmt=$con->prepare($sql);
            $result=$stmt->execute(array(":name"=>$name,":unit"=>$unit,
            ":safe_stock"=>$safe_stock,":supplier_id"=>$supplier_id,":id"=>$id));
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
        $response=openDB();
        if($response['status']!=200)
            return $response;
        try{
            $id=$_POST['id'];          
            $sql="DELETE FROM good WHERE id=:id"; 
            $con=$response['result'];
            $stmt=$con->prepare($sql);
            $result=$stmt->execute(array(":id"=>$id));
            if($result){
                $count=$stmt->rowCount();
                if($count<1){
                    $response=response(204,'Delete failed');
                }else{
                    $response=response(200,'Delete succeeded');
                }
            }else{
                $response=response(400,"SQL Server Error");
            }

        }catch(PDOException $e){
            $response=response($e->getCode(),$e->getMessage());
        }
        return $response;
    }
}

?>