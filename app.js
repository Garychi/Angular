/**
 * Created by Mos on 2016/12/19.
 */

// Configure loading modules from the node_modules directory,
requirejs.config({

    paths: {
        'angular': 'node_modules/angular/angular.min',
        "angular-ui-router": "node_modules/angular-ui-router/release/angular-ui-router",
        'angularAMD': 'node_modules/angular-amd/angularAMD',
        "ngload": "node_modules/angular-amd/ngload",
        "HomeService":"app/service/HomeService"
    },
    shim: {
        'angular': {exports: "angular"},
        "angular-ui-router": ["angular"],
        'angularAMD': ["angular"],
        "ngload": ["angularAMD"]
    }
});


// bootstrap
define(["angular", "angularAMD", "angular-ui-router"], function (angular, angularAMD) {
    var app = angular.module('app', ["ui.router"]);

    // routes
    var registerRoutes = function ($stateProvider, $urlRouterProvider) {

        // default
        $urlRouterProvider.otherwise("/app/homework");

        // route
        $stateProvider

        // home
            .state("homework", angularAMD.route({
                url: "/app/homework",
                templateUrl: "app/homework/homework.html",
                controllerUrl: "app/homework/homework.js"
            }))

        // // home
        // .state("about", angularAMD.route({
        //     url: "/about",
        //     templateUrl: "about.html",
        //     controllerUrl: "about.js"
        // }))
        ;
    };

    // config
    app.config(["$stateProvider", "$urlRouterProvider", registerRoutes]);

    // bootstrap
    return angularAMD.bootstrap(app);
});