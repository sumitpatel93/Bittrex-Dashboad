var express =  require('express');
var router =  express.Router();
const request =  require('request');

router.get('/',(req,res,next) => {
	request(function(error,response,body){
		if (!error) {
			if (response.statusCode == 200){
				var data = JSON.parse(body);
				res.render('portfolio',{ title:'portfolio'});
			}
			 else{
			 	next( new Error(response.statusCode));
			 }
		}else {
			next(error);
		}
	});
});

module.exports = router;