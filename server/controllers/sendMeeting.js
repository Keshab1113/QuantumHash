const nodemailer = require("nodemailer");

const sendMeeting = async (req, res) => {
  const { fullName, email, time, date, duration, timezone, query } = req.body;
  const pool = req.app.get('dbPool'); // Get the shared connection pool

  try {
    // 1. First store the meeting request in MySQL
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'INSERT INTO meeting_requests (full_name, email, meeting_time, meeting_date, duration, timezone, query) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [fullName, email, time, date, duration, timezone, query]
    );
    connection.release();

    // 2. Then send emails
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD, // Use environment variable
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // --- Email to Admin ---
    const adminMailOptions = {
      from: `${fullName} <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: 'New Meeting Form Submission',
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #5c2d91; padding: 20px; text-align: center; color: white; font-weight: bold; font-size: 18px;">
    QuantumHash Meeting Notification
  </div>
  <div style="padding: 30px; background-color: #fff; color: #333;">
    <p>Dear <strong>Admin</strong>,</p>
    <p>A new meeting has been scheduled through the QuantumHash platform. Please find the meeting details below:</p>
    <div style="border: 1px solid #ddd; border-radius: 6px; padding: 15px; margin: 20px 0;">
      <p><strong>Scheduled Meeting Details:</strong></p>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #5c2d91;">${email}</a></p>
      <p><strong>Preferred Date:</strong> ${date}</p>
      <p><strong>Preferred Time:</strong> ${time}</p>
      <p><strong>Timezone:</strong> ${timezone}</p>
      <p><strong>Duration:</strong> ${duration}</p>
      <p><strong>Message:</strong> ${query}</p>
    </div>
    <div style="text-align: center; margin: 20px 0;">
      <a href="https://quantumhash.me/pages/meetRoom?CH=070b-175d5949243" style="display: inline-block; padding: 12px 20px; background-color: #5c2d91; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
        Open Meeting Room
      </a>
    </div>
    <p style="text-align: center;">Meeting Room Link:</p>
    <div style="text-align: center; margin-bottom: 30px;">
      <a href="https://quantumhash.me/pages/meetRoom?CH=070b-175d5949243" style="color: #5c2d91;">
        https://quantumhash.me/pages/meetRoom?CH=070b-175d5949243
      </a>
    </div>
    <p>Kindly ensure this meeting is acknowledged or assigned accordingly.</p>
    <p>Best regards, <br /><strong>QuantumHash Automated Scheduler</strong></p>
  </div>
  <div style="background-color: #f5f5f5; text-align: center; padding: 10px; font-size: 12px; color: #777;">
    QuantumHash Corporation<br />
    <a href="https://www.quantumhash.me" style="color: #5c2d91;">www.quantumhash.me</a>
  </div>
</div>
      `
    };

    // --- Auto-Reply to User ---
    const userMailOptions = {
      from: `"QuantumHash Corporation" <${process.env.MAIL_USER}>`,
      to: email,
      subject: 'Meeting Confirmation – QuantumHash',
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #5c2d91; padding: 20px; text-align: center; color: white; font-weight: bold; font-size: 18px;">
    QuantumHash Corporation
  </div>
  <div style="padding: 30px; background-color: #fff; color: #333;">
    <p>Dear <strong>${fullName}</strong>,</p>
    <p>
      Thank you for scheduling a meeting with <strong>QuantumHash</strong>. We have received your request and our team will reach out to you shortly to confirm the meeting.
    </p>
    <div style="border: 1px solid #ddd; border-radius: 6px; padding: 15px; margin: 20px 0;">
      <p><strong>Your Meeting Details:</strong></p>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #5c2d91;">${email}</a></p>
      <p><strong>Preferred Date:</strong> ${date}</p>
      <p><strong>Preferred Time:</strong> ${time}</p>
      <p><strong>Timezone:</strong> ${timezone}</p>
      <p><strong>Message:</strong> ${query}</p>
      <p><strong>Duration:</strong> ${duration} minutes</p>
    </div>
    <div style="text-align: center; margin: 20px 0;">
      <a href="https://quantumhash.me/pages/meetRoom?CH=070b-175d5949243" style="display: inline-block; padding: 12px 20px; background-color: #5c2d91; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
        Join Your Meeting Room
      </a>
    </div>
    <p style="text-align: center;">Or share this link with others:</p>
    <div style="text-align: center; margin-bottom: 30px;">
      <a href="https://quantumhash.me/pages/meetRoom?CH=070b-175d5949243" style="color: #5c2d91;">
        https://quantumhash.me/pages/meetRoom?CH=070b-175d5949243
      </a>
    </div>
    <p>If you need to modify your meeting request, feel free to reply to this email.</p>
    <p>Best regards, <br /><strong>QuantumHash Support Team</strong></p>
  </div>
  <div style="background-color: #f5f5f5; text-align: center; padding: 10px; font-size: 12px; color: #777;">
    QuantumHash Corporation<br />
    <a href="https://www.quantumhash.me" style="color: #5c2d91;">www.quantumhash.me</a>
  </div>
</div>
      `
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ 
      success: true,
      message: "Meeting request submitted and emails sent successfully",
      meetingId: result.insertId 
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ 
      success: false,
      message: "An error occurred while processing your meeting request",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = sendMeeting;