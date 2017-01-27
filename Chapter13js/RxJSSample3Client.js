var Rx = require('rx-lite-dom');
function initialize() {
    var socket = Rx.DOM.fromWebSocket('ws://127.0.0.1:10059');
 }


var http = require('http'),
    fs = require('fs');


fs.readFile('./chessboard.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});

Rx.DOM.ready().subscribe(initialize);