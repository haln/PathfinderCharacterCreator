<?php
require 'db_login.php';
$methodType = $_SERVER["REQUEST_METHOD"];
if($methodType === "POST"){
    if(isset($_POST["password"]) && isset($_POST["userID"])){
        if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
            die();
        }
        $newpassword = $_POST["password"];
        $userID = $_POST["userID"];
        try{
            $conn = new PDO($dsn, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $statement = $conn->prepare('UPDATE USERS SET USER_PASS = :pass WHERE USER_ID = :user');
            $statement->execute(array(
                ':user' => $userID,
                ':pass' => $newpassword
            ));
            echo "Password changed";
            die(true); 
        } catch (PDOException $e) {
            error_log($e->getMessage());
            die(false);
        }
    }
}
?>