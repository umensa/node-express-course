const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', function (name, id) {
	console.log(`data recieved from ${name} with id : ${id}`)
})
customEmitter.on('response', function () {
	console.log('some other logic')
})

customEmitter.emit('response', 'john', 34)
