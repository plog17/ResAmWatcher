var mailer = require("nodemailer");



exports.sendMail = function(config) {
  // Use Smtp Protocol to send Email
  var smtpTransport = mailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
      user: config.Emailer.email,
      pass: config.Emailer.password
    }
  });

  var mail = {
    from: "PLOG mailer <auger.pierluc@gmail.com>",
    to: "auger.pierluc@gmail.com",
    subject: "Send Email Using Node.js",
    text: "Node.js New world for me",
    html: "<b>Node.js New world for me</b>"
  };

  smtpTransport.sendMail(mail, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent: " + response.message);
    }

    smtpTransport.close();
  });
};