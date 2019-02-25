function sum() {
	const numbers = Array.from(arguments);
	return numbers.reduce((sum, num) => sum + num, 0);
}

function average() {
	const result = sum.apply(null, arguments);
	return result / arguments.length || 'require arguments!!!';
}

console.log(average(1, 3, 4, 6, 9));