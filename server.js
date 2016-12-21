var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

MONTHS = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',  'November', 'December']


app.get('/:date', function(req, res) {
	
	var d;
	
	
	if(/^\d+$/.test(req.params.date )){
		date = parseInt(req.params.date);
		d = new Date(date);
	} else {
		d = new Date(req.params.date);
	}
	
	var reply = {};
	console.log(req.params.date)
	console.log(d);
	
	if(isNaN( d.getTime()) ){
		reply.unix = null
		reply.natural = null		
	} else {
		reply.unix = d.getTime();
		reply.natural = MONTHS[d.getMonth()] + " " + d.getDay() + ", " + d.getFullYear();		
	}	
	
	res.json(reply);
	
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
