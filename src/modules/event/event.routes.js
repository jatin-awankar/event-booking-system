import express from "express";
import * as eventController from "./event.controller.js";
import createEventSchema from "./event.validation.js";
import validator from "../../middlewares/validator.js";

const router = express.Router();

router.get("/", eventController.getEvents);
router.post("/", validator(createEventSchema), eventController.createEvent);

export default router;
