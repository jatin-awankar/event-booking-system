import express from "express";
import cors from "cors";
import morgan from "morgan";

import eventRoutes from "./modules/event/event.routes.js";
import bookingRoutes from "./modules/booking/booking.routes.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/events", eventRoutes);
app.use("/bookings", bookingRoutes);

// check
app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Not found" });
});

app.use((err, req, res, next) => {
  const status = err.statusCode ?? err.status ?? 500;
  res.status(status).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

export default app;
