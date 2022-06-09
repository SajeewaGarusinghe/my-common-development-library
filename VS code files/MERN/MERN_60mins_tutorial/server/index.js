const express = require('express');
const { addListener } = require('nodemon');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

mongoose.connect(
  'mongodb+srv://sajeeva616:sajeevamern@cluster0.yqvhj.mongodb.net/?retryWrites=true&w=majority'
);

app.get('/getUsers', (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, () => {
  console.log('server runs perfectly !');
});
