<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie ie6 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->
    <head>
        <title>Pathfinder Character Creator - Account Creation Confirmation</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/animations.css">
    </head>
    <body>
        <!-- Top Bar Menu -->
        <form id="signin" action="">
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">
            <input type="submit">
        </form>
        <a href='profile.html'>My Profile</a>
        <!-- The Navigation Menu -->
        <nav>
            <div id="header">
                <h1>Pathfinder Character Creator</h1>
                <ul id="navigation">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="characterWizard.html">Character Wizard</a></li>
                    <li><a href="signup.html">Account Signup</a></li>
                </ul>
            </div>
        </nav>
        <div id="profile" class="content">
            <h2>Account Signup</h2>
            <p>
                <!-- Connect to the database and insert a user account -->
                <?php
                $dsn = "mysql:host=p3nlmysql61plsk.secureserver.net;port=3306;dbname=pathfinder";
                $username = "pathfinder";
                $password = "project2015";

                //Check if the account fields have something
                if(isset($_POST["username"]) &&
                        isset($_POST["password"])){
                    $acc_user = strtolower($_POST["username"]);
                    $acc_pass = $_POST["password"];
                    //Don't allow an empty string to be passed
                    if(empty($_POST["email"])){
                        $acc_email = "no-email";
                    }
                    else{
                        $acc_email = $_POST["email"];
                    }
                    
                    //Attempt a PDO connection to the database and insert a new account
                    try{
                        $conn = new PDO($dsn, $username, $password);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        echo "<script>console.log('Connected successfully')</script>"; 

                        $rowStatement = $conn->query('SELECT COUNT(*) FROM USERS');
                        $rowCount = $rowStatement->rowCount();

                        error_log("rowCount = " . $rowCount);
                        echo "<script>console.log('rowCount = " . $rowCount . "')</script>";

                        $checkStatement = $conn->prepare('SELECT USER_NAME, USER_EMAIL FROM USERS WHERE USER_NAME = :username OR USER_EMAIL = :email');
                        $checkStatement->execute(array(
                            ':username' => $acc_user,
                            ':email' => $acc_email
                        ));
                        $checkName = $checkStatement->fetchColumn(0);
                        $checkEmail = $checkStatement->fetchColumn(1);
                        
                        //If the username and the email are not already in use, insert a new account
                        if($checkName != null && $checkName != "" && $checkEmail != null && $checkEmail != ""){
                            $statement = $conn->prepare('INSERT INTO USERS VALUES (:userid,:username, :password, :email)');
                            $statement->execute(array(
                                ':userid' => $rowCount,
                                ':username' => $acc_user,
                                ':password' => $acc_pass,
                                ':email' => $acc_email
                            ));
                            echo "Your Pathfinder Character Creator account has been created.<br/>";
                            echo "Please enjoy your time on the site!";
                        }
                        else{
                            echo "The username or email is already registered with this site.";
                        }
                        
                        $conn = null;
                    } catch (PDOException $e) {
                        echo "Account has not been created, an error has occured. ";
                        error_log($e->getMessage());
                        echo "<script>console.log('" . $e->getMessage() . "')</script>";
                    }
                }
                ?>
            </p>
        </div>
    </body>
</html>
