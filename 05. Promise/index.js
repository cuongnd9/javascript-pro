const fs = require('promise-fs')

const log = console.log

const onDone = data => log(data)
const onError = error => log(error)

const readFile = path => 
	fs.readFile(path, { encoding: 'utf8' })

readFile('db1.json')
	.then(onDone)
	.then(() => readFile('db2.json'))
	.then(onDone)
	.catch(onError)