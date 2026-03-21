import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// check
app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

export default app;
