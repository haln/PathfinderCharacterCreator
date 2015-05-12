function changePassword(){
    if($("#newPass").val() === $("confirmNewPass").val()){
        $.post("changePassword.php", {password: $("#newPass").val(), userID: localStorage.getItem("userID")}).done(function(data){
            $("#newPassLabel").html(data);
        });
    }
}

