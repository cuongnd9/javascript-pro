function sayHello(secondName) {
	console.log('Hello', this.firstName, secondName);
}

sayHello.call({ firstName: 'Nguyen' }, 'Cuong');