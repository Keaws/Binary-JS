angular.module('app', [])
    .controller('GoodsController', function ($scope) {
        //$scope.goods = [{name: 'Laptop', price: 1000}, {name: 'Car', price: 20000}];
        $scope.goods = [];
        $scope.showGoods = true;

        $scope.addItem = function () {
            var isDuplicate = false;
            for (var item in $scope.goods) {
                if ($scope.goods[item].name.toLowerCase() == $scope.itemName.toLowerCase()) {
                    isDuplicate = true;
                    throw new Error('Duplicates are not allowed');
                }
            }

            if (!isDuplicate) {
                $scope.goods.push({name: $scope.itemName, price: getRandomInt(1, 1000000)});
                $scope.itemName = '';
            }

        };

        $scope.toggleGoods = function () {
            $scope.showGoods = $scope.showGoods ? false : true;
        };
    })
    .controller('CustomersController', function ($scope) {
        //$scope.customers = [{name: 'Customer', city: 'Kyiv', age: getRandomInt(18, 100)}];
        $scope.showCustomers = true;
        $scope.customers = [];

        $scope.addCustomer = function () {
            var isDuplicate = false;
            for (var customer in $scope.customers) {
                if ($scope.customers[customer].name.toLowerCase() == $scope.customerName.toLowerCase()) {
                    isDuplicate = true;
                    throw new Error('Duplicates are not allowed');
                }
            }

            if (!isDuplicate) {
                $scope.customers.push({
                    name: $scope.customerName,
                    city: $scope.customerCity,
                    age: getRandomInt(18, 100),
                    avatar: $scope.customerAvatar
                });
                $scope.customerName = '';
                $scope.customerCity = '';
                $scope.customerAvatar = '';
                document.getElementById('customerName').focus();
            }
        };

        $scope.toggleCustomers = function () {
            $scope.showCustomers = $scope.showCustomers ? false : true;
        };

        $scope.deleteCustomer = function (index) {
            $scope.customers.splice(index, 1);
        };
    });

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}