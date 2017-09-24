var $pokedex = document.querySelector('#pokedex')

$pokedex.addEventListener('click' function(event){
var $img = event.target.closest('.card')
if ($img !== null) {
  var id = $img.getAttribute('data-number')

}
console.log(id)

})
