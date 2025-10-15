// import express from "express";
// import tasks from "./routes/tasks.js";
// import connectDB from "./db/connect.js";
// import dotenv from "dotenv";
// import notFound from "./middleware/not-found.js";
// import errorHandler from "./middleware/error-handler.js";
// const app = express();
// dotenv.config();
// //routes
// app.use(express.json());
// app.use("/api/v1/tasks", tasks);
// app.use(express.static("./public"));

// // middleware

// app.use(notFound);
// app.use(errorHandler);
// const port = process.env.PORT || 3000;

// const start = async () => {
//   try {
//     const connected = await connectDB("mongodb://127.0.0.1:27017/Task_Manger");
//     if (connected) {
//       console.log("Connection done");
//     }
//     app.listen(port, () => console.log(`server is running on port ${port}`));
//   } catch (error) {
//     console.error("Cannot connect to database or the server is down:", error);
//   }
// };

// start();
