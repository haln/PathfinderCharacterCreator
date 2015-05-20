function mobileReset(){
    $("#strCon").attr("class","drop-target");
    $("#strCon").attr("alt","container");
    $("#dexCon").attr("class","drop-target");
    $("#dexCon").attr("alt","container");
    $("#conCon").attr("class","drop-target");
    $("#conCon").attr("alt","container");
    $("#intCon").attr("class","drop-target");
    $("#intCon").attr("alt","container");
    $("#wisCon").attr("class","drop-target");
    $("#wisCon").attr("alt","container");
    $("#chaCon").attr("class","drop-target");
    $("#chaCon").attr("alt","container");

}

function mobileRollCharacter(){
    mobileReset();
    
    var rollVal = rollStat();
    $("#stat1").attr("src", getImage(rollVal));
    $("#stat1").attr("alt", rollVal);
    
    rollVal = rollStat();
    $("#stat2").attr("src", getImage(rollVal));
    $("#stat2").attr("alt", rollVal);
    
    rollVal = rollStat();
    $("#stat3").attr("src", getImage(rollVal));
    $("#stat3").attr("alt", rollVal);
    
    rollVal = rollStat();
    $("#stat4").attr("src", getImage(rollVal));
    $("#stat4").attr("alt", rollVal);
    
    rollVal = rollStat();
    $("#stat5").attr("src", getImage(rollVal));
    $("#stat5").attr("alt", rollVal);
    
    rollVal = rollStat();
    $("#stat6").attr("src", getImage(rollVal));
    $("#stat6").attr("alt", rollVal);
}

$(document).ready(function(){
    var screenwidth =  (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(screenwidth <= 980 ){
        //Dice roller
        $("#rollDiceButton").attr("onclick","mobileRollCharacter()");
        //Stat numbers
        $("#stat1").attr("class","pep");
        $("#stat2").attr("class","pep");
        $("#stat3").attr("class","pep");
        $("#stat4").attr("class","pep");
        $("#stat5").attr("class","pep");
        $("#stat6").attr("class","pep");
        //Containers
        $("#strCon").attr("class","drop-target");
        $("#dexCon").attr("class","drop-target");
        $("#conCon").attr("class","drop-target");
        $("#intCon").attr("class","drop-target");
        $("#wisCon").attr("class","drop-target");
        $("#chaCon").attr("class","drop-target");
        //start pep for touch systems
        $('.pep').pep();
        
        $(".pep").pep({
            droppable: ".drop-target",
            stop: function(ev,obj){
                var altValue = ev.dataTransfer.getData("alt");
                ev.target.setAttribute("alt", altValue);
                ev.preventDefault();
            }
        });
    }
    else{
        //Dice roller
        $("#rollDiceButton").attr("onclick","rollCharacter()");
        $("#rollDiceButton").attr("draggable","false");
        //Stat numbers
        $("#stat1").attr("ondragstart","drag(event)");
        $("#stat1").attr("draggable","true");
        $("#stat1").attr("alt","");
        $("#stat1").attr("ondragover","");
        $("#stat1").attr("ondrop","");
        $("#stat2").attr("ondragstart","drag(event)");
        $("#stat2").attr("draggable","true");
        $("#stat2").attr("alt","");
        $("#stat2").attr("ondragover","");
        $("#stat2").attr("ondrop","");
        $("#stat3").attr("ondragstart","drag(event)");
        $("#stat3").attr("draggable","true");
        $("#stat3").attr("alt","");
        $("#stat3").attr("ondragover","");
        $("#stat3").attr("ondrop","");
        $("#stat4").attr("ondragstart","drag(event)");
        $("#stat4").attr("draggable","true");
        $("#stat4").attr("alt","");
        $("#stat4").attr("ondragover","");
        $("#stat4").attr("ondrop","");
        $("#stat5").attr("ondragstart","drag(event)");
        $("#stat5").attr("draggable","true");
        $("#stat5").attr("alt","");
        $("#stat5").attr("ondragover","");
        $("#stat5").attr("ondrop","");
        $("#stat6").attr("ondragstart","drag(event)");
        $("#stat6").attr("draggable","true");
        $("#stat6").attr("alt","");
        $("#stat6").attr("ondragover","");
        $("#stat6").attr("ondrop","");
        //Containers
        $("#strCon").attr("ondragover","allowDrop(event)");
        $("#strCon").attr("ondrop","drop(event)");
        $("#strCon").attr("draggable","false");
        $("#strCon").attr("alt","container");
        $("#strCon").attr("ondragstart","");
        $("#dexCon").attr("ondragover","allowDrop(event)");
        $("#dexCon").attr("ondrop","drop(event)");
        $("#dexCon").attr("draggable","false");
        $("#dexCon").attr("alt","container");
        $("#dexCon").attr("ondragstart","");
        $("#conCon").attr("ondragover","allowDrop(event)");
        $("#conCon").attr("ondrop","drop(event)");
        $("#conCon").attr("draggable","false");
        $("#conCon").attr("alt","container");
        $("#conCon").attr("ondragstart","");
        $("#intCon").attr("ondragover","allowDrop(event)");
        $("#intCon").attr("ondrop","drop(event)");
        $("#intCon").attr("draggable","false");
        $("#intCon").attr("alt","container");
        $("#intCon").attr("ondragstart","");
        $("#wisCon").attr("ondragover","allowDrop(event)");
        $("#wisCon").attr("ondrop","drop(event)");
        $("#wisCon").attr("draggable","false");
        $("#wisCon").attr("alt","container");
        $("#wisCon").attr("ondragstart","");
        $("#chaCon").attr("ondragover","allowDrop(event)");
        $("#chaCon").attr("ondrop","drop(event)");
        $("#chaCon").attr("draggable","false");
        $("#chaCon").attr("alt","container");
        $("#chaCon").attr("ondragstart","");
    }
});