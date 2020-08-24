angular.module('boiler').controller('CustomizeCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.changeBG = function () {
        document.body.style.backgroundColor = $scope.backgroundColor;        
    };

    $scope.changeTextColor = function () {
        document.body.style.color = $scope.textColor;
    };

    $scope.changeBackground = function () {
        const custom = {
            bgColor: $scope.backgroundColor,
            textColor: $scope.textColor
        };
        window.localStorage.setItem('custom', JSON.stringify(custom));
        $window.location.reload();
    };

    $scope.changeMessage = function () {
        let local = window.localStorage.getItem('custom');
        local = local ? JSON.parse(local): {};
        local['welcomeMessage'] = $scope.welcomeMessage;
        window.localStorage.setItem('custom', JSON.stringify(local));
        $window.location.reload();
    };
}]);