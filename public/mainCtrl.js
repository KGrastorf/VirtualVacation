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

        $scope.getAttr = function() {
            window.scrollTo(0, 0);
            for (var i = 0; i < $scope.places.length; i++) {
                if ($state.params.attractId == $scope.places[i]._id) {
                    $scope.oneAttr = $scope.places[i];
                }
            }
        };
        $scope.trust = $sce.trustAsHtml;


        var myApp = angular.module('myApp', []);

        //myApp.directive('myDirective', function() {});
        //myApp.factory('myService', function() {});

        function MyCtrl($scope) {
            $scope.list = attr;
            $scope.random = function() {
                return 0.5 - Math.random();
            };
        }

    });
