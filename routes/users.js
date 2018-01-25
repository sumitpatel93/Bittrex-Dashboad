var express = require('express');
const request = require('request');
var router = express.Router();


	


router.get('/', (req, res, next) => {
	request('https://bittrex.com/api/v1.1/public/getmarketsummaries', function (error, response, body) {
		if(!error) {
			if(response.statusCode === 200) {
				var data = JSON.parse(body);
				res.render('layout', { title: 'Market Summary', bittrexData: data.result[0]});	
			} else {
				next(new Error(response.statusCode));
			}
		}  else {
			next(error);		
		}
	});	
});
module.exports = router;
