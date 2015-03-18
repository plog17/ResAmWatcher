var emailer = require('../Emailer/emailSender');
var ra = require('./Poster/reserveAmerica');

exports.watch = function(config) {

  var millisecondsWait = config.Watcher.waitTimeInSeconds * 1000;
  var pass = config.Emailer.pass;
  var body1Anastasia = "siteType=-1&csite=&eqplen=&maxpeople=&hookup=&range=1&arvdate=Fri+May+01+2015&enddate=&lengthOfStay=1&contractCode=FL&siteTypeFilter=ALL&parkId=281003&submitSiteForm=true&search=site&currentMaximumWindow=12";
  var body2Anastasia = "siteType=-1&csite=&eqplen=&maxpeople=&hookup=&range=1&arvdate=Sat+May+02+2015&enddate=&lengthOfStay=1&contractCode=FL&siteTypeFilter=ALL&parkId=281003&submitSiteForm=true&search=site&currentMaximumWindow=12";
  var body1FortClinch = "contractCode=FL&parkId=281027&siteTypeFilter=ALL&availStatus=&submitSiteForm=true&search=site&campingDate=Fri+May+01+2015&lengthOfStay=1&campingDateFlex=&currentMaximumWindow=12&contractDefaultMaxWindow=MS%3A24%2CLT%3A18%2CGA%3A24%2CSC%3A13&stateDefaultMaxWindow=MS%3A24%2CGA%3A24%2CSC%3A13&defaultMaximumWindow=12&loop=&siteCode=&lookingFor=&camping_2001_3013=&camping_2001_218=&camping_2002_3013=&camping_2002_218=&camping_2003_3012=&camping_3100_3012=&camping_10001_3012=&camping_10001_218=&camping_3101_3012=&camping_3101_218=&camping_9002_3012=&camping_9002_3013=&camping_9002_218=&camping_9001_3012=&camping_9001_218=&camping_3001_3013=&camping_2004_3013=&camping_2004_3012=&camping_3102_3012=";
  var body2FortClinch = "contractCode=FL&parkId=281027&siteTypeFilter=ALL&availStatus=&submitSiteForm=true&search=site&campingDate=Sat+May+02+2015&lengthOfStay=1&campingDateFlex=&currentMaximumWindow=12&contractDefaultMaxWindow=MS%3A24%2CLT%3A18%2CGA%3A24%2CSC%3A13&stateDefaultMaxWindow=MS%3A24%2CGA%3A24%2CSC%3A13&defaultMaximumWindow=12&loop=&siteCode=&lookingFor=&camping_2001_3013=&camping_2001_218=&camping_2002_3013=&camping_2002_218=&camping_2003_3012=&camping_3100_3012=&camping_10001_3012=&camping_10001_218=&camping_3101_3012=&camping_3101_218=&camping_9002_3012=&camping_9002_3013=&camping_9002_218=&camping_9001_3012=&camping_9001_218=&camping_3001_3013=&camping_2004_3013=&camping_2004_3012=&camping_3102_3012=";

  setInterval(function() {
    console.log("I am doing my check");

    ra.postAnastasia(body1Anastasia, function(answer) {
      var index = answer.indexOf("0 site(s)");
      if (index !== 0) {
        emailer.sendMail(answer, "Disponibilités à Anastasia! 1er mai", config);
      }
    });

    ra.postAnastasia(body2Anastasia, function(answer) {
      var index = answer.indexOf("0 site(s)");
      if (index !== 0) {
        emailer.sendMail(answer, "Disponibilités à Anastasia! 2 mai", config);
      }
    });

    ra.postAnastasia(body1FortClinch, function(answer) {
      var index = answer.indexOf("0 site(s)");
      if (index !== 0) {
        emailer.sendMail(answer, "Disponibilités à FortClinch! 1er mai", config);
      }
    });

    ra.postFortClinch(body2FortClinch, function(answer) {
      var index = answer.indexOf("0 site(s)");
      if (index !== 0) {
        emailer.sendMail(answer, "Disponibilités à FortClinch! 2 mai", config);
      }
    });



  }, millisecondsWait);
};