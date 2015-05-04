function displayClass(name){
    switch(name){
        case "Barbarian" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Barbarian.jpg");
            document.getElementById('selected_class').setAttribute("value", "Barbarian");
            setToInnerHTML(getXML('barb_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('barb_skills'), 'lbl_class_skills');
            setToInnerHTML(getXML('barb_align'), 'lbl_class_align');
            setToInnerHTML('12', 'lbl_class_hp');
            setToInnerHTML('4', 'lbl_class_skillPoints');
            break;
        case "Bard" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Bard.jpg");
            document.getElementById('selected_class').setAttribute("value", "Bard");
            setToInnerHTML(getXML('bard_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('bard_skills'), 'lbl_class_skills');
            setToInnerHTML(getXML('bard_align'), 'lbl_class_align');
            setToInnerHTML('8', 'lbl_class_hp');
            setToInnerHTML('6', 'lbl_class_skillPoints');
            break;
        case "Cleric" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Cleric.jpg");
            document.getElementById('selected_class').setAttribute("value", "Cleric");
            setToInnerHTML(getXML('cler_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('cler_skills'), 'lbl_class_skills');
            setToInnerHTML(getXML('cler_align'), 'lbl_class_align');
            setToInnerHTML('8', 'lbl_class_hp');
            setToInnerHTML('2', 'lbl_class_skillPoints');
            break;
        case "Druid" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Druid.jpg");
            document.getElementById('selected_class').setAttribute("value", "Druid");
            setToInnerHTML(getXML('drui_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('drui_skills'), 'lbl_class_skills');
            setToInnerHTML(getXML('drui_align'), 'lbl_class_align');
            setToInnerHTML('8', 'lbl_class_hp');
            setToInnerHTML('4', 'lbl_class_skillPoints');
            break;
        case "Fighter" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Fighter.jpg");
            document.getElementById('selected_class').setAttribute("value", "Fighter");
            setToInnerHTML(getXML('figh_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('figh_skills'), 'lbl_class_skills');
            setToInnerHTML(getXML('figh_align'), 'lbl_class_align');
            setToInnerHTML('10', 'lbl_class_hp');
            setToInnerHTML('2', 'lbl_class_skillPoints');
            break;
        case "Monk" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Monk.jpg");
            document.getElementById('selected_class').setAttribute("value", "Monk");
            setToInnerHTML(getXML('monk_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('monk_skills'), 'lbl_class_skills');
            setToInnerHTML(getXML('monk_align'), 'lbl_class_align');
            setToInnerHTML('8', 'lbl_class_hp');
            setToInnerHTML('4', 'lbl_class_skillPoints');
            break;
        case "Paladin" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Paladin.jpg");
            document.getElementById('selected_class').setAttribute("value", "Paladin");
            setToInnerHTML(getXML('pala_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('pala_skills'), 'lbl_class_skills');
            setToInnerHTML(getXML('pala_align'), 'lbl_class_align');
            setToInnerHTML('10', 'lbl_class_hp');
            setToInnerHTML('2', 'lbl_class_skillPoints');
            break;
        case "Ranger" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Ranger.jpg");
            document.getElementById('selected_class').setAttribute("value", "Ranger");
            setToInnerHTML(getXML('rang_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('rang_skills'), 'lbl_class_skills');
            setToInnerHTML(getXML('rang_align'), 'lbl_class_align');
            setToInnerHTML('10', 'lbl_class_hp');
            setToInnerHTML('6', 'lbl_class_skillPoints');
            break;
        case "Rogue" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Rogue.jpg");
            document.getElementById('selected_class').setAttribute("value", "Rogue");
            setToInnerHTML(getXML('rogu_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('rogu_skills'), 'lbl_class_skills');
            setToInnerHTML(getXML('rogu_align'), 'lbl_class_align');
            setToInnerHTML('8', 'lbl_class_hp');
            setToInnerHTML('8', 'lbl_class_skillPoints');
            break;
        case "Sorcerer" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Sorcerer.jpg");
            document.getElementById('selected_class').setAttribute("value", "Sorcerer");
            setToInnerHTML(getXML('sorc_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('sorc_skills'), 'lbl_class_skills');
            setToInnerHTML(getXML('sorc_align'), 'lbl_class_align');
            setToInnerHTML('6', 'lbl_class_hp');
            setToInnerHTML('2', 'lbl_class_skillPoints');
            break;
        case "Wizard" :
            document.getElementById('classImage').setAttribute("src", "Images/Class/Wizard.jpg");
            document.getElementById('selected_class').setAttribute("value", "Wizard");
            setToInnerHTML(getXML('wiza_desc'), 'lbl_class_desc');
            setToInnerHTML(getXML('wiza_skills'), 'lbl_class_skills');
            setToInnerHTML(getXML('wiza_align'), 'lbl_class_align');
            setToInnerHTML('6', 'lbl_class_hp');
            setToInnerHTML('2', 'lbl_class_skillPoints');
            break;
    }
}
