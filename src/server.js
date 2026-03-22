import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
