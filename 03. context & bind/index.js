// global context
// function context
// bind

var meow = {
	name: 'dog',
	sayMeow: function() {
		console.log('Hello, i\'m', this.name)
	}
}

meow.sayMeow()

var say = meow.sayMeow.bind(meow)
say()