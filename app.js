var express = require('express')

var app = express()

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
app.get('/getJson', function (req, res) {
    res.sendFile(__dirname + '/testFile.json')
})


app.listen(3333)