var fs = require("fs");

var Tweet = require("../models/tweets.js");
var User = require("../models/users.js");

var mongoose = require('mongoose');


exports.tweetsReadDiscover = function(req, res) {
  var uid = req.params.uid;
  User.findOne({username: uid},  function(err,profile) {
    Tweet.find(function (err, result) {
    res.end(JSON.stringify(result));
    });
  });
};

exports.tweetsReadFriends = function(req, res) {
  var uid = req.params.uid;
  User.findOne({username: uid},  function(err,profile) {
    Tweet.find({author:profile.friends},function (err, result) {
    res.end(JSON.stringify(result));
    });
  });
};

exports.tweetsReadProfile = function(req, res) {
  var uid = req.params.uid;
  User.findOne({username: uid},  function(err,profile) {
    Tweet.find({author:uid},function (err, result) {
    res.end(JSON.stringify(result));
  });
});
};


exports.tweetsCreate = function(req, res){
    Tweet.create({
       _id :  mongoose.Types.ObjectId(),
      author : req.body.author,
      content : req.body.content,
      tags : req.body.tags.replace("#","").split(",").reverse(),
    },
      function (err, user) {
        console.log(err)
        if (err) return res.status(500).json(err)
        res.status(200).json({});

  });
};


