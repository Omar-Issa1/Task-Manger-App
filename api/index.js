import express from "express";
import tasks from "../routes/tasks.js";
import connectDB from "../db/connect.js";
import dotenv from "dotenv";
import notFound from "../middleware/not-found.js";
import errorHandler from "../middleware/error-handler.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/api/v1/tasks", tasks);

// Middleware
app.use(notFound);
app.use(errorHandler);

let isConnected = false;

export default async function handler(req, res) {
  if (!isConnected) {
    await connectDB(process.env.MONGO_URI);
    isConnected = true;
    console.log("Connected to MongoDB Atlas");
  }

  return app(req, res);
}
