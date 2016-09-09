var app = angular.module('AllasApp', ['ngRoute', 'ngAnimate']);






app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'AllasController',
            templateUrl: 'views/etusivu.html',
            activelink: ''
        })
        .when('/palvelut', {
            controller: 'AllasController',
            templateUrl: 'views/palvelut.html',
            activelink: 'services'
        })
        .when('/yhteystiedot', {
            controller: 'AllasController',
            templateUrl: 'views/yhteystiedot.html',
            activelink: 'contact'
        })
        .when('/galleria', {
            controller: 'AllasController',
            templateUrl: 'views/galleria.html',
            activelink: 'gallery'
        })
        .when('/suositukset', {
            controller: 'AllasController',
            templateUrl: 'views/suositukset.html',
            activelink: 'references'
        })
        .otherwise({
            redirectTo: '/',
            activelink: ''
        });
});



app.controller('AllasController', function($scope, $route, $interval) {
    $scope.$route = $route;
    $scope.introduction = 1;
    $scope.reference = 1;

    //suljetaan valikko kun linkkiä klikattu
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    $interval(function(){
        if ($scope.introduction < 3){
            $scope.introduction++;
        }else {
            $scope.introduction = 1;
        }
    }, 7000);

    $interval(function(){
        if ($scope.reference < 3){
            $scope.reference++;
        }else {
            $scope.reference = 1;
        }
    }, 4000);




});
