// NPM info
// NPM Command
/*
npm - global command, comes with node
npm --version

local dependency - use it only in this particular project
npm i <packageName>

global dependency - use it in any project
npm install -g <packageName>
sudo install -g <packageName> (mac)
*/

// First Packages and package.json
/*
package.json - manifest file (store important info about project/package)
manual approach (create package.json in the root, create properties etc)
npm init (step by step, press enter to skip)
npm init -y (everything default)
*/

// Share code on Github
// Nodemon
// uninstall Package
// global install
// package-lock.json

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
console.log('hello world')
