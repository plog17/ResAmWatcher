var mailer = require("nodemailer");

exports.sendMail = function(text, subject, config) {
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
    subject: subject,
    text: text,
    html: "<b>" + text + "< /b>"
  };

  smtpTransport.sendMail(mail, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent");
    }

    smtpTransport.close();
  });
};