function doBubbleSort(array) {
  var length = array.length
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length - 1; j++) {
      pointerPointAt(array[j], array[j + 1])
      if (array[j] > array[j + 1]) {
        swapListElement(array, j, j + 1)
        swap(array[j], array[j + 1])
      }
      endSwappingStep(array[j], array[j + 1])
    }
  }
  return array
}

function doEnhancedBubbleSort(array) {
  var length = array.length
  var isSwapped
  var count = 1
  do {
    isSwapped = false
    for (var i = 0; i < length - count; i++) {
      pointerPointAt(array[i], array[i + 1])
      if (array[i] > array[i + 1]) {
        isSwapped = true
        swapListElement(array, i, i + 1)
        swap(array[i], array[i + 1])
      }
      endSwappingStep(array[i], array[i + 1])
    }
    count++
  } while (isSwapped == true)
  return array
}
