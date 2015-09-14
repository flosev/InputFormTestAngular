'use strict';

/**
 * @ngdoc function
 * @name streamCreaseAngularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the streamCreaseAngularTestApp
 */
angular.module('streamCreaseAngularTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.urlRegex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    var urlArr = [];
    $scope.log= urlArr;

    $scope.submitForm = function () {
      var newElem=$scope.getUrl;
      var cutHttp = newElem.replace(/(?:((?:\/\/)|^)http[s]?:\/\/)(?=[^/]*?\.)/i, "$1");
      var cutWww = cutHttp.replace(/(?:((?:\/\/)|^)www\.)(?=[^/]*?\.)/i, "$1");
      var cutRight = cutWww.split("/")[0];
      urlArr.unshift(cutRight);
      $scope.getUrl='';
    }

  });
