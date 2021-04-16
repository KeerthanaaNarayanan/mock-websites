var app = angular.module('myApp', []);
app.controller('myCtrl', ($scope) => {
    $scope.firstname = 'ken';
    $scope.lastname = 'ben';
    $scope.fullname = () => {
        return $scope.firstname + ' ' + $scope.lastname;
    };
});
