(function () {
    angular
        .module('app')
        .service('photoService', photoService);

    function photoService($http) {
        var photos = [];

        this.getPhotos = function () {
            $http.get(API_URL)
                .success(function (response) {
                    for (var photo in response) {
                        photos.push(response[photo]);
                        if (response[photo].id == 5) break;	//getting only first 5 photos for faster page load
                    }
                })
                .error(function (error) {
                    throw new Error(error);
                });

            return photos;
        };
    };
})();