var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CountriesSchema = new Schema({
  name: String,
  hotels: [{
  	name: String,
  	info: String
  }]
});

mongoose.model('Countries', CountriesSchema);