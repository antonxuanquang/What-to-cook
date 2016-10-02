'use strict';

angular.module('whatToCookApp')

.controller('IndexController', ['$scope', 'menuFactory', function($scope, menuFactory) {
    var dishes = menuFactory.getDishes();
    $scope.dishes = dishes;
}])
.controller('UploadController', ['$scope', '$http', function($scope, $http) {
    
    $scope.submit = function() {
        var data = JSON.stringify($scope.dish);
        
        $http.post("/upload", data).success(function(status, data) {
            console.log(status);
            console.log(data);
            console.log('Data posted successfully');
            
            $scope.dish = {};
            
        })
    };
}])
;
