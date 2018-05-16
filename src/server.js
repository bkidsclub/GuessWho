var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var http = require('http');
const port = 80
var ws = require('websocket');


app.get('/', function (req, res) 
{
    res.sendFile('./public/index.html');
});

http.createServer(app).listen(port, console.log(`Server running on port ${port}`));