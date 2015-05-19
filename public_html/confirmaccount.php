<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie ie6 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->
    <head>
        <title>Pathfinder Character Creator - Account Login</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/animations.css">
        <link rel="stylesheet" href="css/login.css">
    </head>

    <body>

        <!-- The Navigation Menu -->

         <div id="header">
            <a class="pathfinderLogo" href="index.html">
                <span class="header-logo-default"></span>
                
            </a>
            <nav id="menu-nav">
                <a class="link-home" href="index.html">Home</a>
                <a class="link-wizard" href="characterWizard.html">Create a Character</a>

            </nav>

            <div id="user-nav">
                <div id="loggedIn" hidden="hidden">
                    <label id="welcomeMessage" >                   
                    </label>
                    <a class="link-logout" onclick="logOut()">Log Out</a>
                    <a class="link-myprofile" href="profile.html">My Profile</a>
                </div>
                <div id="notlogIn" >
                    <a id="loginModalLink" class="link-login" href="#loginModal">Log In</a>
                    <a id="loginLink" class="link-login" href="login.html">Log In</a>
                    <a class="link-signup" href="signup.html">Sign Up</a>
                </div>
            </div>
             
            <div id="loginModal" class="modalDialog">
                <div>
                    <a href="#closeModal" title="Close Window" class="closeModal">X</a>
                    <h2>Account Login</h2>
                    <form id="signin" onsubmit="event.preventDefault(); return validateForm();">
                        <fieldset name="signupFieldset">
                            <legend>Log In</legend>
                            <label for="username" id="usernameLabel">Username</label>
                            <input type="text" id="username" name="username" required="required">
                            <br/>
                            <label for="password" id="passwordLabel">Password</label>
                            <input type="password" id="password" name="password" required="required">
                            <br/>
                            <input type="submit" id="submitBtn">
                        </fieldset>
                    </form>
                    <span id="loginMsg"></span>
                </div>
            </div>
        </div>
        
        <!-- Account Signup Content  -->
        
        <div id="profile" class="statscontent">
            <h2>Account Signup</h2>
            <p>
                <!-- Connect to the database and insert a user account -->
                <?php
                require 'php/db_login.php';
                include 'php/javaConsole.php';

                //Check if the account fields have something
                if(isset($_POST["username"]) && isset($_POST["password"])){
                    $acc_user = strtolower($_POST["username"]);
                    $acc_pass = $_POST["password"];
                    //Don't allow an empty string to be passed
                    if(empty($_POST["email"])){
                        $acc_email = "no-email";
                    }
                    else{
                        $acc_email = $_POST["email"];
                    }
                    echo "<script>console.log('accemail is " + $acc_email + "')</script>"; 
                    
                    //Attempt a PDO connection to the database and insert a new account
                    try{
                        //Setup a PDO connectoin to the database
                        $conn = new PDO($dsn, $username, $password);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        echo "<script>console.log('Connected successfully')</script>"; 

                        //Checks what the next USER_ID should be
                        $rowStatement = $conn->query('SELECT COUNT(*) FROM USERS');
                        $rowCount = $rowStatement->fetchColumn();

                        writeToConsole("rowCount = " . $rowCount);
                        echo "<script>console.log('rowCount = " . $rowCount . "')</script>";

                        //Insert a new account
                        $statement = $conn->prepare('INSERT INTO USERS VALUES (:userid, :username, :password, :email, :pic)');
                        $statement->execute(array(
                            ':userid' => $rowCount,
                            ':username' => $acc_user,
                            ':password' => $acc_pass,
                            ':email' => $acc_email,
                            ':pic' => NULL
                        ));
                        echo "Your Pathfinder Character Creator account has been created.<br/>";
                        echo "Please enjoy your time on the site!";
                    } catch (PDOException $e) {
                        echo "Account has not been created, an error has occured. ";
                        echo "<script>console.log('" + $e->getMessage() + "')</script>";
                    }
                }
                ?>
            </p>
        </div>
        <script src="js/jquery-2.1.3.min.js"></script>
        <script src="js/login.js"></script>
    </body>
</html>