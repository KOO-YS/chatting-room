module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index.html');
    });

    app.get('/waiting-room', function(req, res){
        res.render('waiting-room.html');
    });

}