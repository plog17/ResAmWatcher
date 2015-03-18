var emailer = require('../Emailer/emailSender');
var ra = require('./Poster/reserveAmerica');

exports.watch = function(config) {

  var millisecondsWait = config.Watcher.waitTimeInSeconds * 1000;
  var pass = config.Emailer.pass;

  var body1 = "siteType=-1&csite=&eqplen=&maxpeople=&hookup=&range=1&arvdate=Fri+May+01+2015&enddate=&lengthOfStay=1&contractCode=FL&siteTypeFilter=ALL&parkId=281003&submitSiteForm=true&search=site&currentMaximumWindow=12";
  var body2 = "siteType=-1&csite=&eqplen=&maxpeople=&hookup=&range=1&arvdate=Sat+May+02+2015&enddate=&lengthOfStay=1&contractCode=FL&siteTypeFilter=ALL&parkId=281003&submitSiteForm=true&search=site&currentMaximumWindow=12";


  setInterval(function() {
    console.log("I am doing my check");

    ra.postAnastasia(body1, function(answer) {
      var index = answer.indexOf("0 site(s)");
      if (index !== 0) {
        emailer.sendMail(answer, "Disponibilités à Anastasia! 1er mai", config);
      } else {
        emailer.sendMail(answer, "Y'a rien à Anastasia le 1er mai", config);
      }
    });

    ra.postAnastasia(body2, function(answer) {
      var index = answer.indexOf("0 site(s)");
      if (index !== 0) {
        emailer.sendMail(answer, "Disponibilités à Anastasia! 2 mai", config);
      } else {
        emailer.sendMail(answer, "Y'a rien à Anastasia le 2 mai", config);
      }
    });
  }, millisecondsWait);
};