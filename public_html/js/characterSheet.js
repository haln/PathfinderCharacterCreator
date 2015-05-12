$(document).ready(function(){
    $char = getParameterByName("char");
    if($char){
        $.get("php/characters.php", {char: $char}).done(function(data){
            if(data){
                data = JSON.parse(data);
                console.log(data);
                $("#charName").prepend(data["CHAR_NAME"]);
                for(key in data){
                    if(key !== "CHAR_NAME" && key !== "CHAR_ID"){
                        if(data[key] === '0'){
                            $("#"+key).css("display","none");
                        }
                        else{
                            $("#"+key).append(data[key]);
                        }
                    }
                }
            }
            else{
                $("#charlist").append("No characters");
            }
        });
    }
});