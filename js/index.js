// Innit button and variables
var GenerateBTN = $("#Generate");
var GetLastArrayBTN = $("#GetLastArray");
var SortBTN = $("#Sort");
var ListSizeInputField = $("#ListSizeInput");
var ListSizeInputSlider = $("#ListSizeSlider");
var SpeedInputField = $("#SpeedInput");
var SpeedInputSlider = $("#SpeedSlider");
var Algorithm = $("#Algorithm");
var isStop = false;
var delay;
var algorithm;

//Handle Field Input
$(function handleSizeInput() {
  stopTrigger();
  var ListSize = ListSizeInputField.val();
  var ListSizeSlider = ListSizeInputSlider.val();
  window.list = generateRamdomArray(ListSize);
  renderList(window.list);
  if (ListSize != ListSizeSlider) {
    ListSizeInputSlider.val(ListSize);
    window.list = generateRamdomArray(ListSize);
    renderList(window.list);
  }
  ListSizeInputSlider.on("input", function () {
    ListSizeInputField.val(ListSizeInputSlider.val());
    window.list = generateRamdomArray(ListSizeInputSlider.val());
    renderList(window.list);
  });
});

//Hanle Speed Input to delay
$(function handleSpeedInput() {
  stopTrigger();
  var Speed = SpeedInputField.val();
  var SpeedSlider = SpeedInputSlider.val();
  delay = Speed;
  if (Speed != SpeedSlider) {
    SpeedInputSlider.val(Speed);
    delay = Speed;
  }
  SpeedInputSlider.on("input", function () {
    SpeedInputField.val(SpeedInputSlider.val());
    delay = SpeedInputSlider.val();
  });
});

//Event Listeners
GenerateBTN.on("click", function () {
  stopTrigger();
  window.list = generateRamdomArray(ListSizeInputField.val());
  renderList(window.list);
});

GetLastArrayBTN.on("click", function () {
  stopTrigger();
  renderList(window.list);
});

SortBTN.on("click", async function () {
  unsortedList = [...window.list];
  startTrigger();
  await executeAlgorithm(unsortedList);
});

Algorithm.change(function () {
  console.log("changed");
  SortBTN.disabled = true;
  stopTrigger();
  renderList(window.list);
});
// Get Algorithm from Select

//Function of Pause of Stop trigger. Set disabled of butons.
function stopTrigger() {
  isStop = true;
  GetLastArrayBTN.prop("disabled", true);
  SortBTN.prop("disabled", false);
  if ($("#Algorithm").val() == 0) {
    SortBTN.prop("disabled", true);
  } else {
    SortBTN.prop("disabled", false);
  }
}

function startTrigger() {
  isStop = false;
  GetLastArrayBTN.prop("disabled", false);
  SortBTN.prop("disabled", true);
}

// exectute algorithm async function
async function executeAlgorithm(list) {
  switch ($("#Algorithm").val()) {
    case "1":
      return await bubbleSort(list);
    case "2":
      return await enhancedBubbleSort(list);
    case "3":
      return await insertionSort(list);
    case "4":
      return await selectionSort(list);
    case "5":
      return await mergeSort(list);
    case "6":
      return await quickSort(list);
    case "7":
      return await heapSort(list);
    case "8":
      return await shellSort(list);
    default:
      return alert("Please select an algorithm");
  }
}

// Swap function
function swaparr(list, first_Index, second_Index) {
  var temp = list[first_Index];
  list[first_Index] = list[second_Index];
  list[second_Index] = temp;
}
