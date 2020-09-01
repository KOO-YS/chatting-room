const mysql = require('../config/database');

// ▶GET 방식
// >> req.query.(name)
// ▶POST 방식
// >> req.body.(name)



module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index.ejs');
    });
    
    app.post('/user', function(req, res){
        var userid = req.body.userid;
        var password = req.body.password;
        var nickname = req.body.nickname;

        var sql = "INSERT INTO USER VALUE(?,?,?)";
        mysql.query(sql, [userid, password, nickname], function(error, result){
            if(error){
                console.log(error);
            } else {
                console.log("저장 완료 :: ");
                console.log(result);
                res.send({"data":result});
            }
        });
    });
    
    app.post('/login', function(req, res){
        var userid = req.body.userid;
        var password = req.body.password;

        console.log("userid :: "+userid);
        console.log("password :: "+password);
        
        var sql = "SELECT COUNT(*) FROM USER WHERE USERID = ? AND PASSWORD = ?";
        mysql.query(sql, [userid, password], function(error, result){
            if(error){
                console.log(error);
            } else {
                console.log("로그인 완료 :: ");
                console.log(result);
                res.send({"data":result});
            }
        });

    });

    app.get('/waiting-room', function(req, res){
        var sql = "SELECT * FROM ROOM;";
        mysql.query(sql, function(error, result){
            if(error){
                console.log(error);
            } else {
                console.log(result);
                res.render('waiting-room.ejs', {"room":result});
            }
        });
    });

}