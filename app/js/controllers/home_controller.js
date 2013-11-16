angular.module("app").controller('HomeController', function($scope, $location, socket, $mobileFrame) {
  $scope.rooms = [];
  $scope.chats = {'witlr':[], 'comsci':[], 'cardiffuni':[],'test':[]}

  $scope.login =  function(username){
  	socket.emit('connect', username);
    $('.mobile-nav-toggle').click();

  }

  socket.on('onConnect', function(data) {
      console.log(data);
      $scope.rooms = data;

  });

  $scope.goToRoom = function(room) {
    $location.path('/chat');
    $scope.msgs = $scope.chats[room];
  };
});
