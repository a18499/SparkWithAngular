// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', ['ngResource']);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});

//Test with spark response
phonecatApp.controller('httpController',function httpController($scope, $http){
//Simple Get request

$http({
  method: 'GET',
  url: '/hellojson'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
     $scope.status = response.status;
     $scope.data = response.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

});

