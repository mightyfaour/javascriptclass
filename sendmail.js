const nodemailer = require('nodemailer');

const transporter = naodemailer.createTransport({
    service: 'gmail',
    auth: { user: "yourmail@gmail.com", pass: "yourpassword"}
});

transporter.sendMail({
    from: "yourmail@gmail.com",
    to: "test@wxample.com",
    subject: "Test Email",
    text: "This is a test email sent from Node.js"
}, 


