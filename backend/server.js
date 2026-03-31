const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// 1. Setup the Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS 
  }
});

// Verify the connection
transporter.verify((error) => {
  if (error) console.log("Transporter error:", error);
  else console.log("Server is ready to take our messages");
});

// --- ROUTES ---

// 2. The Contact Route
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, description } = req.body;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL, 
    subject: `New Inquiry from ${firstName} ${lastName}`,
    text: `From: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${description}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent!' });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

// 3. The Join Route (Professional HTML Version)
app.post('/api/join', async (req, res) => {
  const { firstName, lastName, email, program } = req.body;

  const adminMail = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `🚀 New Student Alert: ${program}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #005f73;">New Program Registration</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Program:</strong> ${program}</p>
      </div>
    `
  };

  const userMail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Welcome to Legacycodine, ${firstName}!`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #f0f0f0; padding: 40px; border-radius: 10px;">
        <h1 style="color: #005f73; text-align: center;">Welcome to the Community!</h1>
        <p>Hi ${firstName},</p>
        <p>Thank you for choosing the <strong>${program}</strong> program at Legacycodine. We are thrilled to have you onboard!</p>
        <div style="text-align: center; margin-top: 30px;">
          <a href="https://legacycodine.com" style="background-color: #000; color: #fff; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Our Website</a>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);
    res.status(200).json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false });
  }
});

// 4. Start Server (This must be at the very bottom)
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});