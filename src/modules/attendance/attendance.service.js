import pool from "../../config/db.js";

export const markAttendance = async (eventId, bookingCode) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [bookings] = await connection.query(
      `SELECT id, event_id FROM bookings WHERE booking_code = ?`,
      [bookingCode],
    );

    if (bookings.length === 0) {
      const err = new Error("Invalid booking code");
      err.statusCode = 404;
      throw err;
    }

    const booking = bookings[0];

    if (Number(booking.event_id) !== eventId) {
      const err = new Error("Booking does not belong to this event");
      err.statusCode = 400;
      throw err;
    }

    const [existing] = await connection.query(
      `SELECT id FROM event_attendance WHERE booking_id = ?`,
      [booking.id],
    );

    if (existing.length > 0) {
      const err = new Error("Attendance already marked");
      err.statusCode = 409;
      throw err;
    }

    await connection.query(
      `INSERT INTO event_attendance (booking_id) VALUES (?)`,
      [booking.id],
    );

    await connection.commit();

    return { message: "Attendance marked successfully", tickets: 1 };
  } catch (err) {
    await connection.rollback();
    throw err;
  } finally {
    connection.release();
  }
};
