const database = require('../database');

exports.addPost = (req, res, next) => {
    let url = null;
    console.log('addpostcheck', req.body);
    console.log('what is the req file1', req.files);
    if (req.file) {url = `${req.protocol} + '://' + ${req.get('host')} + '/images/' + ${req.file.filename}`};
    console.log('what is the req file2', req.file);
    console.log('checking img url', url);
    const addAPost = `INSERT INTO posts (employeeID, name, title, description, imageURL) VALUES ('${req.body.employeeID}', '${req.body.name}', '${req.body.title}', '${req.body.description}', '${url}')` ;
    database.query(addAPost, function (err, result) {
        if (err) throw err;
        res.status(201).json({message: 'Post created successfully!'});
    }
)};

// original
exports.getAllPosts = (req, res, next) => {
    const getPosts = `SELECT * FROM posts ORDER BY postID DESC`;
    database.query(getPosts, function (err, result) {
        if (err) {throw err}
        return res.status(200).json(result)
    })
};

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

// exports.addComment = (req, res, next) => {
//     const addComment = `INSERT INTO comments (employeeID, name, postID, comment) VALUES ('${req.body.employeeID}', '${req.body.name}', '${req.params.postID}', '${req.body.comment}')` ;
//     database.query(addComment, function (err, result) {
//         if (err) throw err;
//         res.status(201).json({message: 'Comment added successfully!'});
//     }
// )};

exports.addComment = (req, res, next) => {
    console.log('what does the comment say', req.body)
    const addComment = `INSERT INTO comments (employeeID, postID, comment) VALUES ('${req.body.employeeID}', '${req.params.postID}', '${req.body.comment}')` ;
    database.query(addComment, function (err, result) {
        if (err) throw err;
        res.status(201).json({message: 'Comment added successfully!'});
    }
)};

exports.getAllComments = (req, res, next) => {
    const getComments = `SELECT * FROM comments WHERE postID = '${req.params.postID}'`;
    database.query(getComments, function (err, result) {
        if (err) {throw err}
        return res.status(200).json(result)
    })
};