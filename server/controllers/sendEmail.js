const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465, // Use 465 for SSL (recommended) or 587 for TLS
    secure: true, // true for 465, false for 587
    auth: {
      user: process.env.MAIL_USER,
      pass: 'S9867867878$#@4delta',
    },
    tls: {
      rejectUnauthorized: false // Only if you get TLS errors (not ideal for production)
    }
  });

  // Admin notification email
  const mailOptions = {
    from: `"QuantumHash Careers" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #5c2d91; padding: 20px; text-align: center; color: white; font-weight: bold; font-size: 18px;">
                QuantumHash Corporation
              </div>
              <div style="padding: 30px; background-color: #fff; color: #333;">
                <p><strong>New Query Submitted from Website Form</strong></p>
                <p>Here are the details submitted by the user:</p>
                <div style="border: 1px solid #ddd; border-radius: 6px; padding: 15px; margin: 20px 0;">
                  <p><strong>Full Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #5c2d91;">${email}</a></p>
                  <p><strong>Phone Number:</strong> ${phone}</p>
                  <p><strong>Subject:</strong> ${subject}</p>
                  <p><strong>Query:</strong> ${message}</p>
                </div>
                <p>You may reply directly to the user's email or follow up via phone.</p>
                <p>Best regards, <br /><strong>QuantumHash System Notification</strong></p>
              </div>
              <div style="background-color: #f5f5f5; text-align: center; padding: 10px; font-size: 12px; color: #777;">
                QuantumHash Corporation<br />
                <a href="https://www.quantumhash.me" style="color: #5c2d91;">www.quantumhash.me</a>
              </div>
            </div>
        `,
  };

  // Auto-reply email to the user
  const userReplyOptions = {
    from: `"QuantumHash HR" <${process.env.MAIL_USER}>`,
    to: email,
    subject: "We've received your message – QuantumHash",
    html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #5c2d91; padding: 20px; text-align: center; color: white; font-weight: bold; font-size: 18px;">
                QuantumHash Corporation
              </div>
              <div style="padding: 30px; background-color: #fff; color: #333;">
                <p>Dear <strong>${name}</strong>,</p>
                <p>Thank you for reaching out to <strong>QuantumHash</strong>.</p>
                <p>We’ve received your message and will get back to you as soon as possible.</p>

                <div style="border: 1px solid #ddd; border-radius: 6px; padding: 15px; margin: 20px 0;">
                  <p><strong>Your Submission Details:</strong></p>
                  <p><strong>Subject:</strong> ${subject}</p>
                  <p><strong>Message:</strong> ${message}</p>
                  <p><strong>Phone:</strong> ${phone}</p>
                </div>

                <p>If your message is urgent, feel free to contact us directly at <a href="mailto:${process.env.MAIL_USER}" style="color: #5c2d91;">${process.env.MAIL_USER}</a>.</p>

                <p>Best regards,<br />
                <strong>QuantumHash Support Team</strong></p>
              </div>
              <div style="background-color: #f5f5f5; text-align: center; padding: 10px; font-size: 12px; color: #777;">
                QuantumHash Corporation<br />
                <a href="https://www.quantumhash.me" style="color: #5c2d91;">www.quantumhash.me</a>
              </div>
            </div>
        `,
  };

  try {
    await transporter.sendMail(mailOptions);       // To Admin
    await transporter.sendMail(userReplyOptions);  // Auto-reply to User

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ message: "Email failed to send", error });
  }
};

module.exports = sendEmail;
