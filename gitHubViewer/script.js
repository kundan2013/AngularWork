(function(){
  var myApp = angular.module('githubViewer', []);
  var MainController = function($scope, $http){
    var successFns = function(response){
      $scope.user = response.data;
    };
    
    var ErrorFns = function(){
      $scope.user = "NO USER INFO FOUND";
    };
    
    var url = 'https://api.github.com/users/kundan2013';
    var promise = $http.get(url);
    promise.then(successFns, ErrorFns);
  };
  
  myApp.controller('MainController', ['$scope', '$http', MainController]);
  
}());