function flip (array) {
  var flipped = []
for (var i = array.length-1; i >= 0; i--){
  flipped.push(array[i]);
  }
  return flipped
}


var array = ['element1', 'element2']


/*
In the for loop, var i is equal to the
array length minus one to make it equal to the last
positioned, in this case var i = array[1].

As long as i is greater than or equal to zero, i will decrement
or move backwards from the end of the array to the beginning.
*/
