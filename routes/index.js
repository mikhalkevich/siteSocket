var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/themas/add', function(req, res){
	var Themas = require('../models/themas').Themas;
	var themas = new Themas ({
		'name':'Сервисы',
		'body':'Текстовка сервисов',
		'url':'servises',
	});
	themas.save();
	console.log('ok');
	res.redirect('/');
})
router.get('/:id?', function(req, res, next) {
	var Themas = require('../models/themas').Themas;
	if(req.params.id){
		var index = req.params.id;
	}else{
		var index = 'Welcome to main page';
	}
	Themas.findOne({'url':index},
	                 function(err,ttext){
						 if (!ttext){
							 ttext = {
								 'name':'Извините',
								 'body':'Страница не найдена',
							 }
						 }
    res.render('index', { ttext : ttext });
					 })
});

module.exports = router;
