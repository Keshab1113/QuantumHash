const nodemailer = require("nodemailer");

const sendMeeting = async (req, res) => {
    const { fullName, email, time, date, duration, timezone, query } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    // --- Email to Admin ---
    const adminMailOptions = {
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER,
        subject: 'New Meeting Form Submission',
        html: `
        <!-- Admin Email HTML here -->
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
        `,
    };

    // --- Auto-Reply to User ---
    const userMailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Meeting Confirmation – QuantumHash',
        html: `
        <!-- User Email HTML -->
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
        `,
    };

    try {
        // Send to Admin
        await transporter.sendMail(adminMailOptions);

        // Send Auto-reply to User
        await transporter.sendMail(userMailOptions);

        res.status(200).json({ message: "Emails sent successfully" });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ message: "Email failed to send", error });
    }
};

module.exports = sendMeeting;
