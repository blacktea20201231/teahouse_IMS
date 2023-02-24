<?php

require_once("mysql.php");

class material{
    function getMat(){
        $response = openDB();
        if ($response['status'] == 200)
            $con = $response['result'];
                $sql="SELECT material.id As 'ID',material.name AS 'Name',supplier.name AS 'Supplier',mat_detail.price 
                AS 'price',mat_detail.unit AS 'unit' 
                FROM material,mat_detail,supplier 
                WHERE material.id=mat_detail.mat_id AND mat_detail.sup_id=supplier.id;";                
                $stmt=$con->prepare($sql);
                $result=$stmt->execute();
            
            if($result){
                $row=$stmt->fetchAll(PDO::FETCH_ASSOC);
                $response['status'] = 200;
                $response['message'] ='success';
                $response['result'] = $row;
            }else{
                $response['status'] = 400;
                $response['message'] ='error';
            }
        return ($response);    
        }
    function newMat()
    {
        $response = openDB();
        if ($response['status'] == 200)
            $con = $response['result'];
        
            $mat_id = $_POST['mat_id'];
            $mat_name = $_POST['mat_name'];            
            
            $sql="INSERT INTO material(id,name) VALUES (:id,:name)";
            $stmt=$con->prepare($sql);
            $result=$stmt->execute(array(":id"=>$mat_id,":name"=>$mat_name));
            if($result){
                $count=$stmt->rowCount();
                if($count<1){
                    $response['status'] = 204;
                    $response['message'] ='insert error';
                  
                }else{
                    $response['status'] = 200;
                    $response['message'] ='Insert success';  
                }              
            }else{
                $response['status'] = 400;
                $response['message'] ='error';
            }
        
       return $response;    
    }

    function updateMat(){
        $response = openDB();
        if ($response['status'] == 200)
            $con = $response['result'];
        if (isset($_POST['name'])) {
            $id = $_POST['id'];
            $name = $_POST['name'];
            $sql="Update material set name=:name where id=:id";
            $stmt=$con->prepare($sql);
            $result=$stmt->execute(array(":name"=>$name, ":id"=>$id));
            if($result){
                $count=$stmt->rowCount();
                if($count<1){
                    $response['status'] = 204;
                    $response['message'] ='Update error';
                  
                }else{
                    $response['status'] = 200;
                    $response['message'] ='Update success';  
                }              
            }else{
                $response['status'] = 400;
                $response['message'] ='error';
            }
        }else{
            $response['status'] = 200;
            $response['message'] ='Please input data';
        }
       return $response;    
    }


    function removeMat()
    {
        $response = openDB();
        $response = openDB();
        if ($response['status'] == 200)
            $con = $response['result'];
        if (isset($_POST['id'])) {
            $id = $_POST['id'];
            $sql="Delete from material where id=:id";
            $stmt=$con->prepare($sql);
            $result=$stmt->execute(array(":id"=>$id));
            if($result){
                $count=$stmt->rowCount();
                if($count<1){
                    $response['status'] = 204;
                    $response['message'] ='Delete error';
                  
                }else{
                    $response['status'] = 200;
                    $response['message'] ='Delete success';  
                }              
            }else{
                $response['status'] = 400;
                $response['message'] ='error';
            }
        }else{
            $response['status'] = 200;
            $response['message'] ='Please input data';
        }
       return $response;    
    }
}

?>