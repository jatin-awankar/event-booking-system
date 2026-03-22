import Joi from "joi";

const createBookingSchema = Joi.object({
  user_id: Joi.number().required(),
  event_id: Joi.number().required(),
});

export default createBookingSchema;
