function generateRandomList(size) {
  var array = []
  for (var i = 1; i <= size; i++) {
    array.push(i)
  }
  return shuffle(array)
}

function shuffle(array) {
  var currentLength = array.length,
    temporaryValue,
    randomIndex

  // shuffle the array by swap random element with the last element
  while (0 !== currentLength) {
    // Pick a random element in the remaining array
    randomIndex = Math.floor(Math.random() * currentLength)
    currentLength -= 1

    // Swap
    temporaryValue = array[currentLength]
    array[currentLength] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
