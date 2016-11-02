angular.module("vvApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "./templates/home.html"
            })
            .state("pop", {
                url: "/pop",
                templateUrl: "./templates/pop.html",
            })
            .state("getlost", {
                url: "/getlost",
                templateUrl: "./templates/getlost.html"
            })
            .state("gallery", {
                url: "/gallery/:galleryId",
                templateUrl: "./templates/gallery.html"
            })
            .state("attract", {
                url: "/attract/:attractId",
                templateUrl: "./templates/attract.html"
            })
            .state("videos", {
                url: "/videos/:videosId",
                templateUrl: "./templates/videos.html"
            })
            .state("threeSixties", {
                url: "/threeSixties/:threeSixtiesId",
                templateUrl: "./templates/threeSixties.html"
              })
              .state("search", {
                  url: "/search",
                  templateUrl: "./templates/search.html"
            });


        $urlRouterProvider.otherwise('/home');


    });
