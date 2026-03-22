import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import eventRoutes from "./modules/event/event.routes.js";
import bookingRoutes from "./modules/booking/booking.routes.js";
import userRoutes from "./modules/user/user.routes.js";
import attendanceRoutes from "./modules/attendance/attendance.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();
const swaggerDocument = YAML.load("./docs/swagger.yaml");

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/events", eventRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);
app.use("/events", attendanceRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// check
app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Not found" });
});

app.use(errorMiddleware);

export default app;
