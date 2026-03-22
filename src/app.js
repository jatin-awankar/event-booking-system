import express from "express";
import cors from "cors";
import morgan from "morgan";

import eventRoutes from "./modules/event/event.routes.js";
import bookingRoutes from "./modules/booking/booking.routes.js";
import userRoutes from "./modules/user/user.routes.js";
import attendanceRoutes from "./modules/attendance/attendance.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/events", eventRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);
app.use("/events", attendanceRoutes);

// check
app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Not found" });
});

app.use(errorMiddleware);

export default app;
