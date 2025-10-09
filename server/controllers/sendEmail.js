const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  const pool = req.app.get('dbPool'); // Get the shared connection pool

  try {
    // 1. First store the data in MySQL
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'INSERT INTO contact_submissions (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone, subject, message]
    );
    connection.release();

    // 2. Then send emails
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Admin notification email
    const mailOptions = {
      from: `${name} <${process.env.MAIL_USER}>`,
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
      from: `"QuantumHash Corporation" <${process.env.MAIL_USER}>`,
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
                  <p>We've received your message and will get back to you as soon as possible.</p>

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

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userReplyOptions);

    res.status(200).json({ 
      success: true,
      message: "Form submitted and email sent successfully",
      submissionId: result.insertId 
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ 
      success: false,
      message: "An error occurred while processing your submission",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = sendEmail;
