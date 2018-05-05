const express = require('express');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const assert = require('assert');
const bodyParser = require('body-parser');

let vueBlog = express();

//实现一个静态服务器
vueBlog.use('/', express.static('build'));

// urlencoded: 设置编码方式
// 返回的是一个对象，当extended为false的时候，键值对中的值就为'String'或'Array'类型，为true的时候，则可为任何数据类型
vueBlog.use(bodyParser.urlencoded({
    extended: true
}));

//设置跨域访问 还可以直接使用 cors 模块
vueBlog.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET");
    res.header("X-Powered-By", "3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

vueBlog.get('/articles', function (req, res) {
    MongoClient.connect('mongodb://localhost:27017/vueblog', function (err, client) {
        console.log('Connected successfully to server');
        let db = client.db('vueblog');
        findDocument(db, res, function () {});
        client.close();
    })
})

//归档页面
vueBlog.get('/archives', function (req, res) {
    MongoClient.connect('mongodb://localhost:27017', function (err, client) {
        let db = client.db('vueblog');
        let collection = db.collection('articles');
        collection.find({}).toArray(function (err, docs) {
            //将日期字符串转变为数字
            docs.forEach(function (element) {
                element.time = element.time ?
                    element.time.split("-") : ["2199", "6", "9"];
                element.time.push(
                    Number.parseInt(element.time[0]) * 366 +
                    Number.parseInt(element.time[1]) * 31 +
                    Number.parseInt(element.time[2]) * 1
                )
            })
            //进行由小到大的排序
            docs.sort(function (a, b) {
                return a.time[3] - b.time[3];
            })
            //返回数据
            docs.forEach(function (element) {
                element.time.pop();
            })
            res.json(docs);
        })
        client.close();
    })
})

//登录处理
vueBlog.post("/login", function (req, res) {
    console.log(req.body.admin);
    let body = req.body;
    MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        let db = client.db('vueblog');
        let collection = db.collection('manager');
        collection.find({
            "admin": req.body.admin,
            "password": req.body.password,
        }).toArray(function (err, docs) {
            docs.length === 1 ?
                res.json({
                    "login": true
                }) :
                res.json({
                    "login": false
                });
        })
        client.close();
    })
})

/* 删除文章 */
vueBlog.post("/delete", function (req, res) {
    let body = req.body;
    MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        let db = client.db('vueblog');
        let collection = db.collection('articles');
        collection.deleteOne({
            "title": body.title
        }, function (err, obj) {
            if (err) throw err;
            console.log("删除成功");
            res.json({
                "exist": false
            })
        })
        client.close();
    })
})

/* 添加文章 */
vueBlog.post("/add", function (req, res) {
    let body = req.body;
    MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        let db = client.db('vueblog');
        let collection = db.collection('articles');
        collection.insert({
            "title": body.title
        }, function (err, obj) {
            if (err) throw err;
            console.log("添加成功");
            res.json({
                "insert": true
            })
        })
        client.close();
    })
})

//文章列表
var findDocument = function (db, res, callback) {
    var collection = db.collection('articles');
    collection.find({}).toArray(function (err, docs) {
        res.json(docs);
        callback();
    })
}

vueBlog.listen(6565, function () {
    console.log('server start at 6565');
});