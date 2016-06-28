(function () {
	'use strict';
	angular.module('app').service('nav', navService);
	navService.$inject = ['$http', '$q'];

	function navService($http, $q) {
		angular.extend(this, {
			init: init
		});
		var inst = undefined;
		function init() {
			return inst = inst || (function () {
					var def = $q.defer();
					$http.get('./nav.less.json').then(function (res) {
						def.resolve(res.data);
					}, function (err) {
						def.reject(err)
					});

					return def.promise;
				})();
		};




	}
})();