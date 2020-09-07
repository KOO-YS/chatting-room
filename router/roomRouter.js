const mysql = require('../config/database');

module.exports = function(app){
    
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
    
    app.post('/room',function(req, res){
        var roomName = req.body.roomName;

        var sql = "INSERT INTO ROOM(ROOM_NAME) VALUE(?);"
        mysql.query(sql, [roomName], function(error, result){
            if(error){
                console.log(error);
            } else {
                console.log('룸 생성');
                console.log(result);
                res.send({'room-name':roomName});
            }
        });
    });

    app.get('/room', function(req, res){
        var roomId = req.query.roomId;
        var roomName = req.query.roomName;
        var userid = req.session.userid;
        console.log(userid+"입장")
        res.render('room.ejs',{"roomId":roomId, "roomName":roomName, "userId":userid});
    }); 
}