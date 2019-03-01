class Animal {
	constructor(name) {
		this.name = name;
	}

	sleep() {
		console.log('Sleeping...');
	}
}

class Cat extends Animal {
	constructor(name, color) {
		super(name);
		this.color = color;
	}

	static catchMouse() {
		console.log('Catching... a mouse');
	}

	jump() {
		console.log('Jumping...');
	}
}

const meow = new Cat('meow', 'white');
meow.sleep();
meow.jump();
Cat.catchMouse();