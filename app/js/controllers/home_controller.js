angular.module("app").controller('HomeController', function($scope, $location, socket) {
  $scope.rooms = [];

    socket.emit('connect', 'Daniel');
  socket.on('onConnect', function(data) {
      console.log(data);
      $scope.rooms = data;
  });
});
