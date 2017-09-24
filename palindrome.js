function isPalindrome(string) {
  var separated = string.split(['' ['']])
  var wordArray = []
  var word = ''
    for (var i = separated.length; i >= 0; i--){
      wordArray.push(separated[i])
    }
      word = wordArray.join('')
      if (word === string){
        return true
      } else {
          return false
        }
}
