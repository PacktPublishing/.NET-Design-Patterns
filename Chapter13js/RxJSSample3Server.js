
var Rx = require('rx');
//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var Twitter = require('twitter-node-client').Twitter;
var config = {
    "consumerKey": "qaaMGcZnXp3mK5Hn84Y9vGFfp",
    "consumerSecret": "IxE4lEcEuKFQL9RbpDm5f7IJG0F4MkC6RViXBixEtobevTFisL",
    "accessToken": "244578907-Mzxm7vgWCcJTHb4Uag2R1xfQVx8QIt0I8gbJBXHW",
    "accessTokenSecret": "AOXobOEE05OrdvhAYVw531NfeZYobJlHEkRUK6rFkqq6u",
    "callBackUrl": "http://localhost:10059"
};

//
// Get 10 tweets containing the hashtag haiku
//
var twitter = new Twitter(config);
//twitter.getSearch({ 'q': '#haiku', 'count': 10 }, error, success);
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 10059 });
 
wss.on('connection', function connection(ws) {
  console.log('Connexted');
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});

Rx.Observable.fromEvent(wss, 'connection').subscribe(onConnect);

function onConnect(x) {
    console.log('Connexted:', x);
}
