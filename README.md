# Task Manager API

A clean and structured Task Manager REST API built with Node.js, Express, and MongoDB, and now deployed on Vercel with automated Uptime monitoring.
This project demonstrates how to build, deploy, and keep alive a production-ready backend with health checks and proper error handling.
---

## Features

✅ Full CRUD operations
✅ Validation using Mongoose and Joi
✅ Custom error handling middleware
✅ Async wrapper for cleaner controller logic
✅ Environment variables via .env
✅ Organized MVC-like structure
✅ Health check endpoint for uptime monitoring
✅ Deployed on Vercel with Ping Job (UptimeRobot) to prevent cold starts

---

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Joi** for schema validation
- **dotenv** for environment management
- **Vercel** for deployment
- **UptimeRobo** for automated health monitoring

---

## Project Structure

```
Task-Manger-App/
├── controllers/
│   └── tasks.js
├── errors/
│   └── custom-errors.js
├── middleware/
│   ├── async.js
│   ├── error-handler.js
│   ├── not-found.js
│   └── validateTask.js
├── models/
│   └── Task.js
├── routes/
│   ├── tasks.js
│   └── health.js
├── db/
│   └── connect.js
├── public/
│   └── index.html
├── api/
│   └── app.js
├── .env
└── package.json
```

---

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Omar-Issa1/Task-Manger-App.git
   ```

2. **Navigate to the project**

   ```bash
   cd Task-Manger-App
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Create a `.env` file** in the root directory:

   ```
   PORT=3000
   MONGO_URI=your_personal_mongodb_connection_string

   ```

### ⚠️ IMPORTANT: Use your own MongoDB URI to avoid sharing data with others!

```
MONGO_URI=your_personal_mongodb_connection_string
You can create your own MongoDB cluster for free at MongoDB Atlas
or use a local MongoDB instance for private testing.
```

5. **Start the development server**

```bash
npm start
```

Server will run on:
[http://localhost:3000](http://localhost:3000)

---
## Deployment (Vercel)

This project is fully deployable on Vercel.
You can view the live version here:
[Task Manager API – Live Demo](https://task-manger-app-five.vercel.app)

---

## Health Check

Health route to verify uptime and database connection:
```
GET /api/health
```
Example Response:
```
{
  "status": "ok",
  "uptime": 12453.98,
  "database": "connected",
  "timestamp": "2025-10-15T15:25:34.123Z"
}
```
---

## Uptime Monitoring

This API uses UptimeRobot to keep the backend awake and monitor availability.

Status Page:
[https://stats.uptimerobot.com/yQQNN5akez?utm](https://stats.uptimerobot.com/yQQNN5akez?utm)

---

## API Endpoints

| Method   | Endpoint            | Description       |
| -------- | ------------------- | ----------------- |
| `GET`    | `/api/v1/tasks`     | Get all tasks     |
| `POST`   | `/api/v1/tasks`     | Create a new task |
| `GET`    | `/api/v1/tasks/:id` | Get a single task |
| `PATCH`  | `/api/v1/tasks/:id` | Update a task     |
| `DELETE` | `/api/v1/tasks/:id` | Delete a task     |

---

## Example Request

### POST `/api/v1/tasks`

```json
{
  "name": "Finish backend project",
  "completed": false
}
```

### Response:

```json
{
  "status": "success",
  "data": {
    "_id": "671a2f19b182bbab5ef9c28b",
    "name": "Finish backend project",
    "completed": false,
    "__v": 0
  }
}
```

---

## Highlights

- Clean, modular codebase ready for scaling
- Custom reusable error classes (`customAPIError`)
- Uses `asyncWrapper` to handle async/await errors elegantly
- Implements `validateTask` middleware for request validation
- Deployed on Vercel with auto health checks

---

## Author

**Omar Issa**  
📍 Backend Developer & Node.js Enthusiast  
📧 [omar.issa.contact@gmail.com](mailto:omar.issa.contact@gmail.com)  
🌐 [GitHub Profile](https://github.com/Omar-Issa1)

---

## License

This project is open source under the [MIT License](LICENSE).



