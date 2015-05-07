<?php
$dsn = 'mysql:host=p3nlmysql61plsk.secureserver.net;port=3306;dbname=pathfinder';
$username = 'pathfinder';
$password = 'project2015';
$methodType = $_SERVER['REQUEST_METHOD'];
if($methodType === 'POST'){
    if(isset($_POST["email"])){
        if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
            die();
        }

        try{
            $conn = new PDO($dsn, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $email = strtolower($_POST["email"]);
            $statement = $conn->prepare('SELECT USER_ID FROM USERS WHERE USER_EMAIL = :email');
            $statement->execute(array(
                ':email' => $email
            ));
            $user_exists = $statement->rowCount();

            if($user_exists){
                die('Email is already in use');
            }
            else{
                die('');
            }

        } catch (PDOException $e) {
            error_log($e->getMessage());
            die('An error occurred');
        }

    }
}
?>