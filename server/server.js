const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "mail.qhashai.com",
  port: 587,
  secure: false,
  auth: {
    user: "noreply@quantumedu.in",
    pass: "MvK2%qcWT-TWuantumHash123",
  },
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc;">
      <h2>${subject}</h2>
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"QuantumHash" <admin@quantumhash.me>`,
      to: email,
      subject,
      html: htmlBody,
    });
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email failed to send." });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
