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

    app.get('/canvas', function(req, res){
        res.render('canvas.ejs');
    });


    app.get('/transform', function(req, res){
        res.render('transform.ejs');
    });

    app.get('/transfer', function(req, res){
        res.render('transfer.ejs');
    });
}