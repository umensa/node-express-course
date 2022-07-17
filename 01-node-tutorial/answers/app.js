let http = require('http')
let fs = require('fs')

http
	.createServer(function (request, response) {
		// const text = fs.readFileSync('./content/big.txt', 'utf8')
		// response.end(text)
		const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
		fileStream.on('open',function () {
			fileStream.pipe(response)
		})
		fileStream.on('error', function (error) {
			response.end(error)
		})
	})
	.listen(5000)
