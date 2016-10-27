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
            .state("state", {
                url: "/templates/state.html",
                templateUrl: "./templates/state.html"
            })
            .state("attract", {
                 url: "/templates/attract.html",
                 templateUrl: "./templates/attract.html"
            });


        $urlRouterProvider.otherwise('/templates/home.html');


    });


    
