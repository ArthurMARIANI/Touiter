  var mongoose = require('mongoose');

var User = require("../models/users.js");

exports.getFriends = function(req, res){
      var uid = req.params.uid;
      User.findOne({username: uid},{friends: 1, _id:0},function (err, result) {
      res.end(JSON.stringify(result));
    });
};

exports.getProfile = (req, res) => {
  User.findOne({username: req.body.username}, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    res.status(200).send(user);
    });
};

exports.addFriend = function(req, res){
  User.update({username: req.body.username}, {$push: {friends: req.body.friendname}}, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    res.status(200).send(user);
    });
};

exports.deleteFriend = function(req, res){
  User.update({username: req.body.username}, {$pull: {friends: req.body.friendname}}, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    res.status(200).send(user);
    });
};