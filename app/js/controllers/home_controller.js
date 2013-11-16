angular.module("app").controller('HomeController', function($scope, $location, socket,$rootScope, $mobileFrame) {
  $scope.rooms = [];
  $scope.chats = {'witlr':[{username:'witler mod',message:'Welcome to HackChat you have joined witlr'}], 'comsci':[], 'cardiffuni':[],'test':[]}
  $scope.joined = [];

  $scope.login =  function(){
  	socket.emit('connect', $scope.user);
    $rootScope.currentUser = $scope.user;
    $('.mobile-nav-toggle').click();

  };
  $scope.send = function (room) {
    socket.emit('msg', {'room':room, 'msg':$scope.currentMsg, 'username':$rootScope.currentUser});
    $scope.chats[room].push({'username':$rootScope.currentUser, 'message':$scope.currentMsg, 'class':'outbound'});
  };
  socket.on('onMsg', function(data){
    $scope.chats[data.room].push({'username':data.username, 'message':data.message});
  });

  socket.on('onConnect', function(data) {
      console.log(data);
      $scope.rooms = data;
  });

  $scope.goToRoom = function(room) {
    $location.path('/chat');
    // $scope.msgs = $scope.chats[room];
    socket.emit('joinRoom', {'username':$rootScope.currentUser, 'room':room})
    $scope.joined.push(room);
    $scope.currentRoom = room;
  };
});
