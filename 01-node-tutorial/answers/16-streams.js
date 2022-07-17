const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {
	highWaterMark: 90000,
})

// default size buffer : 64 kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = createReadStream('../content/big.txt', {encoding: 'utf8'})

stream.on('data', function (result) {
	console.log(result)
})
stream.on('error', function (error) {
	console.log(error)
})
