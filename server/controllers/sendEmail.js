const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER, // e.g., your email
            pass: process.env.MAIL_PASS, // app password
        },
    });

    const mailOptions = {
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER, // your receiving email
        subject: `New Contact Form Submission: ${subject}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
  <!-- Header -->
  <div style="background-color: #5c2d91; padding: 20px; text-align: center; color: white; font-weight: bold; font-size: 18px;">
    QuantumHash Corporation
  </div>

  <!-- Body -->
  <div style="padding: 30px; background-color: #fff; color: #333;">
    <p><strong>New Query Submitted from Website Form</strong></p>

    <p>Here are the details submitted by the user:</p>

    <!-- Details Box -->
    <div style="border: 1px solid #ddd; border-radius: 6px; padding: 15px; margin: 20px 0;">
      <p><strong>Full Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #5c2d91;">${email}</a></p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Query:</strong> ${message}</p>
    </div>

    <p>You may reply directly to the user's email or follow up via phone.</p>

    <p>Best regards, <br />
    <strong>QuantumHash System Notification</strong></p>
  </div>

  <!-- Footer -->
  <div style="background-color: #f5f5f5; text-align: center; padding: 10px; font-size: 12px; color: #777;">
    QuantumHash Corporation<br />
    <a href="https://www.quantumhash.me" style="color: #5c2d91;">www.quantumhash.me</a>
  </div>
</div>

        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ message: "Email failed to send", error });
    }
};

module.exports = sendEmail;
