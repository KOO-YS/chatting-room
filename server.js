// const express = require('express');
// var router = express.Router();

// module.exports = router;

// var router = express.Router();
// var mysql_dbc = require('./config/database');
// // var connection = mysql_dbc.init();
// var connection = mysql_dbc.connect();

// // mysql_dbc.test_open(connection);

// router.get('/', function(req, res){
//     res.sendFile(__dirname+'/test.html');
//     console.log('test');
//     var sql = 'SELECT * FROM user';
//     connection.query(sql, function (error, rows, fields) {
//         if (!error) {
//         for (var i = 0; i < rows.length; i++) {
//             console.log(rows[i]);
//         }
//         } else {
//         console.log('query error : ' + error);
//         }
//     });
// })
// // https://kamang-it.tistory.com/entry/NodeJSNodeJS%EC%99%80-MysqlMariaDB%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0-expressJS-%EC%83%81%EC%97%90%EC%84%9C-%EA%B0%84%EB%8B%A8%ED%95%9C-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EB%A1%9C%EA%B7%B8%EC%9D%B8%ED%9A%8C%EC%9B%90%ED%83%88%ED%87%B4-%EA%B5%AC%ED%98%84
// // module.exports = router;


var express = require('express');
var app = express();
var router = require('./router')(app);



var server = app.listen(3000, function(){
    console.log('server on');
});
