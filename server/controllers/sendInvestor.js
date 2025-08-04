const nodemailer = require("nodemailer");

const sendInvestor = async (req, res) => {
  const { name, email, companyName, investmentInterest, message } = req.body;

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
  // Admin notification
  const adminMailOptions = {
    from: `"QuantumHash Careers" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: `New Investor Inquiry from ${name}`,
    html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
        .header { background-color: #5c2d91; padding: 25px; text-align: center; color: white; }
        .header h1 { margin: 0; font-size: 22px; font-weight: 600; }
        .content { padding: 30px; background-color: #ffffff; }
        .details-box { background-color: #f9f9f9; border: 1px solid #e1e1e1; border-radius: 6px; padding: 20px; margin: 20px 0; }
        .footer { background-color: #f5f5f5; text-align: center; padding: 15px; font-size: 12px; color: #777; }
        .label { font-weight: 600; color: #5c2d91; }
        a { color: #5c2d91; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Investor Inquiry</h1>
        </div>
        
        <div class="content">
            <p>Hello Team,</p>
            <p>You have received a new inquiry from a potential investor. Here are the details:</p>
            <div class="details-box">
                <p><span class="label">Investor Name:</span> ${name}</p>
                <p><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></p>
                <p><span class="label">Company Name:</span> ${companyName}</p>
                <p><span class="label">Investment Interest:</span> ${investmentInterest}</p>
                <p><span class="label">Message:</span> ${message}</p>
            </div>
            <p>Please review the details and follow up with the investor accordingly.</p>
            <p>Best regards,<br><strong>QuantumHash Investor Relations</strong></p>
        </div>
        <div class="footer">
            QuantumHash Corporation<br>
            <a href="https://www.quantumhash.me">www.quantumhash.me</a>
        </div>
    </div>
</body>
</html>
        `,
  };

  // Auto-reply to investor
  const userAutoReply = {
    from: `"QuantumHash HR" <${process.env.MAIL_USER}>`,
    to: email,
    subject: "Thank You for Your Interest in QuantumHash",
    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
    .header { background-color: #5c2d91; padding: 25px; text-align: center; color: white; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 600; }
    .content { padding: 30px; background-color: #ffffff; }
    .details-box { background-color: #f9f9f9; border: 1px solid #e1e1e1; border-radius: 6px; padding: 20px; margin: 20px 0; }
    .footer { background-color: #f5f5f5; text-align: center; padding: 15px; font-size: 12px; color: #777; }
    .label { font-weight: 600; color: #5c2d91; }
    a { color: #5c2d91; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Reaching Out</h1>
    </div>
    <div class="content">
      <p>Dear <strong>${name}</strong>,</p>
      <p>Thank you for showing interest in <strong>QuantumHash</strong>. We’ve received your inquiry and our investor relations team will contact you soon.</p>
      
      <div class="details-box">
        <p><span class="label">Company Name:</span> ${companyName}</p>
        <p><span class="label">Investment Interest:</span> ${investmentInterest}</p>
        <p><span class="label">Your Message:</span> ${message}</p>
      </div>

      <p>If your query is urgent, feel free to reply directly to this email.</p>

      <p>Best regards,<br><strong>QuantumHash Team</strong></p>
    </div>
    <div class="footer">
      QuantumHash Corporation<br>
      <a href="https://www.quantumhash.me">www.quantumhash.me</a>
    </div>
  </div>
</body>
</html>
        `,
  };

  try {
    await transporter.sendMail(adminMailOptions);  // To Admin
    await transporter.sendMail(userAutoReply);     // Auto-reply to user
    res.status(200).json({ message: "Inquiry submitted successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ message: "Failed to submit inquiry", error });
  }
};

module.exports = sendInvestor;
