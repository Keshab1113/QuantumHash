const nodemailer = require("nodemailer");

const sendApplyData = async (req, res) => {
    const { name, email, phone, country, city, resumeLink, jobTitle } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.MAIL_USER,
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
                ${resumeLink ? `<p><span class="label">Resume:</span> <a href="${resumeLink}" target="_blank">View Resume</a></p>` : ''}
            </div>
            
            <p>Please review this application and follow up with the candidate as appropriate.</p>
            
            <p>Best regards,<br>
            <strong>QuantumHash Careers Team</strong></p>
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
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Application submitted successfully" });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ message: "Failed to submit application", error });
    }
};

module.exports = sendApplyData;