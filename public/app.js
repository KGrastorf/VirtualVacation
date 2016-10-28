angular.module("vvApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/templates/home.html",
                templateUrl: "./templates/home.html"
            })
            .state("pop", {
                url: "/templates/pop.html",
                templateUrl: "./templates/pop.html",
            })
            .state("getlost", {
                url: "/templates/getlost.html",
                templateUrl: "./templates/getlost.html"
            })
            .state("gallery", {
                url: "/templates/gallery.html",
                templateUrl: "./templates/gallery.html"
            })
            .state("attract", {
                 url: "/templates/attract.html",
                 templateUrl: "./templates/attract.html"
             })
             .state("videos", {
                 url: "/templates/videos.html",
                 templateUrl: "./templates/videos.html"
             })
             .state("threeSixties", {
                  url: "/templates/threeSixties.html",
                  templateUrl: "./templates/threeSixties.html"
            });


        $urlRouterProvider.otherwise('/templates/home.html');


    });

    $scope.coverFilter = function (item) {
  return item === 'YNP Cover'; 
};
