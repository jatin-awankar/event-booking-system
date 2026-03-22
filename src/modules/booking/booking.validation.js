import Joi from "joi";

const createBookingSchema = Joi.object({
  user_id: Joi.number().integer().positive().required(),
  event_id: Joi.number().integer().positive().required(),
});

export default createBookingSchema;
