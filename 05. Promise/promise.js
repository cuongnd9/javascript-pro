var fs = require('fs')

function readFile(path) {
	return new Promise(function(resolve, reject) {
		fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
			err ? reject(err) : resolve(data)
		})
	})
}

readFile('./db1.json')
	.then(function(data) {
		console.log(data)
		return readFile('./db2.json')
	})
	.then(function(data) { 
		console.log(data) 
		return readFile('./db3.json')
	})
	.then(function(data) {
		console.log(data)
	})
	.catch(function(err) { 
		console.log(err) 
	})

Promise.all([
	readFile('./db1.json'),
	readFile('./db2.json'),
	readFile('./db3.json')
])
	.then(function(values) {
		console.log(values)
	})
	.catch(function(err) {
		console.log(err)
	})

Promise.race([
	readFile('./db1.json'),
	readFile('./db2.json'),
	readFile('./db3.json')
])
	.then(function(values) {
		console.log(values)
	})
	.catch(function(err) {
		console.log(err)
	})