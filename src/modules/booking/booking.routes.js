import express from "express";
import * as bookingController from "./booking.controller.js";
import createBookingSchema from "./booking.validation.js";
import validator from "../../middlewares/validator.js";

const router = express.Router();

router.post(
  "/",
  validator(createBookingSchema),
  bookingController.createBooking,
);

export default router;
