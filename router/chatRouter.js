module.exports = function(io){
    let count = 0;
    let rooms = [];
    io.sockets.on('connection', (socket)=> {
        socket.on('join-room',(data) => {
            var roomId = data.roomId;
            var userId = data.userId;
            
            console.log(userId+'유저가'+ data.roomId +'번 방에 입장했습니다. ');
            socket.join(roomId);
            
            // [event] 새 유저 입장
            socket.emit('new', {"userId":data.userId});

            if(rooms[roomId] === undefined){
                console.log('create room : '+roomId);
                rooms[roomId] = {};
                rooms[roomId].socket_users = {};
            }
            rooms[roomId].socket_users[userId] = socket.id;     // 고유값으로 구분
            console.log('유저 고유값 : '+rooms[roomId].socket_users[userId]);
            
            // [event] 해당 roomId에 있는 유저들에게 새 유저 입장 알림
            socket.to(roomId).emit('room-broadcast', {'msg': userId+"님이 입장했습니다"});
            // io.sockets.in(roomId).emit('userList',{users: Object.keys(rooms[roomId].socket_users)});
            
            
        });

        socket.on('send-msg', (roomId, name, msg) => {
            var text = name + ' : '+msg;
            io.to(roomId).emit('receive-msg', text);
        });

        // TODO
        socket.on('disconnect', ()=> {
            console.log('user disconnected : ', socket.id);
            // rooms[roomId].socket_users[userId]
            // socket.to(socket.roomId).emit('room-broadcast', {'msg': socket.userId+"님이 나갔습니다. "});
            
        });
    
    });  
}