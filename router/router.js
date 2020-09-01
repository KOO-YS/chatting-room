const mysql = require('../config/database');

// ▶GET 방식
// >> req.query.(name)
// ▶POST 방식
// >> req.body.(name)



module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index.ejs');
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