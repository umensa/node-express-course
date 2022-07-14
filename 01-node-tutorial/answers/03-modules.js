/*// Modules

const john = 'john'
const peter = 'peter'

const sayHi = function(name){
	console.log(`Hello ${name}`)
}

sayHi(john)
sayHi (peter)
sayHi('susan')
*/

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names.js')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(data)

// console.log(names)
sayHi(names.john)
sayHi (names.peter)
sayHi('susan')

require('./7-mind-grenade')
