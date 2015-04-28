function getStatDescription(stat) {
    var textbox = document.getElementById("txt_description");
    textbox.value = "";
}

function getImage(num) {
    var image = "Images/Dice/" + num + ".png";
    return image;
}

function rollStat() {
    var nums = [];
    var lowest = 6;
    var removeIndex;
    for (index = 0; index < 4; index++) {
        nums[index] = rollD6(1);
        if (nums[index] <= lowest) {
            lowest = nums[index];
            removeIndex = index;
        }
    }

    nums.splice(removeIndex, 1);
    var result = 0;
    for (i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}

function resetStats() {
    resetContainer("strCon");
    resetContainer("dexCon");
    resetContainer("conCon");
    resetContainer("intCon");
    resetContainer("wisCon");
    resetContainer("chaCon");

    resetDiceRoll("stat1");
    resetDiceRoll("stat2");
    resetDiceRoll("stat3");
    resetDiceRoll("stat4");
    resetDiceRoll("stat5");
    resetDiceRoll("stat6");
}

function resetContainer(id) {
    document.getElementById(id).setAttribute("src", "Images/Dice/container.png");
    document.getElementById(id).setAttribute("ondragover", "allowDrop(event)");
    document.getElementById(id).setAttribute("draggable", "false");
    document.getElementById(id).setAttribute("ondragstart", "");
    document.getElementById(id).setAttribute("ondrop", "drop(event)");
}

function resetDiceRoll(id) {
    document.getElementById(id).setAttribute("ondragover", "");
    document.getElementById(id).setAttribute("draggable", "true");
    document.getElementById(id).setAttribute("ondragstart", "drag(event)");
    document.getElementById(id).setAttribute("ondrop", "");
}

function rollCharacter() {
    resetStats();

    var roll1 = document.getElementById("stat1");
    roll1.setAttribute("src", getImage(rollStat()));

    var roll2 = document.getElementById("stat2");
    roll2.setAttribute("src", getImage(rollStat()));

    var roll3 = document.getElementById("stat3");
    roll3.setAttribute("src", getImage(rollStat()));

    var roll4 = document.getElementById("stat4");
    roll4.setAttribute("src", getImage(rollStat()));

    var roll5 = document.getElementById("stat5");
    roll5.setAttribute("src", getImage(rollStat()));

    var roll6 = document.getElementById("stat6");
    roll6.setAttribute("src", getImage(rollStat()));
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("image", ev.target.src);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("image");
    var droppedItem = document.getElementById(ev.dataTransfer.getData("id"));
    ev.target.setAttribute("src", data);
    ev.target.setAttribute("ondragover", "");
    ev.target.setAttribute("draggable", "true");
    ev.target.setAttribute("ondragstart", "drag(event)");
    ev.target.setAttribute("ondrop", "");

    droppedItem.setAttribute("src", "Images/Dice/container.png");
    droppedItem.setAttribute("ondragover", "allowDrop(event)");
    droppedItem.setAttribute("draggable", "false");
    droppedItem.setAttribute("ondragstart", "");
    droppedItem.setAttribute("ondrop", "drop(event)");

    ev.preventDefault();
}

function getXML(type) {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "XML/pathfinderXML.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        console.log(xmlDoc);
        var description = xmlDoc.getElementsByTagName(type)[0].childNodes[0].nodeValue;
        document.getElementById("txt_description").setAttribute("value", description);
    }