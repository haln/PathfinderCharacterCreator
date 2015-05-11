<?php
include 'db_login.php';
$methodType = $_SERVER['REQUEST_METHOD'];
if($methodType === 'POST'){
    if(isset($_POST["user"])){
        if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
            die();
        }

        $acc_userID = $_POST["user"];
        
        try{
            $conn = new PDO($dsn, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            $statement = $conn->prepare('SELECT USER_CHAR.CHAR_ID, CHAR_NAME FROM USER_CHAR JOIN CHARACTERS WHERE USER_ID = :user AND CHARACTERS.CHAR_ID = USER_CHAR.CHAR_ID');
            $statement->execute(array(
                ':user' => $acc_userID
            ));
            $results = $statement->fetchAll();
            if(empty($results)){
                die(false);
            }
            echo json_encode($results);
            die(); 
            
        } catch (PDOException $e) {
            error_log($e->getMessage());
            die(false);
        }

    }
}
?>