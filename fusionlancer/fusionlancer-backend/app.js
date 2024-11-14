const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route to handle form submission
app.post('/send-email', async (req, res) => {
    const { name, phone, email, subject, message } = req.body;

    // Email setup
    let transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
        auth: {
            user: 'mamtashah12072@gmail.com', // Replace with your email
            pass: 'nxye vyfc qbqr rnya'   // Replace with your email password
        }
    });

    let mailOptions = {
        from: email,
        to: 'ravijasodashah@gmail.com', // Replace with the recipient email
        subject: subject,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        res.status(500).send('Error sending email');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});