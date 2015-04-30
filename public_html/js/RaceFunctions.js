function displayRace(name){
    switch(name){
        case "Dwarf" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/Dwarf.jpg");
            setToInnerHTML(getXML('dwar_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('dwar_abil'), 'lbl_race_abil');
            break;
            
        case "Elf" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/Elf.jpg");
            setToInnerHTML(getXML('elf_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('elf_abil'), 'lbl_race_abil');
            break;
            
        case "Gnome" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/Gnome.jpg");
            setToInnerHTML(getXML('gnom_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('gnom_abil'), 'lbl_race_abil');
            break;
            
        case "Half-Elf" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/HalfElf.jpg");
            setToInnerHTML(getXML('helf_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('helf_abil'), 'lbl_race_abil');
            break;
            
        case "Half-Orc" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/HalfOrc.jpg");
            setToInnerHTML(getXML('horc_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('horc_abil'), 'lbl_race_abil');
            break;
            
        case "Halfling" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/Halfling.jpg");
            setToInnerHTML(getXML('half_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('half_abil'), 'lbl_race_abil');
            break;
            
        case "Human" :
            //document.getElementById('raceImage').setAttribute("src", "Images/Race/Human.jpg");
            setToInnerHTML(getXML('huma_desc'), 'lbl_race_desc');
            setToInnerHTML(getXML('huma_abil'), 'lbl_race_abil');
            break;
    }
}
