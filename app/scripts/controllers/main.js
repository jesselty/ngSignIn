'use strict';

/**
 * @ngdoc function
 * @name authApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the authApp
 */
angular.module('authApp')
    .controller('MainCtrl', ['$scope', 'FACEBOOK_CONSTANTS', 'GOOGLE_CONSTANTS',
        function($scope, FACEBOOK_CONSTANTS, GOOGLE_CONSTANTS) {
            $scope.FBsettings = {
                isLoggedIn: false
            };

            $scope.popup = {
                isOpen: true
            };

            $scope.login = {
                isOpen: true
            };

            $scope.signInShow = function(e, bool) {
                e.preventDefault();
                $scope.login.isOpen = bool;
            };

            $scope.popUpVisibility = function(bool) {
                $scope.popup.isOpen = bool;
            };

            $scope.$on(FACEBOOK_CONSTANTS.SIGN_IN_LISTENER, function(event, response, meresponse) {
                console.log(response, meresponse);
            });

            $scope.$on(GOOGLE_CONSTANTS.SIGN_IN_LISTENER, function(event, response, meresponse) {
                console.log(response, meresponse);
            });
        }
    ]);
