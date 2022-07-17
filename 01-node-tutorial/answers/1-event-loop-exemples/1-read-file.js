const { readFile } = require('fs')

console.log('First task started')
// check file path
readFile('./content/first.txt', 'utf8', function (error, result) {
	if (error) {
		console.log(error)
		return
	}
	console.log(result)
	console.log('First task completed')
})
console.log('starting the next task')
