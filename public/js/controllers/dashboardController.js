angular.module('boiler').controller('DashboardCtrl', ['$scope', '$firebaseArray', '$timeout', 'Account', 'Auth', function ($scope, $firebaseArray, $timeout, Account, Auth) {
    // Fetch external data from Same site server
    Auth.$onAuthStateChanged((user) => {
        $scope.user = user;
        Account.retrieve($scope.user.uid)
        .then((data) => {
            $scope.data = data.data[0];
            let arr = Object.keys($scope.data).map((k) => $scope.data[k]);
            $scope.data = arr;
        });
    });


    $scope.gridOptions = {
        sortable: true,
        selectable: true,
        columns: [
            { field: 'author'},
            { field: 'title'}
        ]
    };

    $scope.onChange = function () {
        $scope.pickedDate = $scope.datePicker.value();
    };

    $scope.handleChange = function (item) {
        $scope.selected = item;
        
    };

    $scope.sendBook = function (book) {
        if(!book) {
            $scope.error = 'Please fill in the form';
            return;
        }
        const bookDB = firebase.database().ref($scope.user.uid).child('books');
        $firebaseArray(bookDB).$add(book);
        $timeout(() => {
            window.location.reload();
        }, 1500);
    };
}]);