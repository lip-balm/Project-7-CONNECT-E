const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const database = require('../database');

exports.signUp = (req, res, next) => {
    console.log(req.body);
    const employeeIDCheck = `SELECT * FROM users WHERE employeeID = '${req.body.employeeID}'`;
        database.query(employeeIDCheck, function (err, result) {
            if (err) throw err;
            if (result.length === 1) {
                return res.status(400).json({ error: "An account already exists for this employee ID!" });
            } if (req.body.employeeID > 100000) {
                bcrypt.hash(req.body.password, 10, function(err, hash) {
                    if (err) {
                        return next(err);
                        }
                      const userInsert = `INSERT INTO users (employeeID, password, name, bio) VALUES ('${req.body.employeeID}', '${hash}', '${req.body.name}', '${req.body.bio}')`;
                      database.query(userInsert, function (err, result) {
                        if (err)
                        throw err;
                        res.status(201).json({
                        message: 'Account created successfully!'
                        });
                    }
                    )
                }
                );
            }}
)};

exports.signIn = (req, res, next) => {
    console.log('signin', req.body);
    const employeeIDCheck = `SELECT * FROM users WHERE employeeID = '${req.body.employeeID}'`; 
        database.query(employeeIDCheck, function (err, result) {
            if (req.body.employeeID == null || req.body.password == null) {
                return res.status(400).json({error:'Please complete both fields'});
            };
            if (err) throw err;
            if (result.length < 1) {
                return res.status(400).json({ error: "An account does not exist for this employee ID, please sign up for an account above." });
            } else {
            // console.log(req, req.body.password);
            // console.log(result, result[0].password);
            bcrypt.compare(req.body.password, result[0].password).then(
                (valid) => {
                    console.log(valid);
                if (!valid) {
                    return res.status(401).json({error: "Please check your password!"});
                }
                const token = jwt.sign(
                    { employeeID: req.body.employeeID },
                    'RANDOM_TOKEN',
                    { expiresIn: '24h' });
                    console.log(token);
                return res.status(200).json({
                    employeeID: req.body.employeeID,
                    token: token
                });
                }
            )
        }
})};

exports.getProfile = (req, res, next) => {
    const employeeIDCheck = `SELECT name, employeeID, bio FROM users WHERE employeeID = '${req.params.employeeID}'`;
        database.query(employeeIDCheck, function (err, result) {
            if (err) {
                throw err
              } else if (result.length !== 0){
                return res.status(200).json(result[0]);
              } else {
              console.log(res);
                return res.status(401).json({error: 'No result found'});
            }
    })
};

exports.deleteProfile = (req, res, next) => {
    // delete user & their posts
    // const profileDelete = `DELETE FROM users WHERE users.employeeID = '${req.params.employeeID}'`;
    const profileDelete = `DELETE users, posts FROM users INNER JOIN posts ON posts.employeeID = users.employeeID WHERE users.employeeID = '${req.params.employeeID}'`;
    database.query(profileDelete, function (err, result) {
        if (err) {throw err}
        return res.status(200).json(result)
    })
}

// 100150 testing51 angela i love dogs, baking, travel, and hiking
// Does anyone have a favorite site or other way to keep up with industry news? Thank you!
// Happy New Year :)