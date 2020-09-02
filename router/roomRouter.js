const mysql = require('../config/database');

module.exports = function(app){
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
        console.log(roomId+"번 방 입장");
        res.render('room.ejs',{"roomId":roomId, "roomName":roomName});
    }); 
}