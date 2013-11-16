angular.module("app", ['ek.mobileFrame']).run(function($rootScope) {
  // adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = function(thing) {
    console.log(thing);
  };

  $rootScope.alert = function(thing) {
    alert(thing);
  };
}).config(['$mobileFrameProvider', function ($mobileFrameProvider) {
        $mobileFrameProvider
            .setHeaderHeight(50)
            .setFooterHeight(40)
            .setNavWidth(200);
    }]);
