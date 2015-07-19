var http = require("http"),
	requestHandler = require("./requestHandler.js"),
	PORT = 8888;

var server = http.createServer(requestHandler);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});