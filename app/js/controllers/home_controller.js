angular.module("app").controller('HomeController', function($scope, $location, socket) {
  $scope.rooms = [];

<<<<<<< HEAD
  $scope.login =  function(username){
  	socket.emit('connect', username);
  }

  	socket.on('onConnect', function(data) {
=======
    socket.emit('connect', 'Daniel');
  socket.on('onConnect', function(data) {
      console.log(data);
>>>>>>> 6d590fd491648a59950c0334a2cce445ff06e4fa
      $scope.rooms = data;
  });
});
