$(document).ready(function(){
    //Change the page to show the user's username
    $username = localStorage.getItem("username");
    if($username){
        $("#user_name").html($username);
    }
});

function changePassword(){
    var newpass = $("#newPass").val();
    var confirmnewpass = $("#confirmNewPass").val();
    console.log("New pass: "+newpass);
    console.log("Confirm: "+confirmnewpass);
    //If the two passwords match, ask the database to change the user's password
    if(newpass === confirmnewpass){
        $.post("php/changePassword.php", {password: newpass, userID: localStorage.getItem("userID")}).done(function(data){
            $("#newPassLabel").html("Password successfully changed");
            return true;
        });
        $("#newPassLabel").html("Unsuccessful attempt at changing password");
        return false;
    }
}

