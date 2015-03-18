var SecureConf = require('secure-conf');
var sconf = new SecureConf();
var secureConfigFile = "./config/default.json.enc";
var watcher = require('./Watcher/reserveAmericaWatcher');

var express = require('express');
var app = express();
var config;
var millisecondsWait = 10 * 1000;


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

sconf.decryptFile(secureConfigFile, function(err, file, content) {
  if (err) {
    console.log('Unable to retrieve the configuration contents.');
  } else {
    console.log("Config loaded");
    config = JSON.parse(content);
    var port = config.Server.port;
    app.listen(port, function() {
      console.log("Node app is running at localhost:" + port);
      watcher.watch(config);
    });
  }
});