Jullbars('i love', 'my wife', 'verymuch', 30)

var app, express, http, path, server;

express = require('express');

http = require('http');

path = require('path');

app = express();

app.set('port', process.env.PORT || 3000);

app.use(express["static"](path.join(__dirname, 'src')));

console.log(__dirname);

server = http.createServer(app).listen(app.get('port'), function() {
  return console.log('Express server listening on port: ' + app.get('port'));
});

function Jullbars(a1,a2) {
    console.log(a2, a1, arguments)
}
