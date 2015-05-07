<?php
$dsn = 'mysql:host=p3nlmysql61plsk.secureserver.net;port=3306;dbname=pathfinder';
$username = 'pathfinder';
$password = 'project2015';
$methodType = $_SERVER['REQUEST_METHOD'];
if($methodType == 'GET'){
    if(isset($_GET["query"])){
        $query = $_GET["query"];
        try{
            $conn = new PDO($dsn, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $statement = $conn->query($query);
            die($statement->fetchAll());
        } catch (PDOException $ex) {
            error_log($e->getMessage());
        }
    }
    else{
        die("Error occured.");
    }
}
if($methodType == 'POST'){
    if(isset($_POST["query"])){
        if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
            die();
        }
        $query = $_POST["query"];
        try{
            $conn = new PDO($dsn, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $statement = $conn->query($query);
            die($statement->fetchAll());
        } catch (PDOException $ex) {
            error_log($e->getMessage());
        }
    }
    else{
        die("Error occured.");
    }
}
?>