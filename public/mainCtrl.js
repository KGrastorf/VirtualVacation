angular.module("vvApp")
    .controller("mainCtrl", function($scope, mainServ, $state, $sce) {
        $scope.focused = false;

        $scope.showDest = function() {
            mainServ.getDest()
                .then(function(response) {
                    $scope.places = response;
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

        $scope.getAttr = function(id) {
            window.scrollTo(0, 0);
            for (var i = 0; i < $scope.places.length; i++) {
                if (id == $scope.places[i]._id) {
                    $scope.oneAttr = $scope.places[i];
                }
            }
        };
        $scope.trust = $sce.trustAsHtml;


        var myApp = angular.module('myApp', []);

        //myApp.directive('myDirective', function() {});
        //myApp.factory('myService', function() {});

        $scope.getLost = function() {
            $scope.showGif = true;
            var random = Math.floor(Math.random()*$scope.places.length);
            $scope.randomAttr = $scope.places[random];
            setTimeout(function(){
                $state.go("dart");
                $scope.showGif = false;
            },3050);
        };

    });
