import * as userService from "./user.service.js";

export const getUserBookings = async (req, res, next) => {
  try {
    const userId = Number.parseInt(req.params.id, 10);
    if (!Number.isInteger(userId) || userId < 1) {
      return res.status(400).json({
        success: false,
        message: "Invalid user id",
      });
    }

    const bookings = await userService.getUserBookings(userId);

    res.json({ success: true, data: bookings });
  } catch (err) {
    next(err);
  }
};
