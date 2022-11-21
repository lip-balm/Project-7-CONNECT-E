const express = require('express');
const app = express();
const bodyParser= require('body-parser');

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');


app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use((req, res) => {
    res.json({ message: 'Your request was successful!' }); 
});
 
app.use('/', userRoutes);
app.use('/forum', postRoutes);

module.exports = app;