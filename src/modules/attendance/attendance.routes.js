import express from "express";
import * as attendanceController from "./attendance.controller.js";
import attendanceSchema from "./attendance.validation.js";
import validator from "../../middlewares/validator.js";

const router = express.Router();

router.post(
  "/:id/attendance",
  validator(attendanceSchema),
  attendanceController.markAttendance,
);

export default router;
