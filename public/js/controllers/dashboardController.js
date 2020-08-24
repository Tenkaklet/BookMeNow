angular.module('boiler').controller('DashboardCtrl', ['$scope', '$firebaseArray', '$rootScope', 'Account', 'Auth', function ($scope, $firebaseArray, $rootScope, Account, Auth) {
    // Fetch external data from Same site server
    Auth.$onAuthStateChanged((user) => {
        $scope.user = user;
        Account.retrieve($scope.user.uid)
        .then(() => {
            console.log(user);
        });
    });
    const data = new kendo.data.DataSource({
        transport: {
            read: {
                url: '/data',
                dataType: 'json'
            }
        }
    });
    $scope.gridOptions = {
        dataSource: data,
        sortable: true,
        selectable: true,
        columns: [
            { field: 'Name'}
        ]
    };

    $scope.onChange = function () {
        $scope.pickedDate = $scope.datePicker.value();
    };

    $scope.handleChange = function (item) {
        $scope.data = item;
    };

    $scope.sendBook = function (book) {
        const bookDB = firebase.database().ref($rootScope.currentUser.uid).child('books');
        $firebaseArray(bookDB).$add(book);
    };
}]);