function getStatModifier(stat) {
    var modifier = Math.floor((stat - 10) / 2)
    return modifier;
}

function getBio(){
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
    
    var str = document.getElementById("strCon").getAttribute("alt");
    document.getElementById('result_str').innerHTML = str;
    document.getElementById('result_str_mod').innerHTML = getStatModifier(str);
    
    var dex = document.getElementById("dexCon").getAttribute("alt");
    document.getElementById('result_dex').innerHTML = dex;
    document.getElementById('result_dex_mod').innerHTML = getStatModifier(dex);
    
    var con = document.getElementById("conCon").getAttribute("alt");
    document.getElementById('result_con').innerHTML = con;
    document.getElementById('result_con_mod').innerHTML = getStatModifier(con);
    
    var int = document.getElementById("intCon").getAttribute("alt");
    document.getElementById('result_int').innerHTML = int;
    document.getElementById('result_int_mod').innerHTML = getStatModifier(int);
    
    var wis = document.getElementById("wisCon").getAttribute("alt");
    document.getElementById('result_wis').innerHTML = wis;
    document.getElementById('result_wis_mod').innerHTML = getStatModifier(wis);
    
    var cha = document.getElementById("chaCon").getAttribute("alt");
    document.getElementById('result_cha').innerHTML = cha;
    document.getElementById('result_cha_mod').innerHTML = getStatModifier(cha);
}