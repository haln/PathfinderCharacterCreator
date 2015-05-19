function getStatModifier(stat) {
    var modifier = Math.floor((stat - 10) / 2)
    return modifier;
}

function getBio() {
    var picture = document.getElementById('bio_char_image').getAttribute("src");
    document.getElementById('result_image').setAttribute("src", picture);

    var name = document.getElementById('bio_name').value;
    document.getElementById('result_name').innerHTML = name;

    var g = document.getElementById('bio_gender');
    var gender = g.options[g.selectedIndex].value;
    document.getElementById('result_gender').innerHTML = gender;

    var race = document.getElementById('selected_race').value;
    document.getElementById('result_race').innerHTML = race;

    var class_lvl = document.getElementById('selected_class').value;
    document.getElementById('result_class').innerHTML = class_lvl + " 1";

    var a = document.getElementById('alignSelect');
    var alignment = a.options[a.selectedIndex].value;
    document.getElementById('result_alignment').innerHTML = alignment;
    
    $('#result_desc').html(document.getElementById('description').value);
    
    var fc = document.getElementById('favored_class');
    var fclass = fc.options[fc.selectedIndex].value;
    document.getElementById('result_fclass').innerHTML = fclass;
    
    if (race == "Half-Elf"){ 
        var fc2 = document.getElementById('favored_class2');
        var fclass2 = fc2.options[fc2.selectedIndex].value;
        document.getElementById('result_fclass2').innerHTML = fclass2;
    } else {
        document.getElementById('result_fclass2').innerHTML = "";
    }
}

function getAttributeResults(data) {

    var str = parseInt(document.getElementById("strCon").getAttribute("alt")) +
            parseInt(getAttributeAdjust(document.getElementById('selected_race').value, "Strength", data));
    var dex = parseInt(document.getElementById("dexCon").getAttribute("alt")) +
            parseInt(getAttributeAdjust(document.getElementById('selected_race').value, "Dexterity", data));
    var con = parseInt(document.getElementById("conCon").getAttribute("alt")) +
            parseInt(getAttributeAdjust(document.getElementById('selected_race').value, "Constitution", data));
    var int = parseInt(document.getElementById("intCon").getAttribute("alt")) +
            parseInt(getAttributeAdjust(document.getElementById('selected_race').value, "Intelligence", data));
    var wis = parseInt(document.getElementById("wisCon").getAttribute("alt")) +
            parseInt(getAttributeAdjust(document.getElementById('selected_race').value, "Wisdom", data));
    var cha = parseInt(document.getElementById("chaCon").getAttribute("alt")) +
            parseInt(getAttributeAdjust(document.getElementById('selected_race').value, "Charisma", data));

    document.getElementById('result_str').innerHTML = str;
    document.getElementById('result_dex').innerHTML = dex;
    document.getElementById('result_con').innerHTML = con;
    document.getElementById('result_int').innerHTML = int;
    document.getElementById('result_wis').innerHTML = wis;
    document.getElementById('result_cha').innerHTML = cha;

    document.getElementById('result_str_mod').innerHTML = getStatModifier(str);
    document.getElementById('result_dex_mod').innerHTML = getStatModifier(dex);
    document.getElementById('result_con_mod').innerHTML = getStatModifier(con);
    document.getElementById('result_int_mod').innerHTML = getStatModifier(int);
    document.getElementById('result_wis_mod').innerHTML = getStatModifier(wis);
    document.getElementById('result_cha_mod').innerHTML = getStatModifier(cha);
    
    getClassDB();
    getArmorClass(data);
    getBasicClassDB();
    $('#result_initiative').html(document.getElementById('result_dex_mod').innerHTML);
}

function getAttributeAdjust(race, attribute, data) {
    if (race == "Human" || race == "Half-Elf" || race == "Half-Orc") {

        var a = document.getElementById('selectAttr');
        var typeSelected = a.options[a.selectedIndex].value;

        if (attribute == typeSelected) {
            return 2;
        } else {
            return 0;
        }
    } else {
        var statColumn = getStatTable(attribute);
        return data[0][statColumn];

    }
}

function getAttributeDB() {

    var strRace = document.getElementById('selected_race').value;

    $.ajax({
        url: "php/results_racial_mod.php",
        dataType: "json",
        type: "GET",
        data: {race: strRace},
        success: function (data) {
            getAttributeResults(data);
            getSpeed(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#p1").text(jqXHR.statusText);
        }
    });
}

function getStatTable(stat) {
    switch (stat) {
        case "Strength" :
            return "RACE_STR";
            break;
        case "Dexterity" :
            return "RACE_DEX";
            break;
        case "Constitution" :
            return "RACE_CON";
            break;
        case "Intelligence" :
            return "RACE_INT";
            break;
        case "Wisdom" :
            return "RACE_WIS";
            break;
        case "Charisma" :
            return "RACE_CHA";
            break;
    }
}

function getSpeed(data){
    var speed = parseInt(data[0]["RACE_SPEED"]);
    if (document.getElementById('selected_class').value == "Barbarian"){
        speed += 10;
    }
    $('#result_speed').html(speed);
}

function getClassDB() {
    var selectClass = document.getElementById('selected_class').value;
    $.ajax({
        url: "php/results_class_mod.php",
        dataType: "json",
        type: "GET",
        data: {selectClass: selectClass},
        success: function (classData) {
            getClassModifiers(classData);
            getBAB(classData);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#p1").text(jqXHR.statusText);
        }
    });
}

function getClassModifiers(classData){
    var conMod = document.getElementById('result_con_mod').innerHTML;
    var wisMod = document.getElementById('result_wis_mod').innerHTML;
    var dexMod = document.getElementById('result_dex_mod').innerHTML;
    var fort = parseInt(classData[0]["FORT"]) + parseInt(conMod);
    var reflex = parseInt(classData[0]["REFL"]) + parseInt(dexMod);
    var will = parseInt(classData[0]["WILL"]) + parseInt(wisMod);
    if (document.getElementById('selected_race').value == "Halfling"){
        fort += 1;
        reflex += 1;
        will += 1;
    }
    $('#result_fort').html(fort);
    $('#result_reflex').html(reflex);
    $('#result_will').html(will);
}

function getArmorClass(data){
    var AC = 10;
    AC += parseInt(document.getElementById('result_dex_mod').innerHTML);
    if (data[0]["RACE_SIZE"] == "S"){
        AC += 1;
    }
    if (document.getElementById('selected_class').value == "Monk"){
        AC += parseInt(document.getElementById('result_wis_mod').innerHTML);
    }
    $('#result_ac').html(AC);
    $('#result_touch_ac').html(AC);
}

function getHitPoints(basicClassData){
    var conMod = document.getElementById('result_con_mod').innerHTML;
    var hitPoints = parseInt(basicClassData[0]["CLASS_HP"]) + parseInt(conMod);
    var selectedClass = document.getElementById('selected_class').value;
    var selectedRace = document.getElementById('selected_race').value;
    if (selectedRace == "Half-Elf"){
        var favorClassSelect = document.getElementById('favored_class');
        var favoredClass1 = favorClassSelect.options[favorClassSelect.selectedIndex].value;
        var favorClassSelect2 = document.getElementById('favored_class2');
        var favoredClass2 = favorClassSelect2.options[favorClassSelect2.selectedIndex].value;
        if(selectedClass == favoredClass1 || selectedClass == favoredClass2){
            hitPoints += 1;
        }
    } else {
        var favorClassSelect = document.getElementById('favored_class');
        var favoredClass1 = favorClassSelect.options[favorClassSelect.selectedIndex].value;
        if(selectedClass == favoredClass1){
            hitPoints += 1;
        }
    }
    $('#result_hp').html(hitPoints);
}

function getBasicClassDB() {
    var selectedClass = document.getElementById('selected_class').value;
    $.ajax({
        url: "php/results_basic_class_mod.php",
        dataType: "json",
        type: "GET",
        data: {selectedClass: selectedClass},
        success: function (basicClassData) {
            getHitPoints(basicClassData);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#p1").text(jqXHR.statusText);
        }
    });
}

function getBAB(classData){
    var BAB = parseInt(classData[0]["BAB"]);
    $('#result_BAB').html(BAB);
    getCM();
}

function getCM(){
    var raceMod = 0;
    if (document.getElementById('selected_race').value == "Halfling" ||
        document.getElementById('selected_race').value == "Gnome"){
        raceMod = -1;
    }
    var CMB = parseInt(document.getElementById('result_BAB').innerHTML) + parseInt(document.getElementById('result_str_mod').innerHTML) + raceMod;
    $('#result_CMB').html(CMB);
    var CMD = CMB + parseInt(document.getElementById('result_dex_mod').innerHTML) + 10;
    $('#result_CMD').html(CMD);
}

function saveCharacter(){
    var strength     = parseInt(document.getElementById('result_str').innerHTML);
    var dexterity    = parseInt(document.getElementById('result_dex').innerHTML);
    var constitution = parseInt(document.getElementById('result_con').innerHTML);
    var intelligence = parseInt(document.getElementById('result_int').innerHTML);
    var wisdom       = parseInt(document.getElementById('result_wis').innerHTML);
    var charisma     = parseInt(document.getElementById('result_cha').innerHTML);
    var selectedRace = document.getElementById('selected_race').value;
    var barb_lvl     = getClassLevel("Barbarian");
    var bard_lvl     = getClassLevel("Bard");
    var cler_lvl     = getClassLevel("Cleric");
    var drui_lvl     = getClassLevel("Druid");
    var figh_lvl     = getClassLevel("Fighter");
    var monk_lvl     = getClassLevel("Monk");
    var pala_lvl     = getClassLevel("Paladin");
    var rang_lvl     = getClassLevel("Ranger");
    var rogu_lvl     = getClassLevel("Rogue");
    var sorc_lvl     = getClassLevel("Sorcerer");
    var wiza_lvl     = getClassLevel("Wizard");
    var char_lvl     = 1;
    var name         = document.getElementById('result_name').innerHTML;
    var gender       = document.getElementById('result_gender').innerHTML;
    var alignment    = document.getElementById('result_alignment').innerHTML;
    var desc         = document.getElementById('result_desc').innerHTML;
    var fclass       = document.getElementById('result_fclass').innerHTML;
    var fclass2      = document.getElementById('result_fclass2').innerHTML;
    var hp           = document.getElementById('result_hp').innerHTML;
    var bab          = document.getElementById('result_BAB').innerHTML;
    var fort         = document.getElementById('result_fort').innerHTML;
    var reflex       = document.getElementById('result_reflex').innerHTML;
    var will         = document.getElementById('result_will').innerHTML;
    var speed        = document.getElementById('result_speed').innerHTML;
    var picture      = document.getElementById('result_image').getAttribute("src");
    
    $.ajax({
        url: "php/results_save_character.php",
        dataType: "json",
        type: "POST",
        data: {strength: strength, dexterity: dexterity, constitution: constitution, intelligence: intelligence,
               wisdom: wisdom, charisma: charisma, selectedRace: selectedRace, barb_lvl: barb_lvl, bard_lvl: bard_lvl,
               cler_lvl: cler_lvl, drui_lvl: drui_lvl, figh_lvl: figh_lvl, monk_lvl: monk_lvl, pala_lvl: pala_lvl,
               rang_lvl: rang_lvl, rogu_lvl: rogu_lvl, sorc_lvl: sorc_lvl, wiza_lvl: wiza_lvl, char_lvl: char_lvl,
               name: name, gender: gender, alignment: alignment, desc: desc, fclass: fclass, fclass2: fclass2,
               hp: hp, bab: bab, fort: fort, reflex: reflex, will: will, speed: speed, picture: picture},
        success: function (saveCharacterData) {
            console.log(saveCharacterData);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#p1").text(jqXHR.statusText);
        }
    });
}

function getClassLevel(selectClass){
    if (selectClass == document.getElementById('selected_class').value){
        return 1;
    }
    return 0;
}