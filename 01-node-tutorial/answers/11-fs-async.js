const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", function (error, result) {
	if (error) {
		console.log(error);
		return;
	}
	// console.log(result)
	const first = result;

	readFile("./content/second.txt", "utf8", function (error, result) {
		if (error) {
			console.log(error);
			return;
		}
		const second = result;

		writeFile(
			"./content/result-async.txt",
			`Here is the result : ${first}, ${second}. `,
			{ flag: "a" },
			function (error, result) {
				if (error) {
					console.log(error);
					return;
				}

				console.log(`This Task : ${result} is done.`);
			}
		);
	});
});
console.log("starting another task");
