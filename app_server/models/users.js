const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  password: String,
  friends: [String],
  admin: Boolean,
  profilepic: String,
  coverpic: String,
});

var User = mongoose.model('User', userSchema);
module.exports = User;