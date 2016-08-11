var myApp = angular.module('myApp',['ngResource','ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
   $locationProvider.html5Mode(true);
    $routeProvider
        .when('/',{
            templateUrl:'/partials/main',
            controller:'mainCtrl'
        });
});

myApp.controller('mainCtrl', function ($scope) {
    $scope.message = "Raminder Singh";
})