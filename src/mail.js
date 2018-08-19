var nodemailer = require('nodemailer');
var mail = (data) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yourEmail@gmail.com',
      pass: 'yesYourPasswordGoesHere'
    }
  });

  var mailOptions = {
    from: +data.name+' <website@hotmail.com>',
    to: 'WhoWeGonnaCall@mail.com',
    subject: 'Subject',
    text: data.body,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}
module.exports = mail;