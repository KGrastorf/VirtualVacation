angular.module("vvApp")
.controller("mainCtrl", function($scope, mainServ){
  $scope.places;
  $scope.focused = false;

  $scope.showDest = function() {
      mainServ.getDest()
          .then(function(response) {
              $scope.place = response;
          });
  };
  $scope.showDest();

  $scope.addDest = function(place) {
      var addObj = {
          name: place.name,
          brand: place.brand
      };
      mainServ.newDest(addObj)
          .then(function(response) {
              $scope.thingplace = "";
              $scope.showDest();
          });
  };

  $scope.changeDest = (function(place) {
      mainServ.changeDest(place)
          .then(function(response) {
              $scope.showDest();
          });
  });

  $scope.deleteDest = (function(place) {
      mainServ.deleteDest(place)
          .then(function(response) {
              $scope.showDest();
          });
  });

  });
