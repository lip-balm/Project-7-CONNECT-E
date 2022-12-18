const database = require('../database');

exports.addPost = (req, res, next) => {
    let url = null;
    console.log('addpostcheck', req.body);
    if (req.file) {url = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`};
    console.log('what is the req file', req.file);
    console.log('checking img url', url);
    const addAPost = `INSERT INTO posts (employeeID, name, title, description, imageURL) VALUES ('${req.body.employeeID}', '${req.body.name}', '${req.body.title}', '${req.body.description}', '${url}')` ;
    database.query(addAPost, function (err, result) {
        if (err) throw err;
        res.status(201).json({message: 'Post created successfully!'});
    }
)};

exports.getAllPosts = (req, res, next) => {
    const getPosts = `SELECT * FROM posts`;
    database.query(getPosts, function (err, result) {
        if (err) {throw err}
        return res.status(200).json(result)
    })
};

// exports.getOnePost = (req, res, next) => {
//     const getAPost = `SELECT * FROM posts WHERE postID = '${req.params.postID}'`;
//     database.query(getAPost, function (err, result) {
//         if (err) {
//             throw err
//         }
//         return res.status(200).json(result)
//     })
// };

exports.getUsersPosts = (req, res, next) => {
    console.log('get users req', req.body)
    const getSomeonesPosts = `SELECT * FROM posts WHERE employeeID = '${req.params.employeeID}'`;
    console.log('controllers get user post by id', req.params.employeeID)
    database.query(getSomeonesPosts, function (err, result) {
        if (err) {throw err}
        return res.status(200).json(result)
    })
};

exports.deletePost = (req, res, next) => {
    console.log('post delete check', req.body);
    const postDelete = `DELETE FROM posts WHERE postID = '${req.body.postID}'`;
    database.query(postDelete, function (err, result) {
        if (err) {throw err}
        let allPosts; 
        const getPosts = `SELECT * FROM posts`;
        database.query(getPosts, function (err, result) {
            if (err) {throw err}
            return allPosts = result
        })
        return res.status(200).json(allPosts)
    })
};