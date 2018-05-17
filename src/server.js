process.title = "Guess Who";

const port = 8000;
var webSocketServer = require('websocket').server;
var http = require('http');
var server = http.createServer(function (req, res)
{   
});
server.listen(port, () => 
{console.log((new Date()) + " server is listening on port " + port);});

var wsServer = new webSocketServer({httpServer: server});

wsServer.on('request', (req) => 
{
    console.log((new Date()) + ' Connection from origin ' + req.origin + '.');
    var connection = req.accept(null, req.origin);
});
