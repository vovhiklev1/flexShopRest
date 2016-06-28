(function () {
    'use strict';
    angular.module('app').service('desktop', desktopService);
    desktopService.$inject = ['$http', '$q', '$rootScope'];

    function desktopService($http, $q, $rootScope) {
        angular.extend(this, {
            init: init,
            getData: getData
        });
        var inst = undefined;

        function init(urlParam) {
            return inst = inst || (function () {
                    var def = $q.defer();
                    $http.post(urlParam).then(function (res) { //'./nav.less.json'
                        def.resolve(res.data);
                        $rootScope.uiLoading = false;
                    }, function (err) {
                        def.reject(err);
                        $rootScope.uiLoading = false;
                    });
                    $rootScope.uiLoading = true;
                    return def.promise;

                })();
        };

        function getData(urlParam, params) {
            var def = $q.defer();
            $http.post(urlParam, params).then(function (res) { //'./nav.less.json'
                def.resolve(res.data);
                $rootScope.uiLoading = false;
            }, function (err) {
                def.reject(err);
                $rootScope.uiLoading = false;
            });
            $rootScope.uiLoading = true;
            return def.promise;
        };


    }
})();