import * as eventService from "./event.service.js";

export const getEvents = async (req, res, next) => {
  try {
    const events = await eventService.getUpcomingEvents();

    res.json({ success: true, data: events });
  } catch (err) {
    next(err);
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const event = await eventService.createEvent(req.body);

    res
      .status(201)
      .json({
        success: true,
        message: "Event created successfully",
        data: event,
      });
  } catch (err) {
    next(err);
  }
};
