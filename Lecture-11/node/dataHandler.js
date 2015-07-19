//exports = module.exports = dataHandler;

var json = require("../data.json"),
	data = JSON.parse(JSON.stringify(json));

function getCountries() {
	var countryNames = [];
	for (var i = 0; i < data.length; i++) 
		countryNames[i] = data[i].name;

	return JSON.stringify(countryNames);
};

function getHotels(countryId) {
	var hotelsNames = [],
	countryPosition,
	i;

	for (i = 0; i < data.length; i++)
		if (data[i].id == countryId) countryPosition = i;
	for (i = 0; i < data[countryPosition].hotels.length; i++) 
		hotelsNames[i] = data[countryPosition].hotels.name;

	return JSON.stringify(hotelsNames);
};

module.exports = {
	getCountries : getCountries,
	getHotels: getHotels
};