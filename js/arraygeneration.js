// Create random array of numbers from 1 to length
function generateRamdomArray(length) {
  array = [];
  for (var i = 1; i <= length; i++) {
    array.push(i + 1);
  }
  return shuffle(array);
}

function shuffle (array){
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}