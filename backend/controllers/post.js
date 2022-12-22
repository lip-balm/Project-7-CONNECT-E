const database = require('../database');

exports.addPost = (req, res, next) => {
    req.body.data = JSON.parse(req.body.data); //parse out the data
    let url = null;
    if (req.file) {
        url = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`// check for proper formatting
    }
    const addAPost = `INSERT INTO posts (employeeID, name, title, description, imageURL) VALUES ('${req.body.data.employeeID}', '${req.body.data.name}', '${req.body.data.title}', '${req.body.data.description}', '${url}')` ;
    database.query(addAPost, function (err, result) {
        if (err) throw err;
        res.status(201).json({message: 'Post created successfully!'});
    }
)};

exports.getAllPosts = (req, res, next) => {
    const getPosts = `SELECT * FROM posts ORDER BY postID DESC`;
    database.query(getPosts, function (err, result) {
        if (err) {throw err}
        return res.status(200).json(result)
    })

    // get all the comments too?
    // const getComments = `SELECT * FROM comments WHERE postID = '${req.params.postID}'`;
    // database.query(getComments, function (err, result) {
    //     if (err) {throw err}
    //     return res.status(200).json(result)
    // })

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
        // let allPosts; 
        // const getPosts = `SELECT * FROM posts`;
        // database.query(getPosts, function (err, result) {
        //     if (err) {throw err}
        //     return allPosts = result
        // })
        return res.status(200).json(result)
    })

    const commentDelete = `DELETE FROM comments WHERE postID = '${req.body.postID}'`;
    database.query(commentDelete, function (err, result) {
        if (err) {throw err}
        return res.status(200).json(result)
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
    console.log('checking for comments1', req);
    const getComments = `SELECT * FROM comments`;
    database.query(getComments, function (err, result) {
        if (err) {throw err}
        return res.status(200).json(result)
    })
};

exports.deleteComment = (req, res, next) => {
    console.log('comment delete check', req.body);
    const commentDelete = `DELETE FROM comments WHERE commentID = '${req.body.commentID}'`;
    database.query(commentDelete, function (err, result) {
        if (err) {throw err}
        return res.status(200).json(result)
    })
};

exports.readPost = (req, res, next) => {
    console.log('checking read status', req.body)
    const readPost = `UPDATE posts SET readBy = '${req.body.employeeID}' WHERE postID = ${req.params.postID}` ;
    database.query(readPost, function (err, result) {
        if (err) throw err;
        res.status(201).json({message: 'Marked as read'});
    }
)};