(function () {
	'use strict';

	angular.module('app').controller('desktopController', desktopController);

	desktopController.$inject = ['desktopData','desktop', '$scope', '$stateParams'];

	function desktopController(desktopData,desktop, $scope, $stateParams) {
		var ctrl = this;

		angular.extend(ctrl, {
			desktopData: {}
			//  config: {}
		});

		ctrl.desktopData = desktopData;
		//ctrl.isActive = true;

		$scope.$on('GET_PRODUCTS', function (event, data) {
			var params = {
				view: $stateParams.view,
				name: data.name
			};
			desktop.getData('./' + $stateParams.view + '.json1', params);
			// $scope.navCtrl.currBar = data.newVal;
			//$scope.$apply();
		});


	}
})();