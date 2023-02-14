<?php

require_once("mysql.php");

class supplier{
    function getSup(){
        $response = openDB();
        if ($response['status'] == 200)
            $con = $response['result'];
            $sql="SELECT * FROM supplier";
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
        return $response;    
        }
    function newSup()
    {
        $response = openDB();
        if ($response['status'] == 200)
            $con = $response['result'];
        if (isset($_POST['sup_name'],$_POST['sup_id'])) {
            $id = $_POST['sup_id'];
            $name = $_POST['sup_name'];
            $sql="INSERT INTO supplier(id,name) VALUES (:id, :name)";
            $stmt=$con->prepare($sql);
            $result=$stmt->execute(array(":id"=>$id,":name"=>$name));
            if($result){
                $count=$stmt->rowCount();
                if($count<1){
                    $response['status'] = 204;
                    $response['message'] ='Insert error';
                  
                }else{
                    $response['status'] = 200;
                    $response['message'] ='Insert success';  
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

    function updateSup(){
        $id = $_POST['sup_id'];
        $name = $_POST['sup_name'];
        $response = openDB();
        if ($response['status'] == 200)
            $con = $response['result'];
        if (isset($_POST['sup_id'],$_POST['sup_name'])) {
           
            //$sql = "Update supplier set name = ? where id = ?";
            //$sql = "UPDATE `supplier` SET `name`=?  WHERE id=?";
            $sql = "UPDATE supplier SET name=? WHERE id=?";
            $stmt = $con->prepare($sql);
            $result = $stmt->execute(array( $name,$id));

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


    function removeSup()
    {
        $response = openDB();
        if ($response['status'] == 200)
            $con = $response['result'];
        if (isset($_POST['id'])) {
            $id = $_POST['id'];
            //$sql="Delete from supplier where id=:id[]";
            $sql = "DELETE FROM `supplier` WHERE id=?";

            $stmt=$con->prepare($sql);
            $result=$stmt->execute(array($id));
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