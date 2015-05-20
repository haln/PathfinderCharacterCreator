<?php
require 'db_login.php';
$methodType = $_SERVER["REQUEST_METHOD"];
var_dump($_POST);
if($methodType == "POST"){
    if(        isset($_POST["strength"])     && isset($_POST["dexterity"]) && isset($_POST["constitution"]) 
            && isset($_POST["intelligence"]) && isset($_POST["wisdom"])    && isset($_POST["charisma"])
            && isset($_POST["selectedRace"]) && isset($_POST["barb_lvl"])  && isset($_POST["bard_lvl"])
            && isset($_POST["cler_lvl"])     && isset($_POST["drui_lvl"])  && isset($_POST["figh_lvl"])
            && isset($_POST["monk_lvl"])     && isset($_POST["pala_lvl"])  && isset($_POST["rang_lvl"])
            && isset($_POST["rogu_lvl"])     && isset($_POST["sorc_lvl"])  && isset($_POST["wiza_lvl"])
            && isset($_POST["char_lvl"])     && isset($_POST["name"])      && isset($_POST["gender"])
            && isset($_POST["alignment"])    && isset($_POST["desc"])      && isset($_POST["fclass"])
            && isset($_POST["fclass2"])      && isset($_POST["hp"])        && isset($_POST["bab"])
            && isset($_POST["fort"])         && isset($_POST["reflex"])    && isset($_POST["will"])
            && isset($_POST["speed"])        && isset($_POST["picture"])
            ){ 
        if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
            die();
        }
        try {
            $conn = new PDO($dsn, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            $rowStatement = $conn->query('SELECT COUNT(*) FROM CHARACTERS');
            $rowCount = $rowStatement->fetchColumn();
            
            $strength     = $_POST["strength"];
            $dexterity    = $_POST["dexterity"];
            $constitution = $_POST["constitution"];
            $intelligence = $_POST["intelligence"];
            $wisdom       = $_POST["wisdom"];
            $charisma     = $_POST["charisma"];
            $selectedRace = $_POST["selectedRace"];
            $barb_lvl     = $_POST["barb_lvl"];
            $bard_lvl     = $_POST["bard_lvl"];
            $cler_lvl     = $_POST["cler_lvl"];
            $drui_lvl     = $_POST["drui_lvl"];
            $figh_lvl     = $_POST["figh_lvl"];
            $monk_lvl     = $_POST["monk_lvl"];
            $pala_lvl     = $_POST["pala_lvl"];
            $rang_lvl     = $_POST["rang_lvl"];
            $rogu_lvl     = $_POST["rogu_lvl"];
            $sorc_lvl     = $_POST["sorc_lvl"];
            $wiza_lvl     = $_POST["wiza_lvl"];
            $char_lvl     = $_POST["char_lvl"];
            $name         = $_POST["name"];
            $gender       = $_POST["gender"];
            $alignment    = $_POST["alignment"];
            $desc         = $_POST["desc"];
            $fclass       = $_POST["fclass"];
            $fclass2      = $_POST["fclass2"];
            $hp           = $_POST["hp"];
            $bab          = $_POST["bab"];
            $fort         = $_POST["fort"];
            $reflex       = $_POST["reflex"];
            $will         = $_POST["will"];
            $speed        = $_POST["speed"];
            $picture      = $_POST["picture"]; 

            $statement = $conn->prepare('INSERT INTO CHARACTERS VALUES (:char_ID, :strength, :dexterity, :constitution, '
                    . ':intelligence, :wisdom, :charisma, :selectedRace, :barb_lvl, :bard_lvl, :cler_lvl, :drui_lvl, '
                    . ':figh_lvl, :monk_lvl, :pala_lvl, :rang_lvl, :rogu_lvl, :sorc_lvl, :wiza_lvl, :char_lvl, :name, '
                    . ':gender, :alignment, :desc, :fclass, :fclass2, :hp, :bab, :fort, :reflex, :will, :speed), :picture');
            
            $statement->execute(array(
                ':char_ID'      => $rowCount,
                ':strength'     => $strength,
                ':dexterity'    => $dexterity,
                ':constitution' => $constitution,
                ':intelligence' => $intelligence,
                ':wisdom'       => $wisdom,
                ':charisma'     => $charisma,
                ':selectedRace' => $selectedRace,
                ':barb_lvl'     => $barb_lvl,
                ':bard_lvl'     => $bard_lvl,
                ':cler_lvl'     => $cler_lvl,
                ':drui_lvl'     => $drui_lvl,
                ':figh_lvl'     => $figh_lvl,
                ':monk_lvl'     => $monk_lvl,
                ':pala_lvl'     => $pala_lvl,
                ':rang_lvl'     => $rang_lvl,
                ':rogu_lvl'     => $rogu_lvl,
                ':sorc_lvl'     => $sorc_lvl,
                ':wiza_lvl'     => $wiza_lvl,
                ':char_lvl'     => $char_lvl,
                ':name'         => $name,
                ':gender'       => $gender,
                ':alignment'    => $alignment,
                ':desc'         => $desc,
                ':fclass'       => $fclass,
                ':fclass2'      => $fclass2,
                ':hp'           => $hp,
                ':bab'          => $bab,
                ':fort'         => $fort,
                ':reflex'       => $reflex,
                ':will'         => $will,
                ':speed'        => $speed,
                ':picture'      => $picture
            ));
            die(true); 
        } catch (PDOException $e) {
            error_log($e->getMessage());
            die(false);
        } catch (Exception $e) {
            error_log($e->getMessage());
            die(false);
        }
    }
}
?>