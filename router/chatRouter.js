module.exports = function(io){
    let count = 0;
    let room = [];
    io.sockets.on('connection', (socket)=> {
        socket.on('joinroom',(data) => {
            socket.join(data.room);
            socket.room = data.room;

            var room = data.room;
            socket.emit('new', {test:"test"});
        });
    });  
}