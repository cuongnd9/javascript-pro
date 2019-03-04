function init() {
	let name = 'Cuong';
	function displayName() {
		console.log(name);
	}
	displayName();
}

init(); // Cuong

function sum(a) {
	return function(b) {
		return function(c) {
			return a + b + c;
		}
	}
}

let result = sum(2)(6)(10);
console.log(result); // 18