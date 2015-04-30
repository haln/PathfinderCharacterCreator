function displayRace(name){
    switch(name){
        case "Dwarf" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/Dwarf.jpg");
            document.getElementById('selected_race').setAttribute("value", "Dwarf");
            setToInnerHTML(getXML('dwar_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('dwar_abil'), 'lbl_race_abil');
            break;
            
        case "Elf" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/Elf.jpg");
            document.getElementById('selected_race').setAttribute("value", "Elf");
            setToInnerHTML(getXML('elf_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('elf_abil'), 'lbl_race_abil');
            break;
            
        case "Gnome" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/Gnome.jpg");
            document.getElementById('selected_race').setAttribute("value", "Gnome");
            setToInnerHTML(getXML('gnom_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('gnom_abil'), 'lbl_race_abil');
            break;
            
        case "Half-Elf" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/HalfElf.jpg");
            document.getElementById('selected_race').setAttribute("value", "Half-Elf");
            setToInnerHTML(getXML('helf_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('helf_abil'), 'lbl_race_abil');
            break;
            
        case "Half-Orc" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/HalfOrc.jpg");
            document.getElementById('selected_race').setAttribute("value", "Half-Orc");
            setToInnerHTML(getXML('horc_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('horc_abil'), 'lbl_race_abil');
            break;
            
        case "Halfling" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/Halfling.jpg");
            document.getElementById('selected_race').setAttribute("value", "Halfling");
            setToInnerHTML(getXML('half_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('half_abil'), 'lbl_race_abil');
            break;
            
        case "Human" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/Human.jpg");
            document.getElementById('selected_race').setAttribute("value", "Human");
            setToInnerHTML(getXML('huma_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('huma_abil'), 'lbl_race_abil');
            break;
    }
}
