function isPalindrome(string) {
  var separated = string.split(['' ['']])//separated the string into an array of characters
  var wordArray = [] //empty array to push the characters from the string array above
  var word = '' //variable to return the joined array into a single string
    for (var i = separated.length; i >= 0; i--){ //for loop to start from the end and loop backwards
      wordArray.push(separated[i])//pushes each character looped throuh into the empty array
    }//ends loop
      word = wordArray.join('')//the array with pushed characters is now joined into a single string
      if (word === string){ //checks if the newly joined string matches the original string
        return true //if yes, it is a palindrome
      } else {
          return false //if not, it is not a palindrome
        }
}
