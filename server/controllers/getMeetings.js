const getMeetings = async (req, res) => {
  const pool = req.app.get('dbPool');
  
  try {
    const { date } = req.query;
    const connection = await pool.getConnection();
   // Fetch all meetings for the day (UTC)
const [results] = await connection.query(
  'SELECT meeting_time, meeting_date, original_timezone FROM meeting_requests WHERE DATE(CONVERT_TZ(meeting_date, "+00:00", "+00:00")) = ?',
  [date]
);


    connection.release();
    
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching meetings:", error);
    res.status(500).json({ 
      success: false,
      message: "Failed to fetch meetings",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
module.exports = getMeetings;