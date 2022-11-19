const express = require('express');

const app = express();

app.use('/profile', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        name: 'My first thing',
        description: 'All of the info about my first thing',
        imageUrl: '',
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'My second thing',
        description: 'All of the info about my second thing',
        imageUrl: '',
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });

module.exports = app;