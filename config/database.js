const mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'nodedb'
});

module.exports = connection;

// connection.connect();

// connection.query('SELECT * FROM USER', (error, rows, field)=>{
//     if (error) {
//         console.log(error);
//     }
//     console.log('user info : ',rows);
// });

// connection.end();
