import Joi from "joi";

const createEventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow(""),
  event_date: Joi.date().required(),
  total_capacity: Joi.number().integer().positive().required(),
});

export default createEventSchema;
