const sentence = require('./practice2')
const os = require('os')
const fs = require('fs').promises

const practice = async () => {
	try {
		const username = await os.userInfo().username
		await fs.writeFile(
			'./content/practice.txt',
			`This will conclude ${sentence}, by ${username}`
		)
	} catch (error) {
		console.log(error)
	}
}

practice()
