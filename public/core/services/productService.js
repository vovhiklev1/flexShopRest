(function () {
    'use strict';
    angular.module('app').service('product', productService);
    productService.$inject = ['$http', 'desktop', '$q', '$stateParams', '$state'];

    function productService($http, desktop, $q, $stateParams, $state) {
        angular.extend(this, {
            init: init,
            getData: getData
        });


        function init() {

        };

        function getData(productId) {
            // var product.less = {};
            var def = $q.defer();
            var params = {
                name: productId
            };
            desktop.getData('http://localhost:3000/get/desktop', params).then(function (res) {
                def.resolve(res.data);
            }, function (err) {
                def.reject(err);
            });

            return def.promise;

        };


    }
})
();