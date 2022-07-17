const fs = require('fs').promises

const makeFile = async () => {
	try {
		const test = await fs.readFile('./content/practice.txt', 'utf8')
		console.log(test)
		await fs.writeFile('./content/practice2.txt', `This is the first line. \n`)
		for (let i = 2; i < 11; i++) {
			// await writeFile('./content/practice2.txt', `This is line ${i} \n`, {
			await fs.writeFile('./content/practice2.txt', `This is line ${i} \n`, {
				flag: 'a',
			})
		}
	} catch (error) {
		console.log(error)
	}
}

makeFile()
