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

// const mysql = require('mysql');

// class database {
//     constructor( config ) {
//         this.connection = mysql.createConnection( config );
//     }
//     query( sql, args ) {
//         return new Promise( ( resolve, reject ) => {
//             this.connection.query( sql, args, ( err, rows ) => {
//                 if ( err )
//                     return reject( err );
//                 resolve( rows );
//             } );
//         } );
//     }
//     close() {
//         return new Promise( ( resolve, reject ) => {
//             this.connection.end( err => {
//                 if ( err )
//                     return reject( err );
//                 resolve();
//             } );
//         } );
//     }
// };

module.exports = database;
