let fs = require('fs')

function readFile(path) {
	return new Promise(function(resolve, reject) {
		fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
			err ? reject(err) : resolve(data)
		})
	})
}

async function readMultiFile() {
	let data1 = await readFile('./db1.json')
	let data2 = await readFile('./db1.json')
	let data3 = await readFile('./db1.json')

	return [data1, data2]
}

async function readMultiFile() {
	return await Promise.all([
		readFile('./db1.json'),
		readFile('./db2.json'),
		readFile('./db3.json')
	])
}

readMultiFile()
	.then(function(values) {
		console.log(values)
	})
	.catch(function(err) {
		console.log(err)
	})