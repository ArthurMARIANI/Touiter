const mongoose = require('mongoose');

var tweetSchema = mongoose.Schema({
  content: String,
  author: String,
  tags: [String],
});

var Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;


