function getXML(type) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "XML/pathfinderXML.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var description = xmlDoc.getElementsByTagName(type)[0].childNodes[0].nodeValue;
    return description;
}

function setToValue(description, target){
    document.getElementById(target).setAttribute("value", description);
}

function setToInnerHTML(description, target){
    document.getElementById(target).innerHtml = description;
}