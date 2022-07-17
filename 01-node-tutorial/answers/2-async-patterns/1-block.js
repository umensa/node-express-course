const http = require('http')

const server = http.createServer(function (request, response) {
	if (request.url === '/') {
		response.end('Home Page')
	} else if (request.url === '/about') {
		// Blocking code
		for (let i = 0; i < 1000; i++) {
			for (let j = 0; j < 1000; j++) {
				console.log(`${i} ${j}`)
			}
		}

		response.end('About Page')
	} else {
		response.end('Error Page')
	}
})

server.listen(5000, function () {
	console.log('Server is listening on port 5000...')
})
