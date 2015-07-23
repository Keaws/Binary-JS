var express = require('express'),
	bodyParser = require('body-parser'),
	socketio = require('socket.io'),
	app = express(),
	clientDir = __dirname + '/client/';


var server = app.listen(5555, function() {
	console.log('Server is listening port 5555');
});

var io = socketio.listen(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({                           
  extended: true
}));

var messages = [];

app.get("/", function (req,res) {
	res.sendFile(clientDir + 'index.html');
});

io.on('connection', function (socket) {
	console.log("User connected");

	socket.on('disconnected', function() {
		console.log("User disconnected");
	});

	socket.on('chat message', function (data) {
		messages.push(data);
		io.emit('chat message', data);
	});

	socket.emit('chat history', messages);
});