function findById(id, array) {
  var object = ''
  for (var i = 0; i < array.length; i++) {
    if (id == array[i].id) {
      object = array[i]
    }
  }return object
}

var array = [
  {
    id: 1,
    team: 'dodgers',
    color: 'blue'
  },
  {
    id: 2,
    team: 'giants',
    color: 'orange'
  },
  {
    id: 3,
    team: 'angels',
    color: 'red'
  },
  {
    id: 4,
    team: 'athletics',
    color: 'green'
  }
]
