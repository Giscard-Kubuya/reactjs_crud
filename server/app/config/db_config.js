const mysql = require('mysql');

const query = mysql.createConnection({
    user:'root',
    password:'',
    database:'exercice',
    host:'localhost',
});

module.exports = query;