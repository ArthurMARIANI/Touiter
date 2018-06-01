var express = require('express');
var router = express.Router();

/* List of controllers */
var ctrlTweets = require('../controllers/tweets');

router.get('/friendsFeed/:uid',ctrlTweets.tweetsReadFriends);
router.get('/discoverFeed/:uid',ctrlTweets.tweetsReadDiscover);
router.get('/profileTweets/:uid',ctrlTweets.tweetsReadProfile);
router.post('/create',ctrlTweets.tweetsCreate);

module.exports = router;
