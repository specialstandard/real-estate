var express = require('express')
var app = express()

app.use('/', express.static(__dirname))
app.listen(3003, function() { console.log('listening on port 3003')})
