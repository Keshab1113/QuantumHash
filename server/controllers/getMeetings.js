// controllers/getMeetings.js
const getMeetings = async (req, res) => {
  const pool = req.app.get('dbPool');
  
  try {
    const { date } = req.query;
    const connection = await pool.getConnection();
    const [results] = await connection.query(
      'SELECT meeting_time FROM meeting_requests WHERE meeting_date = ?',
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