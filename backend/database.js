// to see mysql datambase mac terminal /usr/local/mysql/bin/mysql -u root -p

const mysql = require("mysql2");

module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "coolio17!",
    database: "Groupomania",
})