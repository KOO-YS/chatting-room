const mysql = require('../config/database');

module.exports = function(app){
    app.post('/user', function(req, res){
        var userid = req.body.userid;
        var password = req.body.password;
        var nickname = req.body.nickname;

        // console.log("userid :: "+userid);
        // console.log("password :: "+password);
        // console.log("nickname :: "+nickname);

        var sql = "INSERT INTO USER VALUE(?,?,?)";
        mysql.query(sql, [userid, password, nickname], function(error, result){
            if(error){
                console.log(error);
            } else {
                console.log("저장 완료 :: ");
                console.log(result);
                req.session.userid = userid;  //  세션 객체 접근
                req.session.save(() => {
                    res.send({"data":result});
                });
            }
        });
    });
    
    app.post('/login', function(req, res){
        var userid = req.body.userid;
        var password = req.body.password;

        // console.log("userid :: "+userid);
        // console.log("password :: "+password);
        
        var sql = "SELECT COUNT(*) FROM USER WHERE USERID = ? AND PASSWORD = ?";
        mysql.query(sql, [userid, password], function(error, result){
            if(error){
                console.log(error);
            } else {
                console.log("로그인 완료 :: ");
                console.log(result);
                req.session.userid = userid;  //  세션 객체 접근
                req.session.save(() => {
                    res.send({"data":result});
                });
            }
        });

    });
}