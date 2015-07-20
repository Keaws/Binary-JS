module.exports = function(app){
    var countries = require('./controllers/countries');
    app.get('/countries', countries.getCountries);
    app.get('/countries/:id/hotels', countries.getHotels);
    app.post('/countries', countries.addCountry);
    app.put('/countries/:id', countries.update);
    app.delete('/countries/:id', countries.delete);
    app.get('/import', countries.import);
};