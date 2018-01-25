var express =  require('express');
var router =  express.Router();
const request =  require('request');

router.get('/',(req,res,next) => {
	request('https://bittrex.com/api/v1.1/public/getorderbook?market=BTC-LTC&type=both',function(error,response,body){
		if (!error) {
			if (response.statusCode == 200){
				var data = JSON.parse(body);
				res.render('orderbook_layout',{ title:'Order Book Status', bittrexData: data.result});
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