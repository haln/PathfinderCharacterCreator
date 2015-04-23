function getStatDescription(stat) {
    var textbox = document.getElementById("txt_description");
    textbox.value = "";
}

function getImage(num) {
    var image = "Images/Dice/" + num + ".png";
    return image;
}

function rollStat(){
    var nums = [];
    var lowest = 6;
    var removeIndex;
    for (index = 0; index < 4; index++){
        nums[index] = rollD6(1);
        if (nums[index] <= lowest){
            lowest = nums[index];
            removeIndex = index;
        }
    }
    
    nums.splice(removeIndex, 1);
    var result = 0;
    for (i = 0; i < nums.length; i++){
        result += nums[i];
    }
    return result;
}

function rollCharacter() {
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