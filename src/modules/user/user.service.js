import pool from "../../config/db.js";

export const getUserBookings = async (userId) => {
  const query = `
    SELECT
      b.id AS booking_id,
      b.booking_code,
      b.booking_date,
      e.id AS event_id,
      e.title,
      e.event_date
    FROM bookings b
    INNER JOIN events e ON b.event_id = e.id
    WHERE b.user_id = ?
    ORDER BY b.booking_date DESC
  `;

  const [rows] = await pool.query(query, [userId]);

  return rows;
};
