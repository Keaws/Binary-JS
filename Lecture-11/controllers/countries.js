var mongoose = require('mongoose'),
	Countries = mongoose.model('Countries');

exports.getCountries = function(req, res){
  Countries.find({},function(err, results) {
    return res.send(results);
  });
};

exports.getHotels = function(req, res){
  var id = req.params.id;
  Countries.find({'_id':id},function(err, results) {
    return res.send(results[0].hotels);
  });
};

exports.getHotelInfo = function(req, res) {
	var countryId = req.params.id,
		hotelId = req.params.hid;

	Countries.find({'_id':countryId, hotels: {$elemMatch: {_id: hotelId}}}, function(err, results) {
		if (err) return console.log(err);

		var resultHotels = results[0].hotels,
			hotel;

		for (var i = 0; i < results[0].hotels.length; i++) {
			if (resultHotels[i]._id == hotelId) {
				hotel = resultHotels[i];
				break;
			}
		}
    	return res.send(hotel);
  	});
};

exports.addCountry = function(req, res) {
  Countries.create(req.body, function (err, country) {
    if (err) return console.log(err);
    return res.send(country);
  });
};

exports.addHotel = function(req, res) {
	var id = req.params.id,
		hotelsUpd = req.body;

	Countries.findByIdAndUpdate({'_id':id}, {$push: {hotels: hotelsUpd}}, function(err, results) {
      	return res.send(202);
  	});
 };

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Countries.update({"_id":id}, req.body, function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d countries', numberAffected);
      return res.send(202);
  });
};

exports.delete = function(req, res){
  var id = req.params.id;
  Countries.remove({'_id':id},function(result) {
    return res.send(result);
  });
};

exports.import = function(req, res){
  Countries.create(
    {
    "name": "Ukraine",
    "hotels": [
      {
        "name": "River Palace",
        "info": "River Palace Info"
      },
      {
        "name": "UA hotel",
        "info": "UA hotel info"
      }
    ]
  },

  {
    "name": "Poland",
    "hotels": [
      {
        "name": "Warsaw hotel",
        "info": "Warsaw hotel Info"
      },
      {
        "name": "PL",
        "info": "PL info"
      }
    ]
  },
    function (err) {
    	if (err) return console.log(err);
    	return res.send(202);
  });
};