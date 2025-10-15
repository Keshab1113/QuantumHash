const nodemailer = require("nodemailer");

const sendApplyData = async (req, res) => {
    const { name, email, phone, country, city, jobTitle } = req.body;
const file = req.file; // 📎 this will have resume if attached

    const pool = req.app.get('dbPool'); // Get the shared connection pool

    try {
        // 1. First store the application in MySQL
        const connection = await pool.getConnection();
        const [result] = await connection.query(
            'INSERT INTO job_applications (name, email, phone, country, city, resume_link, job_title) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [ name, email, phone, country, city, file ? file.originalname : '', jobTitle ]

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

        // Email to Admin
        const mailOptions = {
            from: `${name} <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_USER,
            subject: `New Job Application: ${jobTitle}`,
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
            <h1>New Job Application Received</h1>
        </div>
        
        <div class="content">
            <p>Hello Team,</p>
            <p>A new application has been submitted for the position: <strong>${jobTitle}</strong>.</p>
            <div class="details-box">
                <p><span class="label">Applicant Name:</span> ${name}</p>
                <p><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></p>
                <p><span class="label">Phone:</span> ${phone}</p>
                <p><span class="label">Location:</span> ${city}, ${country}</p>
                ${file ? `<p><span class="label">Resume:</span> Attached file (${file.originalname})</p>` : ''}

            </div>
            <p>Please review this application and follow up with the candidate as appropriate.</p>
            <p>Best regards,<br><strong>QuantumHash Corporation Team</strong></p>
        </div>
        <div class="footer">
            QuantumHash Corporation<br>
            <a href="https://www.quantumhash.me">www.quantumhash.me</a>
        </div>
    </div>
</body>
</html>
            `, attachments: file
        ? [
            {
                filename: file.originalname,
                content: file.buffer
            }
        ]
        : []
        };

        // Auto-reply to Applicant
        const autoReply = {
            from: `"QuantumHash Corporation" <${process.env.MAIL_USER}>`,
            to: email,
            subject: `Application Received for ${jobTitle} – QuantumHash`,
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
    .footer { background-color: #f5f5f5; text-align: center; padding: 15px; font-size: 12px; color: #777; }
    .highlight { color: #5c2d91; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Applying</h1>
    </div>
    <div class="content">
      <p>Dear <strong>${name}</strong>,</p>
      <p>Thank you for applying for the <span class="highlight">${jobTitle}</span> role at <strong>QuantumHash</strong>. We appreciate your interest in joining our team.</p>
      <p>Our recruitment team is currently reviewing your application. If your profile aligns with our requirements, we'll contact you shortly with next steps.</p>
      <p>In the meantime, feel free to explore more about us at <a href="https://www.quantumhash.me" target="_blank">quantumhash.me</a>.</p>
      <p>Warm regards,<br><strong>QuantumHash Corporation Team</strong></p>
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

        await transporter.sendMail(mailOptions);   // Admin
        await transporter.sendMail(autoReply);     // Applicant

        res.status(200).json({ 
            success: true,
            message: "Application submitted successfully",
            applicationId: result.insertId 
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ 
            success: false,
            message: "Failed to submit application",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

module.exports = sendApplyData;