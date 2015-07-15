(function () {
    angular
        .module('app')
        .factory('photoFactory', photoFactory);


    function photoFactory($resource) {
        return {
            getPhotos: function () {
                var responses = [],
                    resPhotos = $resource(API_URL + ':id', {id: '@id'});

                for (var i = 1; i < 6; i++) {	//getting only first 5 photos for faster page load
                    var ph = resPhotos.get({id: i});
                    responses.push(ph);
                }

                return responses;
            }
        }
    };
})();