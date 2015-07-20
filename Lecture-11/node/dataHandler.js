var json = require("../data.json"),
	data = JSON.parse(JSON.stringify(json));

function getCountries() {
	var countryNames = [];
	for (var i = 0; i < data.length; i++) 
		countryNames[i] = data[i].name;

	return countryNames;
};

function getHotels(countryId) {
	var hotelsNames = [];

	for (var i = 0; i < data.length; i++)
		if (data[i].id == countryId) {
			for (var j = 0; j < data[i].hotels.length; j++) 
				hotelsNames[j] = data[i].hotels[j].name;
		}
	
	return hotelsNames;
};

function getHotelInfo(countryId, hotelId) {
	var hotelInfo = '';

	for (var i = 0; i < data.length; i++)
		if (data[i].id == countryId) {
			for (var j = 0; j < data[i].hotels.length; j++)
				if (data[i].hotels[j].id == hotelId) 
				hotelInfo = data[i].hotels[j].info;
		}

	return hotelInfo;

}

function addCountry(country) {
	data.push(country);
}

module.exports = {
	getCountries : getCountries,
	getHotels: getHotels,
	getHotelInfo: getHotelInfo
};