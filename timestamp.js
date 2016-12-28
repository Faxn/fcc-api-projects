var express = require('express')
var app = express()


MONTHS = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',  'November', 'December']

app.get('/', function (req, res) {
  res.render('timestamp', { req:req })
})

app.get('/:date', function(req, res) {
	
	//date object to make from params.date
	var d;	
	
	//If it is a unix timestamp
	if(/^\d+$/.test(req.params.date )){
		date = parseInt(req.params.date);
		d = new Date(date);
	//If it's something else
	} else {
		d = new Date(req.params.date);
	}
	
	var reply = {};
	
	//If the date is invalid
	if(isNaN( d.getTime()) ){
		reply.unix = null
		reply.natural = null		
	//The date is valid build a good response object.
	} else {
		reply.unix = d.getTime();
		reply.natural = MONTHS[d.getMonth()] + " " + d.getDay() + ", " + d.getFullYear();		
	}	
	
	res.json(reply);
	
});

//export the timestamp app.
module.exports = app;
