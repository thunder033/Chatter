'use strict';

/**
 * @ngdoc overview
 * @name chatterApp
 * @description
 * # chatterApp
 *
 * Main module of the application.
 */
angular
  .module('chatterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($locationProvider, $routeProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        title: 'Home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        title: 'About',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/signup', {
        title: 'Sign Up',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($location, $rootScope){
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous){
      $rootScope.title = current.$$route.title;
    })
  });
