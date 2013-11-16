angular.module("app").controller('HomeController', function($scope, $location, socket) {
  $scope.rooms = [];

    socket.emit('connect', 'Daniel');
  alert("test");
  socket.on('onConnect', function(data) {
      console.log(data);
      $scope.rooms = data;
  });
});
