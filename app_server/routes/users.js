var express = require('express');
var router = express.Router();


/* List of controllers */
var ctrlUsers = require('../controllers/users');
var ctrlAuth = require('../controllers/auth');


/* GET users listing. */
router.get('/friends/:uid',ctrlUsers.getFriends);
router.post('/getprofile',ctrlUsers.getProfile);

router.post('/login',ctrlAuth.login);
router.post('/register',ctrlAuth.register);

router.post('/addfriend',ctrlUsers.addFriend);
router.post('/deletefriend',ctrlUsers.deleteFriend);

module.exports = router;