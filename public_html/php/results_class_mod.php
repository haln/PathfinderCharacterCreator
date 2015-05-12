<?php
$dsn = 'mysql:host=p3nlmysql61plsk.secureserver.net;port=3306;dbname=pathfinder';
$username = 'pathfinder';
$password = 'project2015';
$methodType = $_SERVER['REQUEST_METHOD'];
if($methodType === 'GET'){
    if(isset($_GET["selectClass"])){
        if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
          // die();
        }

        try{
            $conn = new PDO($dsn, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            $selectClass = ($_GET["selectClass"]);
            $statement = $conn->prepare("SELECT * FROM :selectClass");
            $statement->execute(array(
                ':selectClass' => $selectClass
            ));

            $data = $statement->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data, JSON_FORCE_OBJECT);
        } catch (PDOException $e) {
            error_log($e->getMessage());
            die('');
        }
    }
}
?>