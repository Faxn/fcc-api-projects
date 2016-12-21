var express = require('express')
var app = express()
var timestampApp = require("./timestamp.js")

app.get('/', function (req, res) {
  res.send('Hello app!')
})

app.use('/timestamp/', timestampApp);


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
