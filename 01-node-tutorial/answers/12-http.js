const http = require("http");
const server = http.createServer(function (request, response) {
	// console.log(request)
	if (request.url === "/") {
		response.end("Welcome to our home page");
	} else if (request.url === "/about") {
		response.end("here is our short history");
	} else {
		// response.write('Welcome to our home page')
		response.end(`
		<h1>404 Error</h1>
		<p>We can't find the page you are looking for.</p>
		<a href="/">Back to home page</a>
		`);
	}
});

server.listen(5000);
