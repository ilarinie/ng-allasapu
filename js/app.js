var app = angular.module('AllasApp', ['ngRoute']);


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

app.controller('AllasController', function($scope, $route) {
    $scope.$route = $route;

    //suljetaan valikko kun linkkiä klikattu
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });
});




$("#frontpagelink").click(function() {
    $("#frontpage").show();
    $("#gallery").hide();
    $("#services").hide();
    $("#contacts").hide();
    $("#references").hide();
});
$("#gallerylink").click(function() {
    $("#frontpage").hide();
    $("#gallery").show();
    $("#services").hide();
    $("#contacts").hide();
    $("#references").hide();
});
$("#servicelink").click(function() {
    $("#frontpage").hide();
    $("#gallery").hide();
    $("#services").show();
    $("#contacts").hide();
    $("#references").hide();
});
$("#contactslink").click(function() {
    $("#frontpage").hide();
    $("#gallery").hide();
    $("#services").hide();
    $("#contacts").show();
    $("#references").hide();
});
$("#referenceslink").click(function() {
    $("#frontpage").hide();
    $("#gallery").hide();
    $("#services").hide();
    $("#contacts").hide();
    $("#references").show();
});
