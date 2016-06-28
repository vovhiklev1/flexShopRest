(function () {
	'use strict';

	angular.module('app').directive('navItem', navItemDirective);

	navItemDirective.$inject = ['$compile', '$state', '$rootScope'];

	function navItemDirective($compile, $state, $rootScope) {
		var directive = {
			restrict: 'AE',
			scope: {
				'item': '=navItem'
			},
			link: linkFn
		};
		return directive;

		function linkFn(scope, elem, attr) {
			if (scope.item.show) {
				var template =
						//'<a ng-href="#/' + scope.item.action + '">' +
						'<i class="' + scope.item.icon + '" aria-hidden="true"></i>' +
						'<span>' + scope.item.caption + '</span>'
				//	'</a>'
					;

				//var link = scope.uiTool.action;
				//var template = $compile('<a ng-href="#/' + link + '">' + link + '</a>')(scope);
				var component = $compile(template)(scope);
				elem.append(component);
			}

			if (scope.item.action) {
				elem.on('click', action)
			}

			function action() {
				console.log(scope.item.action);
			//	$state.go("view.subs", {view: scope.item.action}, {inherit: false});
				//var params = scope.item.isStatePArams ? {view: scope.item.action, type: 'default'} : {view: scope.item.action};
				//$state.go("view.subs." + scope.item.action , params, {inherit: false});
				//$rootScope.navDetailsAvailable = true;

				$state.go("view.subs.desktop", { view: scope.item.action}, {inherit: false});
			}


		}

	}
})();