
const app = angular.module('boiler', ['ngRoute', 'ngSanitize', 'kendo.directives', 'ui.bootstrap', 'ngSanitize', 'firebase']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
    })
    .when('/register', {
        templateUrl: 'partials/registration.html',
        controller: 'RegistrationCtrl'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'DashboardCtrl',
        resolve: {
            "currentAuth": ["Auth", function (Auth) {
                return Auth.$requireSignIn();
            }]
        }
    })
    .when('/customize', {
        templateUrl: 'partials/customize.html',
        controller: 'CustomizeCtrl',
    })
}])


app.run(function($rootScope, $window, Auth, $location) {
    Auth.$onAuthStateChanged((user) => {
        $rootScope.currentUser = user;
    });
    $rootScope.$on('$routeChangeError', (param1, param2, param3, error) => {
        if(error === 'AUTH_REQUIRED') {
            $location.path('/register');
        } 
    });
    if($window.localStorage.custom) {
        const custom = JSON.parse($window.localStorage.custom);
        $rootScope.textColor = custom.textColor;
        $rootScope.bgColor = custom.bgColor;
        $rootScope.welcomeMessage = custom.welcomeMessage;
    }
});