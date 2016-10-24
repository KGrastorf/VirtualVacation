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
            .state("country", {
                url: "/templates/country.html",
                templateUrl: "./templates/country.html"
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
