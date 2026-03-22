import * as bookingService from "./booking.service.js";

export const createBooking = async (req, res, next) => {
  try {
    const result = await bookingService.createBooking(req.body);

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
