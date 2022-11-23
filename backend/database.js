// to see mysql database mac terminal /usr/local/mysql/bin/mysql -u root -p

const mysql = require("mysql2");

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "coolio17!",
    database: "Groupomania",
});

database.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the MySQL server.');
});

module.exports = database;
