function sum(...numbers) {
	return numbers.reduce((a, b) => a + b);
}

sum(1, 2, 3, 5);