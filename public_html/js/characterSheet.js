$(document).ready(function(){
    $char = getParameterByName("char");
    if($char){
        $.get("php/characters.php", {char: $char}).done(function(data){
            if(data){
                data = JSON.parse(data);
                console.log(data);
                $("#charName").html(data["CHAR_NAME"]);
                for(key in data){
                    if(key !== "CHAR_NAME" && key !== "CHAR_ID"){
                        $("#characterDetails").append("<span id=" + key + ">" + key + ": "+data[key] + "</span><br/>");
                    }
                }
            }
            else{
                $("#charlist").append("No characters");
            }
        });
    }
});