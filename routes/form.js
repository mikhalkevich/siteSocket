var express = require('express');
var router = express.Router();

router.post('/', function(req,res,next){
  var post = req.body;
    console.log(post.name, post.email);
	var Users = require('../models/users').Users;
	var users = new Users ({
		'name': post.name,
		'email': post.email,
	});
	users.save();
	res.redirect('/');
});

module.exports = router;
