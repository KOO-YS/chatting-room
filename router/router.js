const mysql = require('../config/database');
const e = require('express');

// ▶GET 방식
// >> req.query.(name)
// ▶POST 방식
// >> req.body.(name)



module.exports = function(app){
    app.get('/', function(req, res, status){
        if(!status){
            res.render('index.ejs', {"status":status});
        } else{
            res.render('index.ejs',{"status":200});    
        }
    });

    app.get('/new-room', function(req,res){
        res.render('new-room.ejs');
    });

    app.get('/waiting-room', function(req, res){
        console.log(req.session.userid);
        var userid = req.session.userid;
        if( !userid ){
            console.log('로그인 후 다시');
            res.redirect('/');
            // res.render('/');
        } else {
            var sql = "SELECT * FROM ROOM;";
            mysql.query(sql, function(error, result){
                if(error){
                    console.log(error);
                } else {
                    console.log(result);
                    req.session.save(() => {
                        res.render('waiting-room.ejs', {"room":result,"userid":userid});
                    });
                }
            });
        }
    });

}