// my attempt

class HashRouter {
  constructor($views) {
    this.$views = $views
    this.isListening = false
  }
  match(hash) {
    const fire = document.querySelector('#fire')
    if (hash == fire) {
      fire.classList.toggle('hidden')
    }
  }
  listen() {
    window.addEventListener('hashchange', function(match) {
      this.match()
    })

  }
}

// solution
class HashRouter {
  constructor($views) {
    this.$views = $views
    this.isListening = false
  }

  match(hash) {

    this.$views.forEach(view => {
      if (view.getAttribute('id') === hash.slice(1)) {
        view.classList.remove('hidden')
      } else {
        view.classList.add('hidden')
      }
    })

  }

  listen() {

    if (!this.isListening) {
      window.addEventListener('hashchange', () => {
        this.isListening = true
        this.match(window.location.hash)
      })
    }

  }
}

const $views = document.querySelectorAll('.view')

const myRouter = new HashRouter($views)
myRouter.listen()
