function sum() {
	let result = 0
	for (let item in arguments) {
		result += arguments[item]
	}
	return result
}

function sumPlus() {
	const array = Array.from(arguments)
	return array.reduce(function(sum, item) {
		return sum + item
	}, 0)
}

console.log(sum(2, 15, 1, 20, 3, 14, 50, 6, 7, 8))
console.log(sumPlus(2, 15, 1, 20, 3, 14, 50, 6, 7, 8))