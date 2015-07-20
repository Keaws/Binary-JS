//NOT NEEDED WITH EXPRESS

exports = module.exports = requestHandler;

var dataHandler = require("./dataHandler.js");

function requestHandler(request, response){
	if(request.url == '/countries') {
		response.end(dataHandler.getCountries());
	} else if(request.url == '/countries/:id/hotels') {
		response.end(dataHandler.getHotels(id));
	} else {
		response.end('It Works!! Path Hit: ' + request.url);
	}
}