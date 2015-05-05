function getXML(type) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "XML/pathfinderXML.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var description = xmlDoc.getElementsByTagName(type)[0].childNodes[0].nodeValue;
    return description;
}

function setToValue(description, target) {
    document.getElementById(target).setAttribute("value", description);
}

function setToInnerHTML(description, target) {
    document.getElementById(target).innerHTML = description;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}




$('.progress .circle').removeClass().addClass('circle');
$('.progress .bar').removeClass().addClass('bar');
$('.progress .circle:nth-of-type(' + 1 + ')').addClass('active');

function nextCondition(obj) {

    var id = $(obj).attr("ID");
    switch (id) {
        case "statNext":
            var i = 2;
            changeConditionClass(i);
            break;
        case "raceNext":
            var i = 3;           
            changeConditionClass(i);          
            break;
        case "classNext":
            var i = 4;
            changeConditionClass(i);
            break;
        case "basicsNext":
            var i = 5;
            changeConditionClass(i);
            break;
        case "resultNext":
            var i = 6;
            changeConditionClass(i);
            alert("The character is saved in 'my profile'! ");
            break;
        default:
            break;
    }
}
function changeConditionClass(i){
    var i = i;
    $('.progress .circle:nth-of-type(' + i + ')').addClass('active');
    $('.progress .circle:nth-of-type(' + (i - 1) + ')').removeClass('active').addClass('done');
    $('.progress .circle:nth-of-type(' + (i - 1) + ') .label').html('&#10003;');
    $('.progress .bar:nth-of-type(' + (i - 1) + ')').addClass('active');
    $('.progress .bar:nth-of-type(' + (i - 2) + ')').removeClass('active').addClass('done');
}
