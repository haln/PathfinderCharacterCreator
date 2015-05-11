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

//A javascript method of getting url query strings and parsing it into an array
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}




$('.progress .circle').removeClass().addClass('circle');
$('.progress .bar').removeClass().addClass('bar');
$('.progress .circle:nth-of-type(' + 1 + ')').addClass('active');

function nextCondition(obj){
    var id = $(obj).attr("class");
    if (id == "next"){
        var pageNum = parseInt(document.getElementById("statusBar").value);
        pageNum++;
        document.getElementById("statusBar").setAttribute("value", pageNum);
        changeConditionClass(pageNum, "Next");
    } else {
        var pageNum = parseInt(document.getElementById("statusBar").value);
        pageNum--;
        document.getElementById("statusBar").setAttribute("value", pageNum);
        changeConditionClass(pageNum, "Back");
    }
}

function changeConditionClass(i, direction){
    var i = i;
    $('.progress .circle:nth-of-type(' + i + ')').addClass('active');
    $('.progress .circle:nth-of-type(' + (i - 1) + ')').removeClass('active').addClass('done');
    $('.progress .circle:nth-of-type(' + (i - 1) + ') .label').html('&#10003;');
    $('.progress .bar:nth-of-type(' + (i - 1) + ')').addClass('active');
    $('.progress .bar:nth-of-type(' + (i - 2) + ')').removeClass('active').addClass('done');
    
    if (direction == "Back"){
        $('.progress .circle:nth-of-type(' + (i + 1) + ')').removeClass('active');
        $('.progress .circle:nth-of-type(' + (i) + ')').removeClass('done').addClass('active');
        $('.progress .bar:nth-of-type(' + (i) + ')').removeClass('active');
        $('.progress .bar:nth-of-type(' + (i - 1) + ')').removeClass('done').addClass('active');
        $('.progress .circle:nth-of-type(' + (i) + ') .label').html(i);
    }
}

$(document).ready(function(){
    var username = localStorage.getItem("username");
    if(username !== null){
         document.getElementById("welcomeMessage").innerHTML = "Welcome, " + username;
         $("#loggedIn").removeAttr("hidden");
         $("#notlogIn").attr("hidden","hidden");
    }
  
});

function logOut(){
    localStorage.clear();
    $("#notlogIn").removeAttr("hidden");
    $("#loggedIn").attr("hidden","hidden");
}
