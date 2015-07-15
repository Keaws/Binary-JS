(function () {
    angular
        .module('app')
        .controller('MainController', MainController);

    function MainController(photoFactory, $q) {
        var vm = this;

        //vm.photos = photoService.getPhotos();
        $q.all(photoFactory.getPhotos()).then(function (responses) {
            vm.photos = responses;
        });
    }
})();