$(document).ready(function(){
    if($(window).width() <= 480){
        $("#loginModalLink").hide();
        $("#loginLink").show();
    }
    else{
        $("#loginLink").hide();
        $("#loginModalLink").show();
    }
});
$(document).trigger('resize');

function validateForm() {
    var user_name = $("#username").val();
    var pass_word = $("#password").val();
    $.post("php/login.php", {username: user_name, password: pass_word}).done(function (data) {
        if (data) {
            data = JSON.parse(data);
            console.log("Returned data: " + data);
            console.log("UserID: " + data["USER_ID"]);
            localStorage.setItem("username", user_name);
            localStorage.setItem("password", pass_word);
            localStorage.setItem("userID", data["USER_ID"]);
            $("#loginMsg").html("Successfully logged in");
            //Now that we are logged in, change the header bar
            $("#welcomeMessage").html("Welcome, " + user_name);
            $("#loggedIn").removeAttr("hidden");
            $("#notlogIn").attr("hidden","hidden");
            return true;
        }
        else {
            $("#loginMsg").html("Username or password is incorrect");
            return false;
        }
    });
}
