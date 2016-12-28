var express = require('express')
var app = express()
var timestampApp = require("./timestamp.js")

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.send('Hello app!')
})

app.use('/timestamp/', timestampApp);


var port;
port = process.env.PORT || 8080
app.listen(port, function () {
  console.log('Example app listening on port: '+port)
})
