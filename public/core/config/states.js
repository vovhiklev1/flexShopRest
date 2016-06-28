(function () {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('view', {
                abstract: true,
                url: '/:view',
                views: {
                    'view': {
                        templateUrl: "core/views/nav.html",
                        controller: 'navController as navCtrl'
                    }
                },
                resolve: {
                    navConfigData: ['desktop', function (desktop) {
                        return desktop.init('http://localhost:3000/get/nav');
                        //return desktop.init('./nav.json');
                    }]
                },
                onEnter: ['navConfigData', '$stateParams', '$rootScope', '$state', function (navConfigData, $stateParams, $rootScope, $state) {
                    $rootScope.navDetailsAvailable = false;
                    angular.forEach(navConfigData, function (val, key) {
                        if (val.nav_details && $stateParams.view == val.action) {
                            $rootScope.navDetailsAvailable = true;
                        }
                    });
                    //$rootScope.$broadcast('stateChangeSuccess', {});


                }]
            })
            .state('view.subs', {
                url: '',
                views: {
                    'navdetails@view': {
                        templateUrl: "core/views/nav-details.html"
                    },
                    'desktop@view': {
                        template: '<div ui-view></div>',
                        //template: '<div ui-view="products"></div> ',
                        /*,
                         controller: 'desktopController as desktopCtrl',
                         resolve: {
                         desktopData: ['http', function (http) {
                         return http.init('./products.json');
                         }]
                         },
                         onEnter: ['desktopData', '$stateParams', '$rootScope', function (desktopData, $stateParams, $rootScope) {
                         /!*$rootScope.navDetailsAvailable = false;
                         angular.forEach(navConfigData, function (val, key) {
                         if (val.nav_details && $stateParams.view == val.action) {
                         $rootScope.navDetailsAvailable = true;
                         }

                         });*!/
                         //$rootScope.$broadcast('stateChangeSuccess', {});

                         }]*/
                        controller: ['$state', function ($state) {
                            //	$state.go("view.subs.desktop", {productId: 'defaultPage'}, {inherit: true});
                        }]
                    }
                }
                ,
                onEnter: ['$state', '$rootScope', '$stateParams', function ($state, $rootScope, $stateParams) {
                    //$rootScope.desktopIsActive = !$state.includes("view.subs.product");
                    //$state.go("view.subs." + $stateParams.view, {}, {inherit: false});
                }]
            })

            /*
             рабочий вариант
             .state('view.subs.desktop', {
             url: '/:type',
             templateUrl: "core/views/desktop.html",
             controller: 'desktopController as desktopCtrl',
             resolve: {
             desktopData: ['desktop', function (desktop) {
             return desktop.getData('./products.json');
             }]
             },
             onEnter: ['desktopData', '$stateParams', '$rootScope', '$state', function (desktopData, $stateParams, $rootScope, $state) {
             /!*$rootScope.navDetailsAvailable = false;
             angular.forEach(navConfigData, function (val, key) {
             if (val.nav_details && $stateParams.view == val.action) {
             $rootScope.navDetailsAvailable = true;
             }

             });*!/
             //$rootScope.$broadcast('stateChangeSuccess', {});
             }]
             })*/
            .state('view.subs.desktop', {
                url: '/:type?/:subtype?',
                templateUrl: function ($stateParams) {
                    return 'core/views/' + $stateParams.view + '.html';
                },
                controllerProvider: ['$controller', '$stateParams', function ($controller, $stateParams) {
                    var ctrlName = $stateParams.view + 'Controller as ' + $stateParams.view + 'Ctrl';
                    try {
                        $controller(ctrlName, {"$scope": {}}, true);
                        return ctrlName;
                    } catch (error) {
                        return 'desktopController as desktopCtrl'
                    }
                }],
                resolve: {
                    desktopData: ['$stateParams', 'desktop', function ($stateParams, desktop) {
                        //return desktop.getData('./'+$stateParams.view+'.json');
                        var params = {
                            conf: {},
                            query: {
                                type: $stateParams.type,
                                subtype: $stateParams.subtype
                            }
                        };

                        switch ($stateParams.view) {
                            case 'desktop':
                                params['conf']['sizeData'] = 'small';
                                break;
                            default:
                                params = {};
                        }
                        ;

                        return desktop.getData('http://localhost:3000/get/' + $stateParams.view, params);
                    }]
                },
                onEnter: ['desktopData', '$stateParams', '$rootScope', '$state', function (desktopData, $stateParams, $rootScope, $state) {
                    /*$rootScope.navDetailsAvailable = false;
                     angular.forEach(navConfigData, function (val, key) {
                     if (val.nav_details && $stateParams.view == val.action) {
                     $rootScope.navDetailsAvailable = true;
                     }

                     });*/
                    //$rootScope.$broadcast('stateChangeSuccess', {});
                }]
            })


            .state('view.subs.product', {
                url: '/product/:type/:productId',
                /*views: {
                 "product.less": {*/
                templateUrl: "core/views/product.html",
                controller: 'productController as productCtrl'
                /*	}
                 }*/, resolve: {
                    productData: ['desktop', 'product', '$stateParams', function (desktop, product, $stateParams) {
                        var params = {name: $stateParams.productId};
                        return desktop.getData('http://localhost:3000/get/desktop', params);
                    }
                    ]
                }
                ,
                onEnter: ['$stateParams', '$rootScope', '$state', function ($stateParams, $rootScope, $state) {
                    /*$rootScope.navDetailsAvailable = false;
                     angular.forEach(navConfigData, function (val, key) {
                     if (val.nav_details && $stateParams.view == val.action) {
                     $rootScope.navDetailsAvailable = true;
                     }

                     });*/
                    //$rootScope.$broadcast('stateChangeSuccess', {});

                  //  $stateParams.view = 'products';
                }]
            })


    }
    ;
})
();