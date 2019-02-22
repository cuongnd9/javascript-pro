console.log(x) // error
console.log(y) // undefined

let x = 7 // error
var y = 10 
var z = 5

function run() {
	console.log(z)
	var z = 20
}

run() // undefined