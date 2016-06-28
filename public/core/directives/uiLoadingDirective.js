(function () {
    'use strict';

    angular.module('app').directive('uiLoading', uiLoadingDirective);

    uiLoadingDirective.$inject = ['$compile', '$stateParams', '$rootScope'];

    function uiLoadingDirective($compile, $stateParams, $rootScope) {
        var directive = {
            restrict: 'AE',
            /*controller: ['$state', '$scope', '$stateParams', function ($state, $scope, $stateParams) {
             var ctrl = this;
             angular.extend(ctrl, {
             action: action
             });

             function action() {
             window.open('//'+$scope.item.link);
             }
             }],*/
            //  controllerAs: 'ctrl',
            //bindToController: true,
            link: linkFn
        };
        return directive;

        function linkFn(scope, elem, attr) {

            $rootScope.$watch('uiLoading', loading);

            var template = angular.element('<div>').append('<i class="fa fa-spinner" aria-hidden="true"></i>');
            template.addClass('uiLoading');

            function loading() {
                if ($rootScope.uiLoading) {
                    elem.append(template);
                } else {
                    angular.element(template).remove();
                }

            }

        }

    }
})();