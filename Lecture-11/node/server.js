var express = require('express'),
	dataHandler = require("./dataHandler.js"),
	PORT = 8888,
	app = express(),
	router = express.Router();

app.listen(PORT, function () {
	console.log('Listening on port ' + PORT);
});

app.use('/api', router);

router.route('/countries')
	.get(function (request, response) {
		response.send(dataHandler.getCountries());
	})
	.post(function (request, response) {

	});

router.route('/countries/:id/hotels').get(function (request, response) {
	response.send(dataHandler.getHotels(request.params.id));
});

router.route('/countries/:countryId/hotels/:hotelId').get(function (request, response) {
	response.send(dataHandler.getHotelInfo(request.params.countryId, request.params.hotelId));
});