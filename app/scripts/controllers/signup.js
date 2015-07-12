'use strict';

/**
 * @ngdoc function
 * @name chatterApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the chatterApp
 */
angular.module('chatterApp')
  .controller('SignupCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageTitle = "Sign Up";
  });
