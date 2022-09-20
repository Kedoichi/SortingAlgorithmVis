var generateListBTN = document.getElementById('Generate')
var sortingAlgo = document.getElementById('Algorithm')
var sortBTN = document.getElementById('Sort')

;(function () {
  var listSizeInput = document.getElementById('ListSizeInput')
  var listSizeSlider = document.getElementById('ListSizeSlider')
  listSizeInput.value = listSizeSlider.value
  window.list = generateRandomList(listSizeSlider.value)
  renderList(window.list)
  listSizeSlider.oninput = function () {
    listSizeInput.value = listSizeSlider.value
    window.list = generateRandomList(listSizeSlider.value)
    renderList(window.list)
  }
})()
;(function () {
  var SpeedInput = document.getElementById('SpeedInput')
  var SpeedSlider = document.getElementById('SpeedSlider')
  SpeedInput.value = SpeedSlider.value
  SpeedSlider.oninput = function () {
    SpeedInput.value = SpeedSlider.value
  }
})()

// Event
generateListBTN.onclick = function () {
  var size = document.getElementById('ListSizeInput').value
  window.list = generateRandomList(size)
  renderList(window.list)
}
sortBTN.onclick = function () {
  unsortedList = [...window.list]
  executeSorting(unsortedList)
}
// Auto update value of ListSizeInput when listSizeSlider is changed
$('#ListSizeInput').blur(() => {
  var size = $('#ListSizeInput').val()
  $('#ListSizeSlider').val(size)
  autoGenerateAndRenderList(size)
})

$('#ListSizeInput').on('keyup', (e) => {
  if (e.which == 13) {
    $('#ListSizeInput').blur()
  }
})

// Auto update value of SpeedInput when SpeedSlider is changed
$('#SpeedInput').blur(() => {
  var size = $('#SpeedInput').val()
  $('#SpeedSlider').val(size)
})

$('#SpeedInput').on('keyup', (e) => {
  if (e.which == 13) {
    $('#SpeedInput').blur()
  }
})

function autoGenerateAndRenderList(lstSize) {
  window.list = generateRandomList(lstSize)
  renderList(window.list)
}
function swapListElement(lst, first, second) {
  var temp = lst[first]
  lst[first] = lst[second]
  lst[second] = temp
}

function executeSorting(lst) {
  switch (sortingAlgo.value) {
    case '0':
      alert('Please select an algorithm to sort the list')
      break
    case '1':
      doBubbleSort(lst)
      break
    case '2':
      break
    case '3':
      break
    case '4':
      break
    case '5':
      break
    case '6':
      break
  }
}
