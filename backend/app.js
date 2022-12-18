const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const cors = require('cors')
const path = require('path');

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

// app.use(express.json());

// app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
 
app.use('/api/auth', userRoutes);
app.use('/api/auth/forum', postRoutes);

// app.use((req, res, next) => {
//     res.json({message: "your request was successful"});
// });

app.get("/", (req, res) => {
    res.send("Hello");
});
  
module.exports = app;