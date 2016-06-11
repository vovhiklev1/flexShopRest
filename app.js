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
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/get/:name?', function (req, res) {
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

app.use('/add', function (req, res) {
    var callback = function (data) {
        res.json(data);
    };

    var addData = {
        "name": "nav",
        "caption": "10075",
        "show": "1480",
        'icon': '<i>'
    };

    db.insert(addData, callback);

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
