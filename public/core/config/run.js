(function () {
    'use strict';
    angular.module('app').run(run);

    run.$inject = ['$rootScope','$animate'];

    function run($rootScope,$animate) {
        /*$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
         cfpLoadingBar.complete();
         });*/

        $rootScope.navDetailsAvailable = false;

        //$animate.enabled(true);//

    }

})();