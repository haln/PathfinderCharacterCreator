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
    document.getElementById(id).setAttribute("alt", "container");
}

function resetDiceRoll(id) {
    document.getElementById(id).setAttribute("ondragover", "");
    document.getElementById(id).setAttribute("draggable", "true");
    document.getElementById(id).setAttribute("ondragstart", "drag(event)");
    document.getElementById(id).setAttribute("ondrop", "");
    document.getElementById(id).setAttribute("alt", "");
}

function rollCharacter() {
    resetStats();

    var roll1 = document.getElementById("stat1");
    var rollValue1 = rollStat();
    roll1.setAttribute("src", getImage(rollValue1));
    roll1.setAttribute("alt", rollValue1);

    var roll2 = document.getElementById("stat2");
    var rollValue2 = rollStat();
    roll2.setAttribute("src", getImage(rollValue2));
    roll2.setAttribute("alt", rollValue2);

    var roll3 = document.getElementById("stat3");
    var rollValue3 = rollStat();
    roll3.setAttribute("src", getImage(rollValue3));
    roll3.setAttribute("alt", rollValue3);

    var roll4 = document.getElementById("stat4");
    var rollValue4 = rollStat();
    roll4.setAttribute("src", getImage(rollValue4));
    roll4.setAttribute("alt", rollValue4);

    var roll5 = document.getElementById("stat5");
    var rollValue5 = rollStat();
    roll5.setAttribute("src", getImage(rollValue5));
    roll5.setAttribute("alt", rollValue5);

    var roll6 = document.getElementById("stat6");
    var rollValue6 = rollStat();
    roll6.setAttribute("src", getImage(rollValue6));
    roll6.setAttribute("alt", rollValue6);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("image", ev.target.src);
    ev.dataTransfer.setData("alt", ev.target.alt);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("image");
    var altValue = ev.dataTransfer.getData("alt");
    var droppedItem = document.getElementById(ev.dataTransfer.getData("id"));
    ev.target.setAttribute("src", data);
    ev.target.setAttribute("ondragover", "");
    ev.target.setAttribute("draggable", "true");
    ev.target.setAttribute("ondragstart", "drag(event)");
    ev.target.setAttribute("ondrop", "");
    ev.target.setAttribute("alt", altValue);

    droppedItem.setAttribute("src", "Images/Dice/container.png");
    droppedItem.setAttribute("ondragover", "allowDrop(event)");
    droppedItem.setAttribute("draggable", "false");
    droppedItem.setAttribute("ondragstart", "");
    droppedItem.setAttribute("ondrop", "drop(event)");
    droppedItem.setAttribute("alt", "container");

    ev.preventDefault();
}

function assignStats(){
    var strength = document.getElementById("strCon").getAttribute("alt");
    var dexterity = document.getElementById("dexCon").getAttribute("alt");
    var constitution = document.getElementById("conCon").getAttribute("alt");
    var intelligence = document.getElementById("intCon").getAttribute("alt");
    var wisdom = document.getElementById("wisCon").getAttribute("alt");
    var charisma = document.getElementById("chaCon").getAttribute("alt");
}

function getHref(condition){
    if (document.getElementById("strCon").getAttribute("alt") != "container" &&
        document.getElementById("dexCon").getAttribute("alt") != "container" &&
        document.getElementById("conCon").getAttribute("alt") != "container" &&
        document.getElementById("intCon").getAttribute("alt") != "container" &&
        document.getElementById("wisCon").getAttribute("alt") != "container" &&
        document.getElementById("chaCon").getAttribute("alt") != "container") {
        document.getElementById("statNext").setAttribute("href", "#race");
        nextCondition(condition);
    } else {
        document.getElementById("statNext").setAttribute("href", "#");
    }
}

function goToRace(Id) {
    getHref(Id);
    assignStats();
}