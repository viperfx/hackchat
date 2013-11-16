angular.module("app").service('ChatService', function($http) {
  // these routes map to stubbed API endpoints in config/server.js
  var service = this;
  var currentUsername = 'Guest';

  this.getUsername = function () {
    return currentUsername;
  };

});
