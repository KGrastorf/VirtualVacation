angular.module("vvApp")
.controller("searchCtrl", function($scope, mainServ, $state){
  app.directive('ngSearch', function() {
  return {
    restrict: 'AEC',
    require: '^ngModel',
    scope: {
      ngDestination: '=',
      onSend: '&',
      fromName: '@'
    },
    template: '<div class="search"></div>',
    templateUrl: 'templates/search.html',
  };
});

});
