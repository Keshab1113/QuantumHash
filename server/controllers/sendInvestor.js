 
const nodemailer = require("nodemailer");

const sendInvestor = async (req, res) => {
  const { name, email, companyName, investmentInterest, message } = req.body;
  const pool = req.app.get("dbPool");

  try {
    // 1. Store inquiry in MySQL
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      "INSERT INTO investor_form (name, email, company_name, investment_interest, message) VALUES (?, ?, ?, ?, ?)",
      [name, email, companyName, investmentInterest, message]
    );
    connection.release();

    // 2. Create mail transporter (same as sendEmail)
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Admin notification
    const adminMailOptions = {
      from: `${name} <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `New Investor Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width:600px;margin:auto;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
          <div style="background-color:#5c2d91;padding:20px;text-align:center;color:white;font-weight:bold;">
            QuantumHash Corporation
          </div>
          <div style="padding:30px;background-color:#fff;color:#333;">
            <p><strong>New Investor Inquiry Received</strong></p>
            <p>Here are the details:</p>
            <div style="border:1px solid #ddd;border-radius:6px;padding:15px;margin:20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#5c2d91;">${email}</a></p>
              <p><strong>Company Name:</strong> ${companyName}</p>
              <p><strong>Investment Interest:</strong> ${investmentInterest}</p>
              <p><strong>Message:</strong> ${message}</p>
            </div>
            <p>Best regards,<br><strong>QuantumHash Investor Relations</strong></p>
          </div>
          <div style="background-color:#f5f5f5;text-align:center;padding:10px;font-size:12px;color:#777;">
            QuantumHash Corporation<br />
            <a href="https://www.quantumhash.me" style="color:#5c2d91;">www.quantumhash.me</a>
          </div>
        </div>
      `,
    };

    // Auto reply to investor
    const userAutoReply = {
      from: `"QuantumHash Corporation" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Thank You for Your Interest in QuantumHash",
      html: `
        <div style="font-family: Arial, sans-serif; max-width:600px;margin:auto;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
          <div style="background-color:#5c2d91;padding:20px;text-align:center;color:white;font-weight:bold;">
            QuantumHash Corporation
          </div>
          <div style="padding:30px;background-color:#fff;color:#333;">
            <p>Dear <strong>${name}</strong>,</p>
            <p>Thank you for your interest in <strong>QuantumHash</strong>. Our team will reach out to you soon.</p>
            <div style="border:1px solid #ddd;border-radius:6px;padding:15px;margin:20px 0;">
              <p><strong>Company Name:</strong> ${companyName}</p>
              <p><strong>Investment Interest:</strong> ${investmentInterest}</p>
              <p><strong>Your Message:</strong> ${message}</p>
            </div>
            <p>If your query is urgent, feel free to reply directly to this email.</p>
            <p>Best regards,<br><strong>QuantumHash Team</strong></p>
          </div>
          <div style="background-color:#f5f5f5;text-align:center;padding:10px;font-size:12px;color:#777;">
            QuantumHash Corporation<br />
            <a href="https://www.quantumhash.me" style="color:#5c2d91;">www.quantumhash.me</a>
          </div>
        </div>
      `,
    };

    // 3. Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userAutoReply);

    res.status(200).json({
      success: true,
      message: "Inquiry submitted successfully",
      inquiryId: result.insertId,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit inquiry",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

module.exports = sendInvestor;
