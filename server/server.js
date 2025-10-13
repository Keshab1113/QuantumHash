const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require('mysql2/promise');
const emailRoutes = require("./routes/email");
const applyRoutes = require("./routes/apply");
const investorRoutes = require("./routes/investor");
const meetingRoutes = require("./routes/meeting");
const meetingsRoutes = require("./routes/meetings");
const sendReminderEmails = require("./controllers/sendReminder");

dotenv.config();
const app = express();
 
app.use(
  cors({
    origin: [
      "https://quantumhash.me",
      "https://www.quantumhash.me",
      "https://quantum-hash.vercel.app",
      "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

 


app.use(express.json({ limit: '10mb' })); // or more depending on expected file size
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use("/api/email", emailRoutes);
app.use("/api/apply", applyRoutes);
app.use("/api/investor", investorRoutes);
app.use("/api/meeting", meetingRoutes);
app.use("/api/meetings", meetingsRoutes);


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

// âœ… Default route to check server is running
app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "ðŸš€ Server is up and running!",
    time: new Date().toISOString()
  });
});

sendReminderEmails(app);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
