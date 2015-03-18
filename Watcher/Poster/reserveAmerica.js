var request = require('request');
var cheerio = require('cheerio');

exports.postAnastasia = function(body, callback) {
  var options = {
    uri: "http://floridastateparks.reserveamerica.com/campsiteSearch.do",
    body: body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  request.post(options, function(error, response, body) {

    if (!error && response.statusCode == 200) {
      console.log("POST OK");
      var $ = cheerio.load(body);
      var text = $('.matchSummary').text().toString();
      callback(text);
    } else {
      console.log("ERROR while posting data");
      console.log(options);
      console.log(response);
      callback("ERROR while posting data");
    }
  });
};