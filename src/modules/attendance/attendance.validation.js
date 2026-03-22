import Joi from "joi";

const attendanceSchema = Joi.object({
  booking_code: Joi.string().trim().required(),
});

export default attendanceSchema;
