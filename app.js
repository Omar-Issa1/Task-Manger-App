import express from "express";
const app = express();
import tasks from "./routes/tasks.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config();
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";

//routes
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(express.static("./public"));

// middleware

app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    const connected = await connectDB(process.env.MONGO_URI);
    if (connected) {
      console.log("Connection done");
    }
    app.listen(port, () => console.log(`server is running on port ${port}`));
  } catch (error) {
    console.error("Cannot connect to database or the server is down:", error);
  }
};

start();
