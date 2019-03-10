// array
const numbers = [1, 3, 5, 2, 9, 7];
const [a, b, , c, ...d] = numbers;

console.log(a, b, c, d); // 1 3 2 [ 9, 7 ]

// object
const obj = {
	foo: 1,
	bar: 'cuong',
	baz: true
};

const { foo: x, bar: y, baz: z } = obj;

console.log(x, y, z);