<?php
$dsn = 'mysql:host=p3nlmysql61plsk.secureserver.net;port=3306;dbname=pathfinder';
$username = 'pathfinder';
$password = 'project2015';

if(isset($_POST["username"])){
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
        die();
    }
    
    try{
        $conn = new PDO($dsn, $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $username = strtolower($_POST["username"]);
        $statement = $conn->prepare('SELECT USER_ID FROM USERS WHERE USER_NAME = :username');
        $statement->execute(array(
            ':username' => $username
        ));
        $user_exists = $statement->rowCount();

        if($user_exists){
            die('Username is not available');
        }
        else{
            die('Username is available');
        }
        
    } catch (PDOException $e) {
        error_log($e->getMessage());
        die('Had an exception');
    }
    
}
?>