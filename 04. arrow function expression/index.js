// arrow function has not context, arrow's context is nearer context wrap it
// https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function Person() {
	this.age = 0;

	setInterval(function growUp() {
		console.log(this.age++);
	}, 1000);
}

var p = new Person(); // NaN

function Person() {
	this.age = 20;

	setInterval(() => console.log(this.age++), 1000);
}

var p = new Person();