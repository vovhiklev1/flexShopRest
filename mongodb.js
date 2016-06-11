var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://vovhiklev1:toshiba1@ds035240.mlab.com:35240/srt';

MongoClient.connect(url, function (err, db) {
    if (err != 'null') {
        assert.equal(null, err);
        console.log("__Connected correctly to server.");
        db.close();
    }

});

var insertDoc = function (db, addData, resCallback, callback) {

    if (addData)  db.collection('nav').insertOne(addData, function (err, result) {
        if (err != 'null') {
            assert.equal(err, null);
            console.log("__Inserted a document into the restaurants collection.");
            resCallback(result);
        }
        callback();

    });

};

var findDoc = function (db, findData, resCallback, callback) {
    var cursor = db.collection('nav').find(findData).toArray(function (err, data) {
        resCallback(data);
        callback();
    });

    /* cursor.each(function (err, doc) {
     assert.equal(err, null);
     if (doc != null) {
     console.dir(doc);
     } else {
     callback();
     }
     });*/
};

var updateDoc = function (db, findData, editData, resCallback, callback) {
    db.collection('nav').updateOne(
        findData,
        {
            $set: editData,
            $currentDate: {"lastModified": true}
        }, function (err, results) {
            //console.log(results);
            resCallback(results);
            callback();
        });
};

var removeDoc = function(db,removeData, resCallback, callback) {
    db.collection('nav').deleteMany(
        removeData,
        function(err, results) {
            //console.log(results);
            resCallback(results);
            callback();
        }
    );
};

module.exports = {
    insert: function (addData, callback) {
        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            insertDoc(db, addData, callback, function () {
                db.close();
            });
        });
    },
    find: function (findData, callback) {
        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            findDoc(db, findData, callback, function () {
                db.close();
            });
        });
    },
    edit: function (findData, editData, callback) {
        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            updateDoc(db, findData, editData, callback, function () {
                db.close();
            });
        });
    },
    remove: function (removeData, callback) {
        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            removeDoc(db, removeData, callback, function() {
                db.close();
            });
        });
    }
}
