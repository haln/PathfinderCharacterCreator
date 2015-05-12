$(document).ready(function () {
    $("#username").keyup(function (e) {
        var user_name = $(this).val();
        console.log(user_name);
        if (user_name.length < 4) {
            $("#usernameError").html('');
            return;
        }
        var statement = 'SELECT USER_ID FROM USERS WHERE USER_NAME = "' + user_name + '"';
        console.log(statement);
        if (user_name.length >= 4) {
            $("#usernameError").html('Checking if username available...');
            /*
             $.post("db_conn.php", {thequery: statement, select: "USER_ID", from: "USERS", where: "USER_NAME = \""+user_name+"\""}).done(function(data){
             console.log(data);
             $("#usernameError").html(data);
             });
             */
            $.post("php/check_username.php", {username: user_name}).done(function (data) {
                console.log(data);
                $("#usernameError").html(data);
            });
        }
    });
    $("#email").keyup(function (e) {
        var e_mail = $(this).val();
        console.log(e_mail);
        $.post("php/check_email.php", {email: e_mail}).done(function (data) {
            console.log(data);
            $("#emailError").html(data);
        });
    });
});