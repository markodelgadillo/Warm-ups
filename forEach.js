// Without for loop. Using only forEach

//version 1 - includes function code block
things.forEach(function log(things) {
  console.log(things)
})

forEach(things, log)

//OR
//version 2 - separates the function from the forEach

function log (things) {
  console.log(things)
}

things.forEach(log)

//version 3 - using a for loop

function log(list){// this function will be refered to as procedure in the forEach function
  console.log(list) //the action we want executed to the parameter
}

function forEach (list, procedure) { // list will be the array called. In this case,it becomes things
  for (var i = 0; i < list.length; i++) {//procedure will be the function called. In this case, it's function log
    procedure(list[i])//this is calling the function that will be set equal by procedure with the parameter list[i]
    }
  }

forEach(things, log)//things will become list in the forEach function
//log will become procedure in the forEach function
