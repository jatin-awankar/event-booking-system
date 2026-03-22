import pool from "../../config/db.js";

export const getUpcomingEvents = async () => {
  const query = `
        SELECT id, title, description, event_date, total_capacity, remaining_tickets
        FROM events
        WHERE event_date > NOW()
        ORDER BY event_date ASC
    `;

  const [rows] = await pool.query(query);
  return rows;
};

export const createEvent = async (data) => {
  const { title, description, event_date, total_capacity } = data;

  const query = `
        INSERT INTO events (title, description, event_date, total_capacity, remaining_tickets)
        VALUES (?, ?, ?, ?, ?)
    `;

  const [result] = await pool.query(query, [
    title,
    description || null,
    event_date,
    total_capacity,
    total_capacity,
  ]);

  return { id: result.insertId };
};
