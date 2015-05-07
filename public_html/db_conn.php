<?php
$dsn = 'mysql:host=p3nlmysql61plsk.secureserver.net;port=3306;dbname=pathfinder';
$username = 'pathfinder';
$password = 'project2015';


    if(isset($_POST["thequery"])){
        if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
            die();
        }
        
        try{
            $conn = new PDO($dsn, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $query = $_POST["thequery"] + "";
            $statement = $conn->query($query);
            /*
            $statement = $conn->prepare('SELECT :select FROM :from WHERE :where;');  //error here
            $statement->execute(array(
                ':select' => $_POST["select"],
                ':from' => $_POST["from"],
                ':where' => $_POST["where"]
            ));
            $statement->execute();
            */
            die("After statement execution");

            die($statement->fetchAll());
        } catch (PDOException $ex) {
            error_log($e->getMessage());
        }
    }
    else{
        die("POST Error occured.");
    }

?>