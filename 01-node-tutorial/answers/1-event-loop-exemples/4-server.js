const http = require('http')

const server = http.createServer(function (request, response) {
	console.log('request event')
	response.end('Hello World')
})

server.listen(5000, function () {
	console.log('Server is listening on port: 5000 ...')
})
