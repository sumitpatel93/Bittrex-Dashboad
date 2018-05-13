var Web3 = require('web3');
var express = require('express');
const request = require('request');
var router = express.Router();



router.get('/', (req, res, next) => {
	request('', function (error, response, body) {		
			if (typeof web3 !== 'undefined'){ 
    web3 = new Web3(web3.currentProvider);
}
else{
web3 =  new Web3(new Web3.providers.HttpProvider("http://104.196.220.141:8545"));
var bal = web3.eth.getBalance("0x3b48EB5904C89aA1B0aE3D2B435A75Fb4cEdb738");
console.log(bal);
}

	});	
});

module.exports = router;
