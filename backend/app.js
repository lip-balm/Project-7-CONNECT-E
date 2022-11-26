const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const cors = require('cors')

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

app.use(express.json());

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
 
app.use('/api/auth', userRoutes);
app.use('/api/forum', postRoutes);

// app.use((req, res, next) => {
//     res.json({message: "your request was successful"});
// });

app.get("/", (req, res) => {
    res.send("Hello");
});
  
app.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
});

module.exports = app;