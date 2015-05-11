<?php
include 'db_login.php';
$methodType = $_SERVER['REQUEST_METHOD'];
if($methodType === 'GET'){
    if(isset($_GET["char"])){
        if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
            die();
        }

        $charID = $_GET["char"];
        
        try{
            $conn = new PDO($dsn, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            $statement = $conn->prepare('SELECT * FROM CHARACTERS WHERE CHAR_ID = :char');
            $statement->execute(array(
                ':char' => $charID
            ));
            $results = $statement->fetch(PDO::FETCH_ASSOC);
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