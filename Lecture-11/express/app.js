var express = require('express'),
	app = express();

app.get('/', function(request, response) {
	response.write('Hi');
	response.end();
});

app.get('/blocks', function(request, response) {
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	response.send(blocks);
});

app.listen(3000, function () {
	console.log('Listening on port 3000');
});