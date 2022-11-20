const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use((req, res) => {
    res.json({ message: 'Your request was successful!' }); 
});
  
// app.post('/api/stuff', (req, res, next) => {
//     console.log(req.body);
//     res.status(201).json({
//       message: 'Thing created successfully!'
//     });
// });

// app.get('/home', (req, res, next) => {
//     const stuff = [
//       {
//         _id: 'oeihfzeoi',
//         name: 'My first thing',
//         description: 'All of the info about my first thing',
//         imageUrl: '',
//         userId: 'qsomihvqios',
//       },
//       {
//         _id: 'oeihfzeomoihi',
//         title: 'My second thing',
//         description: 'All of the info about my second thing',
//         imageUrl: '',
//         userId: 'qsomihvqios',
//       },
//     ];
//     res.status(200).json(stuff);
//   });

module.exports = app;