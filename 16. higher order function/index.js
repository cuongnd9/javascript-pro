function init(string, func) {
	func(string);
}

function toLowerCase(string) {
	let result = string.toLowerCase();
	console.log(result);
}

init('Cuong', toLowerCase)