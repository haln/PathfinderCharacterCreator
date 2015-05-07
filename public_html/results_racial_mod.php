<?php
$dsn = 'mysql:host=p3nlmysql61plsk.secureserver.net;port=3306;dbname=pathfinder';
$username = 'pathfinder';
$password = 'project2015';
$methodType = $_SERVER['REQUEST_METHOD'];
if($methodType === 'GET'){
    if(isset($_GET["race"])){
        if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
            die();
        }

        try{
            $conn = new PDO($dsn, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $race = ($_GET["race"]);
            $statement = $conn->prepare('SELECT * FROM RACE WHERE RACE_NAME = :race');
            $statement->execute(array(
                ':race' => $race
            ));
            die($statement->fetchAll());
        } catch (PDOException $e) {
            error_log($e->getMessage());
            die('');
        }
    }
}
?>