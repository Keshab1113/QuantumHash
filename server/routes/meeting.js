const express = require("express");
const router = express.Router();
const { DateTime } = require("luxon");

router.get("/validate/:meetingId", async (req, res) => {
  const { meetingId } = req.params;
  const pool = req.app.get("dbPool");

  try {
    const connection = await pool.getConnection();
    const [results] = await connection.query(
      "SELECT original_meeting_date, original_meeting_time, original_timezone FROM meeting_requests WHERE meeting_id = ?",
      [meetingId]
    );
    connection.release();

    if (results.length === 0) {
      return res.status(404).json({ allowed: false, message: "Meeting not found" });
    }

    const { original_meeting_date, original_meeting_time, original_timezone } = results[0];

    const originalDateStr = original_meeting_date.toISOString().split("T")[0];

    const meetingTimeUTC = DateTime.fromFormat(
      `${originalDateStr} ${original_meeting_time}`,
      "yyyy-MM-dd hh:mm a",
      { zone: original_timezone }
    ).toUTC();

    const nowUTC = DateTime.utc();

    const diffInMinutes = meetingTimeUTC.diff(nowUTC, "minutes").toObject().minutes;

    if (diffInMinutes <= 5 && diffInMinutes >= -120) {
      return res.json({ allowed: true });
    } else {
      return res.json({ allowed: false });
    }
  } catch (error) {
    console.error("Validation error:", error);
    return res.status(500).json({ allowed: false, message: "Server error" });
  }
});

module.exports = router;
