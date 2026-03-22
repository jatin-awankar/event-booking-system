import * as attendanceService from "./attendance.service.js";

export const markAttendance = async (req, res, next) => {
  try {
    const eventId = Number.parseInt(req.params.id, 10);
    if (!Number.isInteger(eventId) || eventId < 1) {
      return res.status(400).json({
        success: false,
        message: "Invalid event id",
      });
    }

    const { booking_code } = req.body;

    const result = await attendanceService.markAttendance(
      eventId,
      booking_code,
    );

    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};
