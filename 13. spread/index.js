// spread for array

const numbers = [1, 2, 3, 4, 5, 6];
const result = [1, ...numbers];
console.log(result);

// spread for object
const obj1 = {
	foo: 1,
	bar: 'baz',
	z: {
		y: 1
	}
};

const obj2 = JSON.parse(JSON.stringify(obj1));

const obj3 = {...obj1};
obj3.z.y = 10;

console.log(obj1, obj2, obj3);