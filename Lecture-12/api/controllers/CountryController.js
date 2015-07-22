/**
 * CountryController
 *
 * @description :: Server-side logic for managing countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getCountries: function(req, res) {
		var countries = [];
		for (var i = 0; i < Country.data.length; i++) {
			countries.push(Country.data[i].name);
		}
		return res.send(countries);
	},

	addCountry: function (req, res) {
		var countryName = req.param('name');
		if(countryName) {
			Country.data.push({
				"name": countryName,
				"hotels": []
			});
			return res.send({ message : "Country has been successfully added"});
		} else res.send(400, {message: 'Bad request'});
	},

	getHotelsByCountry: function (req, res) {
		var countryName = req.param('name').toLowerCase();
		if (countryName) {
			for (var i = 0; i < Country.data.length; i++) {
				if (Country.data[i].name.toLowerCase() == countryName) {
					return res.send(Country.data[i].hotels);
				}
			}
		} else res.send(400, {message: 'Bad request'});
	},

	addHotel: function (req, res) {
		var hotelName = req.body.name,
			hotelInfo = req.body.info,
			countryToAddHotel = req.params.name.toLowerCase();

		if (!hotelName || !hotelInfo)
			res.send(400, {message: 'You should specify hotel name and info'});

		for (var i = 0; i < Country.data.length; i++) {
			if (Country.data[i].name.toLowerCase() == countryToAddHotel) {
				Country.data[i].hotels.push({name: hotelName, info: hotelInfo});
				return res.send({ message : "Hotel has been successfully added"});
			}
		}
	},

	deleteHotel: function (req, res) {
		var country = req.param('cname'),
			hotel = req.param('hname');

		for (var i = 0; i < Country.data.length; i++) {
			if (country.toLowerCase() == Country.data[i].name.toLowerCase()) {
				for (var j = 0; j < Country.data[i].hotels.length; j++) {
					if (hotel.toLowerCase() == Country.data[i].hotels[j].name.toLowerCase()) {
						Country.data[i].hotels.splice(j , 1);
						return res.send({ message : "Hotel has been successfully deleted"});
					}
				}
			}
		}
	},

	getHotelInfo: function (req, res) {
		var country = req.param('cname'),
			hotel = req.param('hname');

		for (var i = 0; i < Country.data.length; i++) {
			if (country.toLowerCase() == Country.data[i].name.toLowerCase()) {
				for (var j = 0; j < Country.data[i].hotels.length; j++) {
					if (hotel.toLowerCase() == Country.data[i].hotels[j].name.toLowerCase()) {
						return res.send({ info : Country.data[i].hotels[j].info});
					}
				}
			}
		}
	},

	updateHotelInfo: function (req, res) {
		var country = req.param('cname'),
			hotel = req.param('hname'),
			hotelInfo = req.body.info;

		if (!hotelInfo) res.send(400, {message: 'Bad request'});

		for (var i = 0; i < Country.data.length; i++) {
			if (country.toLowerCase() == Country.data[i].name.toLowerCase()) {
				for (var j = 0; j < Country.data[i].hotels.length; j++) {
					if (hotel.toLowerCase() == Country.data[i].hotels[j].name.toLowerCase()) {
						Country.data[i].hotels[j].info = hotelInfo;
						return res.send({ message : "Hotel has been successfully updated"});
					}
				}
			}
		}
	},

	forbiddenRequest: function (req, res) {
		res.view('403', {error: "Oops! You are not allowed to be here!"});
	},

	// ** Blueprint **

	//gets country info: get /country?name=countryName
	find: function (req, res) {
		var country = req.param('name');

		for (var i = 0; i < Country.data.length; i++) {
			if (country.toLowerCase() == Country.data[i].name.toLowerCase()) {
				return res.send(Country.data[i]);
			}
		}
		
	},

	//creates country: post /country?name=countryName
	create: function (req, res) {
		var countryName = req.param('name');

		if(countryName) {
			Country.data.push({
				"name": countryName,
				"hotels": []
			});
			return res.send({ message : "Country has been successfully added"});
		} else res.send(400, {message: 'Bad request'});
	},

	//deletes country: delete /country?name=countryName
	destroy: function (req, res) {
		var country = req.param('name');

		for (var i = 0; i < Country.data.length; i++) {
			if (country.toLowerCase() == Country.data[i].name.toLowerCase()) {
				Country.data.splice(i , 1);
				return res.send({ message : "Country has been successfully deleted"});
			}
		}
	},

	_config : {
		blueprints: {
            actions: true,
            rest: true,
            shortcuts: true
        }
	} 
};

