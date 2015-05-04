function getBio() {
    if ((document.getElementById('selected_race').getAttribute("value")) == "Half-Elf") {
        document.getElementById('favored_class2').removeAttribute("hidden");
    } else {
        document.getElementById('favored_class2').setAttribute("hidden", "hidden");
    }
    getAlignments(document.getElementById("selected_class").getAttribute("value"));
}

function getAlignments(classType){
    switch(classType){
        case "Barbarian" :
            document.getElementById("alignSelect").innerHTML =
                "<option>Neutral Good</option>\n\
                 <option>Chaotic Good</option>\n\
                 <option>True Neutral</option>\n\
                 <option>Chaotic Neutral</option>\n\
                 <option>Neutral Evil</option>\n\
                 <option>Chaotic Evil</option>\n\
                ";
            break;
            
        case "Druid" :
            document.getElementById("alignSelect").innerHTML =
                "<option>Neutral Good</option>\n\
                 <option>Lawful Neutral</option>\n\
                 <option>True Neutral</option>\n\
                 <option>Chaotic Neutral</option>\n\
                 <option>Neutral Evil</option>\n\
                ";
            break;
            
        case "Monk" :
            document.getElementById("alignSelect").innerHTML =
                "<option>Lawful Good</option>\n\
                 <option>Lawful Neutral</option>\n\
                 <option>Lawful Evil</option>\n\
                ";
            break;
            
        case "Paladin" :
            document.getElementById("alignSelect").innerHTML =
                "<option>Lawful Good</option>\n\
                ";
            break;
            
        default :
            document.getElementById("alignSelect").innerHTML =
                "<option>Lawful Good</option>\n\
                 <option>Neutral Good</option>\n\
                 <option>Chaotic Good</option>\n\
                 <option>Lawful Neutral</option>\n\
                 <option>True Neutral</option>\n\
                 <option>Chaotic Neutral</option>\n\
                 <option>Lawful Evil</option>\n\
                 <option>Neutral Evil</option>\n\
                 <option>Chaotic Evil</option>\n\
                ";
            break;
    }
}

