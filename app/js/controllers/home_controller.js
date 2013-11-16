angular.module("app").controller('HomeController', function($scope, $location, socket) {
  $scope.rooms = [];

  $scope.login =  function(username){
  	socket.emit('connect', username);
  }

  	socket.on('onConnect', function(data) {
      $scope.rooms = data;
  });
});
