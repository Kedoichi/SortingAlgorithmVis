var generateListBTN = document.getElementById('Generate')

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
