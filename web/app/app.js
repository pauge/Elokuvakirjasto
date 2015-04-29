var app = angular.module('MovieLib', ['firebase','ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
            .when('/movies', {
                templateUrl: 'movies.html'
            })
            .when('/movies/new', {
                templateUrl: 'addMovie.html'
            })
            .otherwise({
                templateUrl: 'movies.html'
            })
})

