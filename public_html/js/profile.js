$(document).ready(function(){
    //Change the profile to show the user's username
    $username = localStorage.getItem("username");
    if($username){
        $("#user_name").html($username);
    }

    //Gets the list of characters that this user has and make links to them
    $user = localStorage.getItem("userID");
    if($user){
        $.post("php/userchars.php", {user: $user}).done(function(data){
            if(data){
                data = JSON.parse(data);
                console.log(data);
                for(var k in data) {
                    $("#charlist").append("<li><a href=characterSheet.html?char=" + data[k]["CHAR_ID"] + ">" + data[k]["CHAR_NAME"] + "<\/script>");
                 }
            }
            else{
                $("#charlist").append("No characters");
            }
        });
    }
});