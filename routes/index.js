var express = require('express');
const request = require('request');
var router = express.Router();



router.get('/', (req, res, next) => {
	request('https://bittrex.com/api/v1.1/public/getmarketsummary?market=BTC-LTC', function (error, response, body) {
		if(!error) {
			if(response.statusCode === 200) {
				var data = JSON.parse(body);
				res.render('', { title: 'Bittrex', bittrexData: data.result[0]});	
			} else {
				next(new Error(response.statusCode));
			}
		}  else {
			next(error);		
		}
	});	
});

module.exports = router;
