angular.module("vvApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "./templates/home.html"
            })
            .state("pop", {
                url: "/pop.html",
                templateUrl: "./templates/pop.html",
            })
            .state("getlost", {
                url: "/getlost.html",
                templateUrl: "./templates/getlost.html"
            })
            .state("gallery", {
                url: "/gallery.html",
                templateUrl: "./templates/gallery.html"
            })
            .state("attract", {
                url: "/:attractId",
                templateUrl: "./templates/attract.html"
            })
            .state("videos", {
                url: "/videos.html",
                templateUrl: "./templates/videos.html"
            })
            .state("threeSixties", {
                url: "/threeSixties.html",
                templateUrl: "./templates/threeSixties.html"
            });


        $urlRouterProvider.otherwise('/home');


    });
