var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

let User = require('../models/users');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
var config = require('../../config/api.config');

exports.register = (req, res) => {

  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  console.log(req.body);
  User.create({
     _id :  mongoose.Types.ObjectId(),
    username : req.body.username,
    friends : [],
    password : hashedPassword,
    profilepic : req.body.profilepic,
    coverpic : req.body.coverpic,
  },
    function (err, user) {
      if (err) return res.status(500).send(err)
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 7200
      });
      res.status(200).send({ auth: true, token: token });
  });
};

exports.login = (req, res) => {
  User.findOne({username: req.body.username}, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 7200
    });
    res.status(200).send({ auth: true, token: token });
  });
}