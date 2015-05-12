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
            $("#error").html("");
            window.location.href = "index.html";
        }
        else {
            $("#error").html("Username or password is incorrect");
            return false;
        }
    });
}
