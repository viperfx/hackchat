angular.module("app").controller('HomeController', function($scope, $location, socket, $mobileFrame) {
  $scope.rooms = [];

  $scope.login =  function(username){
  	socket.emit('connect', username);

  }

  socket.on('onConnect', function(data) {
      console.log(data);
      $scope.rooms = data;

  });
});
