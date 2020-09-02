var express = require('express');
var app = express();
var bodyParser = require('body-parser');    // requestbody -> json 변환
var session = require('express-session');

var http = require('http').Server(app);
var io = require('socket.io')(http);

// var http = require('http');
// var server = http.createServer(app);
// var io = require('socket.io').listen(server);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// app.listen(3000, function(){
//     console.log('server on');
// });
http.listen(3000, function(){
    console.log('server on');
});

app.use(express.static('public'));

// POST METHOD : request body 받기
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// 세션 사용
app.use(session({
    secret: 'secret key',       // 암호화 키  
    resave : false,             // 요청이 또 오면 세션을 저장소에 다시 저장 
    saveUninitialized : true    // 초기화되지 않은 세션 저장 (방문자에게 고유 식별값)
}));

var router = require('./router/router')(app);
var userRouter = require('./router/userRouter')(app);
var roomRouter = require('./router/roomRouter')(app);
var chattingRouter = require('./router/chatRouter')(io);