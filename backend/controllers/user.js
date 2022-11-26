const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const database = require('../database');
const mysql = require("mysql2");
// const fs = require('fs');

exports.signup = (req, res, next) => {
    console.log(req);
    // req.body.user = JSON.parse(req.body.user);
    console.log(req.body)
    const employeeIDCheck = `SELECT * FROM users WHERE employeeID = '${req.body.email}'`;
    const userInsert = "INSERT INTO users (employee ID, name, password, bio) VALUES ('${req.body.employeeID}', '${hash}', '${req.body.name}', '${req.body.bio}')";
    // const userInsert = `INSERT INTO users (employeeID, password, name, bio) VALUES ('${req.body.employeeID}', '${hash}', '${req.body.name}', '${req.body.bio}')`;
        
        database.query(employeeIDCheck, function (err, result) {
            if (err) throw err;
            if (result.length === 1) {
                return res.status(400).json({ error: "An account already exists for this employee ID!" });
            } else {
                bcrypt.hash(req.body.password, 10, function(err, hash) {
                    if (err) {
                        return next(err);
                        }
                    const user = new User({
                        employeeID: req.body.employeeID,
                        password: hash,
                        name: req.body.name,
                        bio: req.body.bio,
                        //   img: url + '/images/' + req.file.filename,
                    });
                    console.log(user);
                    database.query(userInsert, function (err, result) {
                        if (err)
                        throw err;
                        res.status(201).json({
                        message: 'Account created successfully!'
                        });
                    }
                    ).catch(
                    (error) => {
                        res.status(500).json({
                        error: error
                        });
                    }
                    );
                }
                );
            }}
)}

// exports.signup = (req, res) => {
//     console.log(req.body);
//     const { employeeID, password, name, bio } = req.body;
//     req.body.user = JSON.parse(req.body.user);


//     const employeeIDCheck = `SELECT * FROM users WHERE employeeID = req.body.employeeID`;
//     database.query(employeeIDCheck, (err, result) => {
//         if (err) throw err;
//         if (result.length === 1) {
//             return res.status(400).json({ error: "An account already exists for this employee ID!" });
//             } else {

//     bcrypt.hash(req.body.password, 10)
//       .then((hash) => {
//         const userInsert = `INSERT INTO users (employeeID, password, name, bio) VALUES ('${req.body.employeeID}', '${hash}', '${req.body.name}', '${req.body.bio}')`;
//         db.query(userInsert, (err, result) => {
//           if (result) {
//             res.status(201).json({ message: 'Account created successfully!' });
//           } else if (err) {
//             throw err(err);
//           }
//         });
//       })
//       .catch((error) => res.status(500).json({ error }));
// }})
// };

// user
//             .save(user)
//             .then(data => {
//                 res.redirect('/signup')
                
//             })