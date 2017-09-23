function longest(array) {
  var longestString = ''
  for (var i = 0; i < array.length-1; i++) {
    if (array[i].length > array[i+1].length) {
      longestString = array[i]
    }
  }
 return longestString
}

var array = ['love', 'enigma', 'sensuality', 'devotion'];
