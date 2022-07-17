const http = require('http')

const server = http.createServer()
server.on('request', function (request, response) {
	response.end('Welcome to our home page')
})

server.listen(5000)
