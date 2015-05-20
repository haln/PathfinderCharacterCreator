/*
function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
}

function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}
*/

var containerImage = "Images/Dice/container.png";

$(document).ready(function(){
    var screenwidth =  (window.innerWidth > 0) ? window.innerWidth : screen.width;
    //init();
    if(screenwidth <= 980 ){
        $("#rollDiceButton").attr("onclick","mobileRollCharacter()");
        $("#rollDiceButton").attr("draggable","false");
        $("#strCon").attr("class","drop-target");
        $("#dexCon").attr("class","drop-target");
        $("#conCon").attr("class","drop-target");
        $("#intCon").attr("class","drop-target");
        $("#wisCon").attr("class","drop-target");
        $("#chaCon").attr("class","drop-target");
        $(".statDieButton").draggable({
            snap: ".drop-target",
            snapMode: "inner"
        });
        $( ".drop-target" ).droppable({
            drop: function(event,ui) {
                $(this).attr("alt",ui.draggable.attr("alt"));
                $(this).attr("class","not-drop-target");
            },
            out: function(event,ui){
                if($(this).attr("class") === "not-drop-target"){
                    $(this).attr("alt","container");
                    $(this).attr("class","drop-target");
                }
            }
        });
        /*
        //Setup variables
        var constrainedID;
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
        
        
        //start pep for touch systems        
        $(".pep").pep({
            constrainTo: function(){
                return constrainedID;
            },
            droppable: ".drop-target",
            drag: function(){
 
            },
            stop: function(ev,obj){
                if(this.activeDropRegions.length === 1){
                    
                }
                ev.preventDefault();
            }
        });
        
        */
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
$(".statDieButton").data("left", $(".statDieButton").position().left).data("top", $(".statDieButton").position().top);

function mobileRollCharacter(){
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
    mobileReset();
}

function mobileReset(){
    $("#stat1","#stat2","#stat3","stat4","stat5","stat6").animate({
       "left": $("#stat1").data("left"),
       "top": $("#stat1").data("top")
    });
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
    //$('.pep').pep().data('plugin_pep').revert();
}