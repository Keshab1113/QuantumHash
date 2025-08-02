const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sendEmail = require("./controllers/sendEmail");
const sendApplyData = require("./controllers/sendApplyData");
const sendInvestor = require("./controllers/sendInvestor");
const sendMeeting = require("./controllers/sendMeeting");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' })); // or more depending on expected file size
app.use(express.urlencoded({ limit: '10mb', extended: true }));

const PORT = process.env.PORT || 5000;

app.post("/api/send-email", sendEmail);
app.post("/api/apply", sendApplyData);
app.post("/api/investor", sendInvestor);
app.post("/api/meeting", sendMeeting);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
