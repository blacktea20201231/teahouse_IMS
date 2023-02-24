<?php
require_once("mysql.php");
class Users
{
    public function getUser()
    {
        $response = openDB();
        if ($response['status'] == 200) {
            $conn = $response['result'];
            if (isset($_POST['id'])) {
                $id = $_POST['id'];
                $sql = "SELECT  *  FROM  `users` WHERE `id`=?";
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute(array($id));
            } else {
                $sql = "SELECT  *  FROM  `users`";
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute();
            }
            if ($result) {
                $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
                $response['status'] = 200; //OK
                $response['message'] = "查詢成功";
                $response['result'] = $rows;
            } else {
                $response['status'] = 400; //Bad Request
                $response['message'] = "SQL錯誤";
            }
        }
        return ($response);
    }
    public function newUser()
    {
        $id = $_POST['id'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        $response = openDB();
        if ($response['status'] == 200) {
            $conn = $response['result'];
            $sql = "INSERT INTO `user` (`id`, `password`, `email`, `phone`) VALUES (?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array($id, $password, $email, $phone));
            if ($result) {
                $count = $stmt->rowCount();
                if ($count < 1) {
                    $response['status'] = 204; //No Content
                    $response['message'] = "新增失敗";
                } else {
                    $response['status'] = 200; //OK
                    $response['message'] = "新增成功";
                }
            } else {
                $response['status'] = 400; //Bad Request
                $response['message'] = "SQL錯誤";
            }
        }
        return ($response);
    }
    function removeUser()
    {
        $id = $_POST['id'];

        $response = openDB();
        if ($response['status'] == 200) {
            $conn = $response['result'];
            $sql = "DELETE FROM `user` WHERE id=?";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array($id));
            if ($result) {
                $count = $stmt->rowCount();
                if ($count < 1) {
                    $response['status'] = 204; //No Content
                    $response['message'] = "刪除失敗";
                } else {
                    $response['status'] = 200; //OK
                    $response['message'] = "刪除成功";
                }
            } else {
                $response['status'] = 400; //Bad Request
                $response['message'] = "SQL錯誤";
            }
        }
        return ($response);
    }
    function updateUser()
    {
        $id = $_POST['id'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        $response = openDB();
        if ($response['status'] == 200) {
            $conn = $response['result'];
            $sql = "UPDATE `user` SET `password`=?, `email`=?, `phone`=? WHERE id=?";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array($password, $email, $phone, $id));
            if ($result) {
                $count = $stmt->rowCount();
                if ($count < 1) {
                    $response['status'] = 204; //No Content
                    $response['message'] = "更新失敗";
                } else {
                    $response['status'] = 200; //OK
                    $response['message'] = "更新成功";
                }
            } else {
                $response['status'] = 400; //Bad Request
                $response['message'] = "SQL錯誤";
            }
        }
        return ($response);
    }
}
