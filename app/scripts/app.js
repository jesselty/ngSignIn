'use strict';

/**
 * @ngdoc overview
 * @name authApp
 * @description
 * # authApp
 *
 * Main module of the application.
 */
angular
    .module('authApp', [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'user.auth'
    ])
    .config(['$routeProvider', '$locationProvider', 'userauthProvider',
        function($routeProvider, $locationProvider, userauthProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'about'
                })
                .otherwise({
                    redirectTo: '/'
                });

            userauthProvider.setFbSettings({
                appId: '1168184359859767',
                cookie: true,
                xfbml: true,
                version: 'v2.5'
            });

            userauthProvider.setFbLoginRtnSettings({
                scope: 'user_photos,email,publish_actions,public_profile',
                return_scopes: true
            });

            userauthProvider.setGoogleSettings({
                client_id: '987460405552-9bbspnouuev4pgvg7gms3m464bq8b6df.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin'
            });

            $locationProvider.html5Mode(true);
        }
    ]);
