// var: redeclaration, function scope
// block scope: if, for

var x = 10
let y = 5

var x = 1 // redeclaration
// let y = 20 // error

function run() {
	var z = 100 // function scope
	var t = 20
}

// console.log(z) // z is not defined
// console.log(t) // t is not defined

if (true) {
	var a = 10
	let b = 20
	const c = 21
}

// console.log(a) //10
// console.log(b) // b is not defined
// console.log(c) // c is not defined

{
	let e = 2
	var f = 1
}

// console.log(f) // 1
// console.log(e) // e is no defined

for (let i = 0; i < 5; i++) {
	// console.log(i)
}

// console.log(i) // i is not defined

for (var j = 0; j < 5; j++) {
	// console.log(j)
}

// console.log(j) // 5
