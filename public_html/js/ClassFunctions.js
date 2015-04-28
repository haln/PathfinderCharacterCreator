function displayClass(name){
    switch(name){
        case "Barbarian" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Barbarian.jpg");
            setToInnerHTML(getXML('barb_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('barb_skills'), 'lbl_class_skills');
            break;
        case "Bard" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Bard.jpg");
            setToInnerHTML(getXML('bard_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('bard_skills'), 'lbl_class_skills');
            break;
        case "Cleric" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Cleric.jpg");
            setToInnerHTML(getXML('cler_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('cler_skills'), 'lbl_class_skills');
            break;
        case "Druid" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Druid.jpg");
            setToInnerHTML(getXML('drui_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('drui_skills'), 'lbl_class_skills');
            break;
        case "Fighter" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Fighter.jpg");
            setToInnerHTML(getXML('figh_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('figh_skills'), 'lbl_class_skills');
            break;
        case "Monk" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Monk.jpg");
            setToInnerHTML(getXML('monk_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('monk_skills'), 'lbl_class_skills');
            break;
        case "Paladin" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Paladin.jpg");
            setToInnerHTML(getXML('pala_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('pala_skills'), 'lbl_class_skills');
            break;
        case "Ranger" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Ranger.jpg");
            setToInnerHTML(getXML('rang_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('rang_skills'), 'lbl_class_skills');
            break;
        case "Rogue" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Rogue.jpg");
            setToInnerHTML(getXML('rogu_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('rogu_skills'), 'lbl_class_skills');
            break;
        case "Sorcerer" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Sorcerer.jpg");
            setToInnerHTML(getXML('sorc_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('sorc_skills'), 'lbl_class_skills');
            break;
        case "Wizard" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Wizard.jpg");
            setToInnerHTML(getXML('wiza_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('wiza_skills'), 'lbl_class_skills');
            break;
    }
}