/*
// Promises
const { readFile } = require('fs')

const getText = function (path) {
	return new Promise(function (resolve, reject) {
		readFile(path, 'utf8', function (error, data) {
			if (error) {
				reject(error)
			} else {
				resolve(data)
			}
		})
	})
}

getText('./content/first.txt')
	.then((result) => console.log(result))
	.catch((error) => console.log(error))
*/

// async await
const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getText = function (path) {
// 	return new Promise(function (resolve, reject) {
// 		readFile(path, 'utf8', function (error, data) {
// 			if (error) {
// 				reject(error)
// 			} else {
// 				resolve(data)
// 			}
// 		})
// 	})
// }

const start = async () => {
	try {
		const first = await readFile('./content/first.txt')
		const second = await readFile('./content/second.txt')
		await writeFile(
			'./content/result-mind-grenade.txt',
			`Great! save these : ${first} ${second}`,
			{ flag: 'a' }
		)
	} catch (error) {
		console.log(error)
	}
}

start()
