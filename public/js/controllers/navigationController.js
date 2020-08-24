angular.module('boiler').controller('NavigationCtrl', ['$scope', '$window', '$location', 'Auth', function ($scope, $window, $location, Auth) {
    $scope.logout = function () {
        Auth.$signOut();
        $location.path('/');
    };
}]);