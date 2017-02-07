var app = angular.module('app', ['ngRoute', 'ngAnimate']);


app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'views/etusivu.html'
        })
        .when('/yhteystiedot', {
            templateUrl: 'views/yhteystiedot.html'
        })
        .when('/galleria', {
            templateUrl: 'views/galleria.html'
        })
        .when('/suositukset', {
            templateUrl: 'views/suositukset.html'
        })
});


lightbox.option({
    'albumLabel': "Kuva %1 / %2"
})