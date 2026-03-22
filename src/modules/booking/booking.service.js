import pool from "../../config/db.js";
import { v4 as uuidv4 } from "uuid";

export const createBooking = async ({ user_id, event_id }) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [events] = await connection.query(
      `SELECT remaining_tickets FROM events WHERE id = ? FOR UPDATE`,
      [event_id],
    );

    if (events.length === 0) {
      const err = new Error("Event not found");
      err.statusCode = 404;
      throw err;
    }

    const event = events[0];

    if (event.remaining_tickets <= 0) {
      const err = new Error("No tickets available");
      err.statusCode = 409;
      throw err;
    }

    const bookingCode = uuidv4();

    await connection.query(
      `INSERT INTO bookings (user_id, event_id, booking_code)
            VALUES (?, ?, ?)`,
      [user_id, event_id, bookingCode],
    );

    await connection.query(
      `UPDATE events
            SET remaining_tickets = remaining_tickets - 1
            WHERE id = ?`,
      [event_id],
    );

    await connection.commit();

    return { booking_code: bookingCode };
  } catch (err) {
    await connection.rollback();
    throw err;
  } finally {
    connection.release();
  }
};
