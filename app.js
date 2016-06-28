var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./mongodb');

//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/get/:collect', function (req, res) {
    var callback = function (data) {
        res.json(data);
    };
    var findData = {};
    /*   if (Object.keys(req.query).length) {
     var query = req.query;
     // findData[param] = '<i>';
     findData['query'] = query;
     }*/
    /* if (req.body.name) {
     var query = {};
     findData['query'] = {name: req.body.name};
     }*/

    if (req.body.query) {
        var query = {};
        for (i in req.body.query) {
            if (req.body.query[i])
                query[i] = req.body.query[i];
        }
        findData['query'] = query;
    }

    if (req.params.collect) {
        var param = req.params.collect;
        // findData[param] = '<i>';
        findData['collection'] = param;
    }
    if (req.body.conf) {
        var select = {};
        if (req.body.conf.sizeData == 'small') {
            select = {
                "name": "1",
                "type": "1",
                "caption": "1",
                "img": "1",
                "show": 1,
                "price": "1",
                "action": "1",
                "condition": "1"
            };
        }
        findData['select'] = select;
    }


    db.find(findData, callback);
});

app.use('/edit/:name', function (req, res) {

    var callback = function (data) {
        res.json(data);
    };

    if (req.params.name) {
        var param = req.params.name;
        var findData = {};
        findData[param] = '<i>';
    }
    else {
        var findData = {};
    }

    var editData = {
        "tool": 'nav-detail2'
    };

    db.edit(findData, editData, callback);
})
;

app.use('/del/:name', function (req, res) {

    var callback = function (data) {
        res.json(data);
    };

    if (req.params.name) {
        var param = req.params.name;
        var removeData = {};
        removeData[param] = '<i>';
    }
    else {
        var removeData = {};
    }

    db.remove(removeData, callback);
})
;

app.use('/add/:collect', function (req, res) {
    var callback = function (data) {
        res.json(data);
    };
    var addData = {};

    /* var addData = {
     "name": "nav",
     "caption": "10075",
     "show": "1480",
     'icon': '<i>'
     };*/

    if (req.params.collect) {
        var param = req.params.collect;
        // findData[param] = '<i>';
        addData['collection'] = param;

        //nav
        /*  var addData = [
         {
         "name": "menu",
         "caption": "Меню",
         "action": "desktop",
         "icon": "fa fa-th",
         "show": true,
         "nav_details": [
         {
         "detail_header": {
         "name": "nav_detail_header",
         "caption": "Меню",
         "icon": "fa fa-th",
         "show": true,
         "type": "nav_detail_header"
         }
         },
         {
         "bar": [
         {
         "name": "complete_package",
         "caption": "Готовые комплекты",
         "action": "complete_package",
         "img": "images/full_computer.png",
         "show": true,
         "type": "nav_detail_tool",
         "actionType": "CHANGE_CURR_BAR"
         },
         {
         "name": "components",
         "caption": "Коплектующие",
         "action": "components",
         "img": "images/detales.png",
         "show": true,
         "type": "nav_detail_tool",
         "actionType": "CHANGE_CURR_BAR"
         },
         {
         "name": "periphery",
         "caption": "Переферия",
         "action": "periphery",
         "img": "images/mouse.png",
         "show": true,
         "type": "nav_detail_tool"
         },
         {
         "name": "services",
         "caption": "Услуги",
         "action": "services",
         "img": "images/service.png",
         "show": true,
         "type": "nav_detail_tool"
         },
         {
         "name": "computers",
         "caption": "Компьютеры",
         "action": "computers",
         "img": "images/systems.png",
         "show": true,
         "type": "nav_detail_tool"
         },
         {
         "name": "dispalys",
         "caption": "Мониторы",
         "action": "dispalys",
         "img": "images/dispaly.png",
         "show": true,
         "type": "nav_detail_tool"
         }
         ]
         },
         {
         "link": [
         {
         "name": "1",
         "caption": "Процессоры",
         "action": "cpu",
         "show": true,
         "parent": "complete_package"
         },
         {
         "name": "2",
         "caption": "Материнские платы",
         "action": "mather_board",
         "show": true,
         "parent": "components"
         },
         {
         "name": "3",
         "caption": "Корпуса",
         "action": "box",
         "show": true,
         "parent": "components"
         },
         {
         "name": "4",
         "caption": "Видеокарты",
         "action": "video_card",
         "show": true,
         "parent": "components"
         },
         {
         "name": "5",
         "caption": "HDD",
         "action": "hdd",
         "show": true,
         "parent": "complete_package"
         }
         ]
         }
         ]
         },
         {
         "name": "master",
         "caption": "Мастер подбора",
         "icon": "fa fa-hand-o-right",
         "action": "master",
         "show": true,
         "nav_details": [
         {
         "detail_header": {
         "name": "nav_detail_header",
         "caption": "Мастер подбора",
         "icon": "fa fa-american-sign-language-interpreting",
         "show": true,
         "type": "nav_detail_header"
         }
         },
         {
         "bar": [
         {
         "name": "complete_package",
         "caption": "Готовые комплекты",
         "action": "complete_package",
         "img": "images/full_computer.png",
         "show": true,
         "type": "nav_detail_tool"
         },
         {
         "name": "components",
         "caption": "Коплектующие",
         "action": "components",
         "img": "images/detales.png",
         "show": true,
         "type": "nav_detail_tool"
         }
         ]
         },
         {
         "link": [
         {
         "name": "complete_package",
         "caption": "Процессоры",
         "action": "complete_package",
         "show": true
         },
         {
         "name": "complete_package",
         "caption": "Материнские платы",
         "action": "complete_package",
         "show": true
         }
         ]
         }
         ]
         },
         {
         "name": "cart",
         "caption": "Корзина",
         "icon": "fa fa-shopping-cart",
         "action": "cart",
         "show": true
         },
         {
         "name": "truck",
         "caption": "Доставка",
         "icon": "fa fa-truck",
         "action": "truck",
         "show": true
         },
         {
         "name": "about",
         "caption": "О нас",
         "icon": "fa fa-shopping-cart",
         "action": "about",
         "show": true,
         "isStateParams": false
         }
         ];*/

        //about
        /* var data = {
         "caption": "Leave your problems with the choice and we will give you quality in exchange.",
         "text": "Simply getting from point A to point B used to be enough. But today's drivers also care about the quality of the trip. With a personalized experience for the driver, Wi-Fi for the kids in the backseat and safety for all, the latest in automobile technology is improving the ride for everyone.",
         "articles": [
         {
         "show": true,
         "caption": "Quality",
         "text": "The X12 LTE modem integrates the most advanced 4G LTE technologies announced in a system on a chip (SoC), enabling continuous, secure connectivity for in-car technology and personal devices."
         },
         {
         "show": true,
         "caption": "Speed choice",
         "text": "The X12 LTE modem integrates the most advanced 4G LTE technologies announced in a system on a chip (SoC), enabling continuous, secure connectivity for in-car technology and personal devices."
         },
         {
         "show": true,
         "caption": "Support",
         "text": "The X12 LTE modem integrates the most advanced 4G LTE technologies announced in a system on a chip (SoC), enabling continuous, secure connectivity for in-car technology and personal devices."
         }
         ],
         "socials": [
         {
         "name": "linkedin",
         "link": "www.google.com",
         "icon": "fa fa-linkedin",
         "show": true
         },
         {
         "name": "fa fa-facebook",
         "link": "www.google.com.ua",
         "icon": "fa fa-facebook",
         "show": true
         },
         {
         "name": "fa fa-twitter",
         "link": "www.google.com.ua",
         "icon": "fa fa-twitter",
         "show": true
         },
         {
         "name": "fa fa-vk",
         "link": "www.google.com.ua",
         "icon": "fa fa-vk",
         "show": true
         },
         {
         "name": "fa fa-google-plus",
         "link": "www.google.com.ua",
         "icon": "fa fa-google-plus",
         "show": true
         }
         ],
         "address": [
         {
         "header": "We are based in Kiev.",
         "show": true
         },
         {
         "message": "We work with clients from all over Ukraine!",
         "show": true
         }
         ],
         "contacts": [
         {
         "name": "mail",
         "caption": "shop@gmail.com",
         "icon": "fa fa-envelope",
         "show": true
         },
         {
         "name": "mobile",
         "caption": "+38(067)980-33-92",
         "icon": "fa fa-phone",
         "show": true
         },
         {
         "name": "home",
         "caption": "Kiev, Ukraine",
         "icon": "fa fa-home",
         "show": true
         }
         ]
         }
         ;*/

        var data = [
            {
                "name": "1",
                "type": "complete_package",
                "caption": "1AMD Quad Core Gaming Desktop PC Computer 4.0 G Custom Built System WIN 7 New",
                "img": "images/pc.png",
                "show": true,
                "price": "7 699",
                "action": "product",
                "condition": "Б/у"
            },
            {
                "name": "2",
                "type": "complete_package",
                "caption": "2AMD Quad Core Gaming Desktop PC Computer 4.0 G Custom Built System WIN 7 New",
                "img": "images/pc.png",
                "show": true,
                "price": "7 699",
                "condition": "Б/у"
            },
            {
                "name": "3",
                "type": "complete_package",
                "caption": "3AMD Quad Core Gaming Desktop PC Computer 4.0 G Custom Built System WIN 7 New",
                "img": "images/pc.png",
                "show": true,
                "price": "7 699",
                "condition": "Б/у"
            },
            {
                "name": "product",
                "type": "complete_package",
                "caption": "4AMD Quad Core Gaming Desktop PC Computer 4.0 G Custom Built System WIN 7 New",
                "img": "images/pc.png",
                "show": true,
                "price": "7 699",
                "condition": "Б/у"
            }
        ];

        addData['data'] = data;

        db.insert(addData, callback);
    }


});
app.use('/', function (req, res) {

    /* var sendData = {
     "tool": "nav",
     objData: {}
     };
     var callback = function (data) {
     console.log(typeof data);
     /// res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
     res.json(data)
     };*/

    // var findData = {'icon': '<i>'}

    // db.insert();
    // db.find(findData, callback);
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));


});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
