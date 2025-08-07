const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require('mysql2/promise');
const sendEmail = require("./controllers/sendEmail");
const sendApplyData = require("./controllers/sendApplyData");
const sendInvestor = require("./controllers/sendInvestor");
const sendMeeting = require("./controllers/sendMeeting");
const getMeetings = require("./controllers/getMeetings");
const sendReminderEmails = require("./controllers/sendReminder");
const meetingRoutes = require("./routes/meeting");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' })); // or more depending on expected file size
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use("/api/meeting", meetingRoutes);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.set('dbPool', pool);

const PORT = process.env.PORT || 5000;

app.post("/api/send-email", sendEmail);
app.post("/api/apply", sendApplyData);
app.post("/api/investor", sendInvestor);
app.post("/api/meeting", sendMeeting);
app.get("/api/meetings", getMeetings);
sendReminderEmails(app);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
