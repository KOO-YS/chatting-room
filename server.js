var express = require('express');
var app = express();
var bodyParser = require('body-parser');    // requestbody -> json 변환
var session = require('express-session');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function(){
    console.log('server on');
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var router = require('./router/router')(app);
var userRouter = require('./router/userRouter')(app);
// https://velopert.com/379
