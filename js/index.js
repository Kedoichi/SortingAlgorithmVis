// Innit button and variables
var GenerateBTN = $("#Generate");
var GetLastArrayBTN = $("#GetLastArray");
var SortBTN =   $("#Sort");
var ListSizeInputField = $("#ListSizeInput");
var ListSizeInputSlider = $("#ListSizeSlider");
var SpeedInputField = $("#SpeedInput");
var SpeedInputSlider = $("#SpeedSlider");
var isStop = false;
var delay;

//Handle Field Input
$(function handleSizeInput(){
    var ListSize = ListSizeInputField.val()
    var ListSizeSlider = ListSizeInputSlider.val()
    window.list=generateRamdomArray(ListSize);
    renderList(window.list);
    if(ListSize != ListSizeSlider){
        ListSizeInputSlider.val(ListSize);
        window.list=generateRamdomArray(ListSize);
        renderList(window.list);
    }
    ListSizeInputSlider.on("input", function(){
        ListSizeInputField.val(ListSizeInputSlider.val());
        window.list=generateRamdomArray(ListSizeInputSlider.val());
        renderList(window.list);
    });
});

//Hanle Speed Input to delay
$(function handleSpeedInput(){
    var Speed = SpeedInputField.val()
    var SpeedSlider = SpeedInputSlider.val()
    delay = Speed;
    if(Speed != SpeedSlider){
        SpeedInputSlider.val(Speed);
        delay = Speed;
    }
    SpeedInputSlider.on("input", function(){
        SpeedInputField.val(SpeedInputSlider.val());
        delay = SpeedInputSlider.val();
    });
});

//Event Listeners
GenerateBTN.on("click", function(){
    stopTrigger();
    window.list=generateRamdomArray(ListSizeInputField.val());
    renderList(window.list);
});

GetLastArrayBTN.on("click", function(){
    stopTrigger();
    renderList(window.list);
});

SortBTN.on("click", function(){
    startTrigger();
});


//Function of Pause of Stop trigger. Set disabled of buttons.
function stopTrigger(){
    isStop = true;
    GetLastArrayBTN.prop("disabled", true);
    SortBTN.prop("disabled", false);
};

function startTrigger(){
    isStop = false;
    GetLastArrayBTN.prop("disabled", false);
    SortBTN.prop("disabled", true);
}