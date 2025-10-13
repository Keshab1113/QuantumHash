const express = require("express");
const router = express.Router();
const sendMeeting = require("../controllers/sendMeeting");
const validateMeeting = require("../controllers/validateMeeting");

// Create a new meeting
router.post("/", sendMeeting);

// Validate meeting access
router.get("/validate/:meetingId", validateMeeting);

module.exports = router;
