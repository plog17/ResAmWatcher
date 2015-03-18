var emailer = require('../Emailer/emailSender');

exports.watch = function(config) {

  var millisecondsWait = config.Watcher.waitTimeInSeconds * 1000;
  var pass = config.Emailer.pass;

  setInterval(function() {
    console.log("I am doing my check");

    var pass = config.Emailer.password;
    emailer.sendMail(config);

  }, millisecondsWait);
};