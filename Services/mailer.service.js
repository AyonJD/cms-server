const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD
    }
});

function sendEmail(recipient, subject, message) {
    // setup email data with unicode symbols
    let mailOptions = {
        from: process.env.APP_EMAIL,
        to: recipient,
        subject: subject,
        text: message
    };

    // send mail with defined transport object
    return transporter.sendMail(mailOptions);
}

module.exports = { sendEmail };