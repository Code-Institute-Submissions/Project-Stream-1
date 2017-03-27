var app = angular.module('Gondola', ['ngRoute', 'RouteControllers','gondolaDirectives']);
 
angular.module('Gondola').config(function($routeProvider) {
 
    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/activities', {
        templateUrl: 'templates/activities.html',
        controller: 'HomeController'
    })
    .when('/new_products', {
        templateUrl: 'templates/new_products.html',
        controller: 'HomeController'
    })

    .when('/contacts', {
        templateUrl: 'templates/contacts.html',
        controller: 'ContactController'
    })
    .when("/news", {
        templateUrl: "templates/news.html",
        controller: "NewsListController"
    });

});