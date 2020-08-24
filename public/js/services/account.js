angular.module('boiler').factory('Account', ['$http', function($http) {
    return {
        retrieve: (user) => {
            return $http.get('/auth/' + user)
        }
    };
}]);