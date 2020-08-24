angular.module('boiler').controller('RegistrationCtrl', ['$scope', 'Account', '$window', '$rootScope', '$location', 'Auth', function ($scope, Account, $window, $rootScope, $location, Auth) {
    // Register User
    $scope.register = function (user) {
        Auth.$createUserWithEmailAndPassword(user.email, user.password)
        .then((fUser) => {
            console.log(fUser);
            $location.path('/');
        })
        .catch((err) => {
            $scope.error = err;
        })
    };
    
    $scope.login = function (user) {
        Auth.$signInWithEmailAndPassword(user.email, user.password)
        .then((user) => {
            console.log(user);
            $location.path('/');
        })
        .catch((err) => {
            $scope.error = err;
        });
    };
}]);