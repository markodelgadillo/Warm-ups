const fire = document.querySelector('#fire')
const water = document.querySelector('#water')
const grass = document.querySelector('#grass')



window.addEventListener('hashchange', function (event) {
  const location  = event.target.window.location
    if (location.hash === '#fire') {
      fire.classList.toggle('hidden')
    } else if (location.hash === '#water') {
      water.classList.toggle('hidden')
    } else if (location.hash === '#grass') {
      grass.classList.toggle('hidden')
    }
  })


//
