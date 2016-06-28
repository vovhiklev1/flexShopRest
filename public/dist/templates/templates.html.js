(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('core/views/about.html',
    '<div class="about">\n' +
    '	<div class="container">\n' +
    '		<h1 ng-bind="desktopCtrl.desktopData[0].caption"></h1>\n' +
    '\n' +
    '		<p ng-bind="desktopCtrl.desktopData[0].text"></p>\n' +
    '\n' +
    '		<section class="articles-wrap">\n' +
    '			<article ng-if="item.show" ng-repeat="item in desktopCtrl.desktopData[0].articles">\n' +
    '				<h2 ng-bind="item.caption"></h2>\n' +
    '\n' +
    '				<p ng-bind="item.text"></p>\n' +
    '			</article>\n' +
    '		</section>\n' +
    '\n' +
    '		<footer>\n' +
    '			<ul class="socials">\n' +
    '				<li class="item" ng-if="item.show" ui-link ng-repeat="item in desktopCtrl.desktopData[0].socials">\n' +
    '					<i ng-class="item.icon" aria-hidden="true"></i>\n' +
    '				</li>\n' +
    '			</ul>\n' +
    '\n' +
    '			<div class="address">\n' +
    '				<h2 ng-if="desktopCtrl.desktopData[0].address[0].show" ng-bind="desktopCtrl.desktopData[0].address[0].header"></h2>\n' +
    '\n' +
    '				<p ng-if="desktopCtrl.desktopData[0].address[1].show" ng-bind="desktopCtrl.desktopData[0].address[1].message"></p>\n' +
    '			</div>\n' +
    '\n' +
    '			<ul class="contacts">\n' +
    '				<li ng-if="item.show" ng-repeat="item in desktopCtrl.desktopData[0].contacts">\n' +
    '					<i ng-class="item.icon" aria-hidden="true"></i>\n' +
    '					<span ng-bind="item.caption"></span>\n' +
    '				</li>\n' +
    '			</ul>\n' +
    '		</footer>\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('core/views/desktop.html',
    '<main class="goods">\n' +
    '	<section class="header">\n' +
    '		<header>\n' +
    '			<h1>Комплектующие</h1>\n' +
    '		</header>\n' +
    '		<!--<div class="categories-wrap">\n' +
    '			<ul class="categories">\n' +
    '				<li class="item"><span>Відеокарти</span></li>\n' +
    '				<li class="item"><span>Жорсткі диски</span></li>\n' +
    '				<li class="item"><span>Кишені для HDD</span></li>\n' +
    '				<li class="item"><span>Диски SSD</span></li>\n' +
    '				<li class="item"><span>Процесори</span></li>\n' +
    '				<li class="item"><span>Материнські плати</span></li>\n' +
    '				<li class="item"><span>Оперативна пам\'ять</span></li>\n' +
    '				<li class="item"><span>Мережеві накопичувачі (NAS)</span></li>\n' +
    '				<li class="item"><span>Дисководи DVD, CD, Blu-ray</span></li>\n' +
    '			</ul>\n' +
    '		</div>-->\n' +
    '	</section>\n' +
    '\n' +
    '	<section class="goods">\n' +
    '		<div ui-view></div>\n' +
    '		<ul fix-size-prod-item>\n' +
    '			<li class="good-item repeated-item" ng-repeat="item in desktopCtrl.desktopData">\n' +
    '				<div prod-item></div>\n' +
    '\n' +
    '			</li>\n' +
    '\n' +
    '\n' +
    '		</ul>\n' +
    '\n' +
    '	</section>\n' +
    '</main>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('core/views/nav-details.html',
    '\n' +
    '<section id="nav-details">\n' +
    '    <div class="panel-line">\n' +
    '        <div class="line-wrap">\n' +
    '            <div class="line" nav-details-header>\n' +
    '                <!--<i class="fa fa-th" aria-hidden="true"></i>\n' +
    '                <span>Меню</span>-->\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--https://www.iconfinder.com/icons/-->\n' +
    '    <ul class="bar-wrap">\n' +
    '        <li class="bar-item" ng-repeat="item in navCtrl.navDetailsConfig.bar">\n' +
    '            <div class="item" nav-bar-details="item">\n' +
    '                <!--<i class="fa fa-truck" aria-hidden="true"></i>-->\n' +
    '                <!--<img src="images/full_computer.png">\n' +
    '                <span>Готовые комплекты</span>-->\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <!--<li class="bar-item">\n' +
    '            <div class="item">\n' +
    '                &lt;!&ndash;<i class="fa fa-truck" aria-hidden="true"></i>&ndash;&gt;\n' +
    '                <img src="images/detales.png">\n' +
    '                <span>Коплектующие</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li class="bar-item">\n' +
    '            <div class="item">\n' +
    '                &lt;!&ndash;<i class="fa fa-truck" aria-hidden="true"></i>&ndash;&gt;\n' +
    '                <img src="images/mouse.png">\n' +
    '                <span>Переферия</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li class="bar-item">\n' +
    '            <div class="item">\n' +
    '                &lt;!&ndash;<i class="fa fa-truck" aria-hidden="true"></i>&ndash;&gt;\n' +
    '                <img src="images/service.png">\n' +
    '                <span>Услуги</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li class="bar-item">\n' +
    '            <div class="item">\n' +
    '                &lt;!&ndash;<i class="fa fa-truck" aria-hidden="true"></i>&ndash;&gt;\n' +
    '                <img src="images/systems.png">\n' +
    '                <span>Компьютеры</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li class="bar-item">\n' +
    '            <div class="item">\n' +
    '                &lt;!&ndash;<i class="fa fa-truck" aria-hidden="true"></i>&ndash;&gt;\n' +
    '                <img src="images/dispaly.png">\n' +
    '                <span>Мониторы</span>\n' +
    '            </div>\n' +
    '        </li>-->\n' +
    '    </ul>\n' +
    '    <div nav-details-list>\n' +
    '\n' +
    '          <!-- <div ng-switch-when="2" ng-include="\'core/views/navDetailsList.html2\'"></div>-->\n' +
    '          <!--  <div  ng-include src="\'core/views/navDetailsList.html\'"></div>-->\n' +
    '          <!--  <div ng-switch-when="3" ng-include="\'core/views/navDetailsList.html2\'"></div>-->\n' +
    '\n' +
    '    </div>\n' +
    '    <!--список готов-->\n' +
    '\n' +
    '    <form name="filter">\n' +
    '        <ul class="filter">\n' +
    '            <li>\n' +
    '                <div class="filter-item">\n' +
    '                    <div class="item-wrap">\n' +
    '                        <div class="line">\n' +
    '                            <label for="second">Б/у</label>\n' +
    '                            <input type="radio" name="processors" id="second" value="second" checked>\n' +
    '                        </div>\n' +
    '                        <div class="line">\n' +
    '                            <label for="new">Новые</label>\n' +
    '                            <input type="radio" name="processors" id="new" value="new">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <div class="filter-item">\n' +
    '                    <div class="item-wrap">\n' +
    '                        <div class="line">\n' +
    '                            <label class="order-null label-left" for="priceFrom">Цена от:</label>\n' +
    '                            <input class="price" type="text" name="priceFrom" id="priceFrom" value="0">\n' +
    '                            <input class="range" type="range" name="priceFromRange" min="0" max="100000"\n' +
    '                                   step="50"/>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <div class="filter-item">\n' +
    '                    <div class="item-wrap">\n' +
    '                        <div class="line">\n' +
    '                            <label class="order-null label-left" for="priceTo">Цена до:</label>\n' +
    '                            <input class="price" type="text" name="priceTo" id="priceTo" value="0">\n' +
    '                            <input class="range" type="range" name="priceToRange" min="10.50" max="100000"\n' +
    '                                   step="50"/>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '    </form>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('core/views/nav.html',
    '<!--<ul>&lt;!&ndash;<a ui-sref="common.subs({name: item.name})">{{item.name+\'/\'+item.tool}}</a>&ndash;&gt;\n' +
    '	<li ng-repeat=" item in navCtrl.navConfig">\n' +
    '		<div ui-tool="item"></div>\n' +
    '	</li>\n' +
    '</ul>-->\n' +
    '\n' +
    '<nav id="nav" class="">\n' +
    '    <ul>\n' +
    '        <li ng-repeat=" item in navCtrl.config">\n' +
    '            <div class="panel" nav-item="item"></div>\n' +
    '        </li>\n' +
    '        <!--<li>\n' +
    '            <div class="panel">\n' +
    '                <i class="fa fa-th" aria-hidden="true"></i>\n' +
    '                <span>Меню</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '            <div class="panel">\n' +
    '                <i class="fa fa-american-sign-language-interpreting" aria-hidden="true"></i>\n' +
    '                <span>Мастер подбора компьютера</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '            <div class="panel">\n' +
    '                <i class="fa fa-shopping-cart" aria-hidden="true"></i>\n' +
    '                <span>Корзина</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '            <div class="panel">\n' +
    '                <i class="fa fa-truck" aria-hidden="true"></i>\n' +
    '                <span>Доставка</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '            <div class="panel">\n' +
    '                <i class="fa fa-users" aria-hidden="true"></i>\n' +
    '                <span>О нас</span>\n' +
    '            </div>\n' +
    '        </li>-->\n' +
    '    </ul>\n' +
    '</nav>\n' +
    '\n' +
    '<div ui-view="navdetails" nav-details ng-if="navDetailsAvailable"></div>\n' +
    '<div ui-view="desktop" id="main" ui-loading></div>\n' +
    '<!--<div ui-view="product.less" id="product.less"></div>-->\n' +
    '\n' +
    '\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('core/views/navDetailsList.html',
    '<ul class="detail-list">\n' +
    '	<li ng-repeat="item in listCtrl.list">\n' +
    '		<div nav-link-details="item" class="detail-item">\n' +
    '			<!--<div class="item-wrap">\n' +
    '				<div class="line">\n' +
    '					<span>Процессоры</span>\n' +
    '				</div>\n' +
    '			</div>-->\n' +
    '		</div>\n' +
    '	</li>\n' +
    '	<!--<li>\n' +
    '		<div class="detail-item">\n' +
    '			<div class="item-wrap">\n' +
    '				<div class="line">\n' +
    '					<span>Материнские платы</span>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</li>\n' +
    '	<li>\n' +
    '		<div class="detail-item">\n' +
    '			<div class="item-wrap">\n' +
    '				<div class="line">\n' +
    '					<span>Корпуса</span>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</li>\n' +
    '	<li>\n' +
    '		<div class="detail-item">\n' +
    '			<div class="item-wrap">\n' +
    '				<div class="line">\n' +
    '					<span>Видеокарты</span>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</li>-->\n' +
    '\n' +
    '</ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('core/views/prodItem.html',
    '<figure>\n' +
    '    <!--<div class="img">\n' +
    '\n' +
    '    </div>-->\n' +
    '    <div class="img-wrap">\n' +
    '        <img ng-src="{{item.img}}">\n' +
    '    </div>\n' +
    '    <figcaption>{{item.caption}}\n' +
    '    </figcaption>\n' +
    '</figure>\n' +
    '<div class="good-footer">\n' +
    '    <div class="left-side">\n' +
    '        <div class="price-wrap">\n' +
    '            <span class="number">{{item.price}} </span><span class="currency">грн</span>\n' +
    '        </div>\n' +
    '        <div class="state-wrap">\n' +
    '            <span>{{item.condition}}</span>\n' +
    '        </div>\n' +
    '        <div class="topseller-wrap">\n' +
    '            <!--	Лучший выбор!\n' +
    '                <img src="img/medal.png">-->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="right-side">\n' +
    '        <div class="buy-wrap">\n' +
    '            <div class="buy">\n' +
    '                Buy\n' +
    '            </div>\n' +
    '            <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('core/views/product.html',
    '<main class="product">\n' +
    '	<section class="header">\n' +
    '		<header>\n' +
    '			<h1>Title</h1>\n' +
    '		</header>\n' +
    '		<!--<div class="categories-wrap">\n' +
    '			<ul class="categories">\n' +
    '				<li class="item"><span>Відеокарти</span></li>\n' +
    '				<li class="item"><span>Жорсткі диски</span></li>\n' +
    '				<li class="item"><span>Кишені для HDD</span></li>\n' +
    '				<li class="item"><span>Диски SSD</span></li>\n' +
    '				<li class="item"><span>Процесори</span></li>\n' +
    '				<li class="item"><span>Материнські плати</span></li>\n' +
    '				<li class="item"><span>Оперативна пам\'ять</span></li>\n' +
    '				<li class="item"><span>Мережеві накопичувачі (NAS)</span></li>\n' +
    '				<li class="item"><span>Дисководи DVD, CD, Blu-ray</span></li>\n' +
    '			</ul>\n' +
    '		</div>-->\n' +
    '	</section>\n' +
    '\n' +
    '	<section class="product">\n' +
    '		<div class="img-container">\n' +
    '			<ul class="img-nav">\n' +
    '				<li class="item"><img src="images/product_pc_1.png"/></li>\n' +
    '				<li class="item"><img src="images/product_pc_2.png"/></li>\n' +
    '			</ul>\n' +
    '\n' +
    '			<div class="img-target">\n' +
    '				<img src="images/product_pc_3.png"/>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<section class="info">\n' +
    '			<div class="good-caption">\n' +
    '				<span>2AMD Quad Core Gaming Desktop PC Computer 4.0 G Custom Built System WIN 7 New</span>\n' +
    '			</div>\n' +
    '			<div class="good-tools">\n' +
    '				<div class="left-side">\n' +
    '					<div class="price-wrap">\n' +
    '						<span class="number">7 699 </span><span class="currency">грн</span>\n' +
    '					</div>\n' +
    '					<div class="state-wrap">\n' +
    '						<span>Б/у</span>\n' +
    '					</div>\n' +
    '					<div class="topseller-wrap">\n' +
    '						<!--	Лучший выбор!\n' +
    '							<img src="img/medal.png">-->\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<div class="right-side">\n' +
    '					<div class="buy-wrap">\n' +
    '						<div class="buy">\n' +
    '							Buy\n' +
    '						</div>\n' +
    '						<i class="fa fa-cart-arrow-down" aria-hidden="true"></i>\n' +
    '					</div>\n' +
    '\n' +
    '\n' +
    '				</div>\n' +
    '\n' +
    '			</div>\n' +
    '		</section>\n' +
    '		<section class="details">\n' +
    '			<div class="header">\n' +
    '				<span>Характеристики товара</span>\n' +
    '			</div>\n' +
    '			<ul>\n' +
    '				<li>\n' +
    '					<div class="title"><span>Объём памяти:</span></div>\n' +
    '					<div class="value"><span>Английский, Русский, Испанский, Шведский, П</span></div>\n' +
    '				</li>\n' +
    '				<li>\n' +
    '					<div class="title"><span>Объём:</span></div>\n' +
    '					<div class="value"><span>Мультитач,Датчик G,OTG,Две камеры</span></div>\n' +
    '				</li>\n' +
    '				<li>\n' +
    '					<div class="title"><span>Объём памяти:</span></div>\n' +
    '					<div class="value"><span>1 ГБ</span></div>\n' +
    '				</li>\n' +
    '				<li>\n' +
    '					<div class="title"><span>памяти:</span></div>\n' +
    '					<div class="value"><span>1 ГБ</span></div>\n' +
    '				</li>\n' +
    '				<li>\n' +
    '					<div class="title"><span>Объём памяти:</span></div>\n' +
    '					<div class="value"><span>1 ГБ</span></div>\n' +
    '				</li>\n' +
    '				<li>\n' +
    '					<div class="title"><span>Объём памяти:</span></div>\n' +
    '					<div class="value"><span>1 ГБ</span></div>\n' +
    '				</li>\n' +
    '				<li>\n' +
    '					<div class="title"><span>Объём памяти:</span></div>\n' +
    '					<div class="value">1 ГБ</div>\n' +
    '				</li>\n' +
    '				<li>\n' +
    '					<div class="title"><span>Объём памяти:</span></div>\n' +
    '					<div class="value"><span>1 ГБ</span></div>\n' +
    '				</li>\n' +
    '			</ul>\n' +
    '		</section>\n' +
    '\n' +
    '		<!--<ul>\n' +
    '			<li ng-repeat="item in productCtrl.productData">\n' +
    '				<div>{{item}}</div>\n' +
    '			</li>\n' +
    '		</ul>-->\n' +
    '\n' +
    '	</section>\n' +
    '</main>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('core/views/view.html',
    '\n' +
    '<div ui-view="nav"></div>\n' +
    '<div ui-view="desktop"></div>\n' +
    '\n' +
    '\n' +
    '');
}]);
})();
