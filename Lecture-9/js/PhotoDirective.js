(function () {
    angular
        .module('app')
        .directive('photoDirective', photoDirective);

    function photoDirective() {
        return {
            replace: true,
            restrict: 'A',
            scope: {
                photo: "="
            },
            link: function(scope, element, attrs){
                var currentElement = element[0].addEventListener("click", function (event) {
                    var imageContainer = document.createElement('div'),
                        fullImage = document.createElement('img');

                    imageContainer.className = 'large-img-container';
                    fullImage.src = scope.photo.url;

                    document.body.style.overflow = "hidden";
                    document.body.appendChild(imageContainer);
                    imageContainer.appendChild(fullImage);
                    imageContainer.style.visibility = 'visible';

                    imageContainer.addEventListener("click", function (event) {
                        document.body.style.overflow = "scroll";
                        imageContainer.parentNode.removeChild(imageContainer);
                    });
                });
            },
            template: '<div><h3>{{photo.title}}</h3>' +
            '<img ng-src="{{photo.thumbnailUrl}}" alt="photo">' +
            '<hr></div>'
        }
    }
})();