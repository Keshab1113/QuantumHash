const cron = require("node-cron");
const nodemailer = require("nodemailer");
const { DateTime } = require("luxon");


const sendReminderEmails = (app) => {
  const pool = app.get("dbPool");

  cron.schedule("* * * * *", async () => {
    const nowUTC = DateTime.utc().startOf("minute");
    const targetTimeUTC = nowUTC.plus({ minutes: 15 });

    const connection = await pool.getConnection();
    const [meetings] = await connection.query(
      "SELECT * FROM meeting_requests WHERE meeting_date >= CURDATE() OR original_meeting_date >= CURDATE()"
    );
    connection.release();

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

    for (const meeting of meetings) {
      const {
        full_name,
        email,
        meeting_time,
        meeting_date,
        duration,
        timezone,
        query,
        original_timezone,
        original_meeting_time,
        original_meeting_date,
        meeting_id,
      } = meeting;
      
      const originalDateStr = original_meeting_date.toISOString().split('T')[0];
      const meetingDateStr = meeting_date.toISOString().split('T')[0];
      const meetingLink = `https://quantumhash.me/conference/${meeting_id}`;

      const userMeetingDateTime = DateTime.fromFormat(
        `${originalDateStr} ${original_meeting_time}`,
        'yyyy-MM-dd hh:mm a',
        { zone: original_timezone }
      ).toUTC().startOf("minute");

      const adminMeetingDateTime = DateTime.fromFormat(
        `${meetingDateStr} ${meeting_time}`,
        'yyyy-MM-dd hh:mm a',
        { zone: timezone }
      ).toUTC().startOf("minute");

      if (!userMeetingDateTime.equals(targetTimeUTC) && !adminMeetingDateTime.equals(targetTimeUTC)) continue;

      const userTime = userMeetingDateTime.setZone(original_timezone).toFormat('ff');
      const adminTime = adminMeetingDateTime.setZone("Asia/Kuwait").toFormat('ff');

      const adminMailOptions = {
        from: `${full_name} <${process.env.MAIL_USER}>`,
        to: process.env.MAIL_USER,
        subject: "⏰ Meeting Reminder – 15 minutes remaining",
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px;">
  <div style="background-color: #5c2d91; padding: 20px; text-align: center; color: white; font-weight: bold;">
    QuantumHash Meeting Reminder
  </div>
  <div style="padding: 20px;">
    <p>Dear <strong>Admin</strong>,</p>
    <p>This is a reminder for a meeting starting in 15 minutes.</p>
    <p><strong>Attendee:</strong> ${full_name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Date (Kuwait):</strong> ${adminTime}</p>
    <p><strong>User's Local Time:</strong> ${userTime}</p>
    <p><strong>Timezone:</strong> ${timezone}</p>
    <p><strong>Duration:</strong> ${duration} mins</p>
    <p><strong>Message:</strong> ${query || 'No message provided'}</p>
    <p><strong>Meeting Room:</strong> <a href="${meetingLink}">${meetingLink}</a></p>
  </div>
</div>`
      };

      const userMailOptions = {
        from: `"QuantumHash Corporation" <${process.env.MAIL_USER}>`,
        to: email,
        subject: "🕒 Reminder: Your meeting starts in 15 minutes",
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px;">
  <div style="background-color: #5c2d91; padding: 20px; text-align: center; color: white; font-weight: bold;">
    QuantumHash Meeting Reminder
  </div>
  <div style="padding: 20px;">
    <p>Dear <strong>${full_name}</strong>,</p>
    <p>Your meeting is scheduled to start in 15 minutes.</p>
    <p><strong>Date:</strong> ${userTime}</p>
    <p><strong>Timezone:</strong> ${original_timezone}</p>
    <p><strong>Duration:</strong> ${duration} mins</p>
    <p><strong>Meeting Room:</strong> <a href="${meetingLink}">${meetingLink}</a></p>
  </div>
</div>`
      };

      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);
    }
  });
};

module.exports = sendReminderEmails;
