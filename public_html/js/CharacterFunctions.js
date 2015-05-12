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
    getBasicClassDB()
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
}

function getHitPoints(basicClassData){
    var conMod = document.getElementById('result_con_mod').innerHTML;
    var hitPoints = parseInt(basicClassData[0]["CLASS_HP"]) + parseInt(conMod);
    $('#result_hp').html(hitPoints);
}

function getBasicClassDB() {
    var selectedClass = document.getElementById('selected_class').value;
    $.ajax({
        url: "php/results_basic_class_mod.php",
        dataType: "json",
        type: "GET",
        data: {selectClass: selectClass},
        success: function (basicClassData) {
            getHitPoints(basicClassData);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#p1").text(jqXHR.statusText);
        }
    });
}