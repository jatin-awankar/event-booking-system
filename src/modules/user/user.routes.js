import express from "express";
import * as userController from "./user.controller.js";

const router = express.Router();

router.get("/:id/bookings", userController.getUserBookings);

export default router;
