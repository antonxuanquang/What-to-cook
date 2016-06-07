'use strict';

angular.module('whatToCookApp')

.controller('IndexController', ['$scope', 'menuFactory', function($scope, menuFactory) {
    var dishes = menuFactory.getDishes();
    $scope.dishes = dishes;
}])
;
