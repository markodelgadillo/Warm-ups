var people = ['Ron', 'Celeste', 'Victor', 'Tim']

function print(value) {
  console.log(value)
}

forEach(people, print)

function forEach(collection, fn) {
	for (var i = 0; i < collection.length; i++) {
		fn(collection[i])
	}
}
