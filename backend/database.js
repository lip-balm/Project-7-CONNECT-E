// to see mysql database /usr/local/mysql/bin/mysql -u root -p

const mysql = require('mysql2');

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "coolio17!",
    database: "Groupomania",
});

database.connect(function(err){
    if(!!err){
        console.log(err)
    }
    else{
        console.log('Connected')
    }
})

module.exports = database;
