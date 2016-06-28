
(function () {
	'use strict';

	angular.module('app').directive('uiLink', uiLinkDirective);

	uiLinkDirective.$inject = ['$compile', '$stateParams'];

	function uiLinkDirective($compile, $stateParams) {
		var directive = {
			restrict: 'AE',
			controller: ['$state', '$scope', '$stateParams', function ($state, $scope, $stateParams) {
				var ctrl = this;
				angular.extend(ctrl, {
					action: action
				});

				function action() {
					window.open('//'+$scope.item.link);
				}
			}],
			controllerAs: 'ctrl',
			bindToController: true,
			link: linkFn
		};
		return directive;

		function linkFn(scope, elem, attr) {

			if (scope.item.link) {
				elem.on('click', scope.ctrl.action);
			}

		}

	}
})();