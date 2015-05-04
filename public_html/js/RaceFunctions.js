function displayRace(name){
    selectAttribute(name);
    switch(name){
        case "Dwarf" :
            document.getElementById('raceImage').setAttribute("src", "Images/Race/Dwarf.png");
            document.getElementById('selected_race').setAttribute("value", "Dwarf");
            setToInnerHTML(getXML('dwar_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('dwar_abil'), 'lbl_race_abil');
            break;
            
        case "Elf" :
            document.getElementById('raceImage').setAttribute("src", "Images/Race/Elf.png");
            document.getElementById('selected_race').setAttribute("value", "Elf");
            setToInnerHTML(getXML('elf_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('elf_abil'), 'lbl_race_abil');
            break;
            
        case "Gnome" :
            document.getElementById('raceImage').setAttribute("src", "Images/Race/Gnome.png");
            document.getElementById('selected_race').setAttribute("value", "Gnome");
            setToInnerHTML(getXML('gnom_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('gnom_abil'), 'lbl_race_abil');
            break;
            
        case "Half-Elf" :
            document.getElementById('raceImage').setAttribute("src", "Images/Race/Half-elf.png");
            document.getElementById('selected_race').setAttribute("value", "Half-Elf");
            setToInnerHTML(getXML('helf_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('helf_abil'), 'lbl_race_abil');
            break;
            
        case "Half-Orc" :
            document.getElementById('raceImage').setAttribute("src", "Images/Race/Half-orc.png");
            document.getElementById('selected_race').setAttribute("value", "Half-Orc");
            setToInnerHTML(getXML('horc_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('horc_abil'), 'lbl_race_abil');
            break;
            
        case "Halfling" :
            document.getElementById('raceImage').setAttribute("src", "Images/Race/Halfling.png");
            document.getElementById('selected_race').setAttribute("value", "Halfling");
            setToInnerHTML(getXML('half_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('half_abil'), 'lbl_race_abil');
            break;
            
        case "Human" :
            document.getElementById('raceImage').setAttribute("src", "Images/Race/Human.png");
            document.getElementById('selected_race').setAttribute("value", "Human");
            setToInnerHTML(getXML('huma_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('huma_abil'), 'lbl_race_abil');
            break;
    }
}

function selectAttribute(race){
    if (race == "Half-Elf" || race == "Human" || race == "Half-Orc") {
        document.getElementById("selectAttr").removeAttribute("hidden");
    } else {
        document.getElementById("selectAttr").setAttribute("hidden", "hidden");
    }
}
