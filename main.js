$pokedex = document.querySelector('#pokedex')

$pokedex.addEventListener('click', function (even){
  var id = event.target.getAttribute('data-number')
  console.log(id)
})
