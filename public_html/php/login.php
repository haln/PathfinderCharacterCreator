<?php
include 'db_login.php';
$methodType = $_SERVER['REQUEST_METHOD'];
if($methodType === 'POST'){
    if(isset($_POST["username"]) && isset($_POST["password"])){
        if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
            die();
        }

        $acc_user = $_POST["username"];
        $acc_pass = $_POST["password"];
        
        try{
            $conn = new PDO($dsn, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            $statement = $conn->prepare('SELECT USER_ID WHERE USER_NAME = :username AND USER_PASS = :password');
            $statement->execute(array(
                ':username' => $acc_user,
                ':password' => $acc_pass
            ));
            
            $result = $statement->fetch();
            die($result); 
            
        } catch (PDOException $e) {
            error_log($e->getMessage());
            die('An error occurred');
        }

    }
}
?>