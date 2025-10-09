#  Task Manager API

A clean and structured **Task Manager REST API** built with **Node.js**, **Express**, and **MongoDB**.  
This project allows users to **create**, **read**, **update**, and **delete** tasks — demonstrating how to build a complete backend API with proper error handling, validation, and architecture.

---

##  Features

✅ Full **CRUD operations**  
✅ **Validation** using both **Mongoose** and **Joi**  
✅ **Custom error handling** with centralized middleware  
✅ **Async wrapper** for cleaner controller logic  
✅ **Environment variables** with `.env`  
✅ Organized **MVC-like structure**

---

##  Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Joi** for schema validation
- **dotenv** for environment management

---

##  Project Structure

```
Task-Manger-App/
├── controllers/
│   └── tasks.js
├── errors/
│   └── custom-errors.js
├── middleware/
│   ├── async.js
│   ├── error-handler.js
│   └── validateTask.js
├── models/
│   └── Task.js
├── routes/
│   └── tasks.js
├── app.js
├── .env
└── package.json
```

---

##  Setup & Installation

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
   PORT=6000
   MONGO_URI=your_mongodb_connection_string
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

   Server will run on:
    [http://localhost:6000/api/v1/tasks](http://localhost:6000/api/v1/tasks)

---

##  API Endpoints

| Method   | Endpoint            | Description        |
| -------- | ------------------- | ------------------ |
| `GET`    | `/api/v1/tasks`     | Get all tasks      |
| `POST`   | `/api/v1/tasks`     | Create a new task  |
| `GET`    | `/api/v1/tasks/:id` | Get a single task  |
| `PATCH`  | `/api/v1/tasks/:id` | Update a task      |
| `DELETE` | `/api/v1/tasks/:id` | Delete a task      |

---

##  Example Request

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

##  Highlights

- Clean, modular codebase ready for scaling
- Custom reusable error classes (`customAPIError`)
- Uses `asyncWrapper` to handle async/await errors elegantly
- Implements `validateTask` middleware for request validation

---

##  Author

**Omar Issa**  
📍 Backend Developer & Node.js Enthusiast  
📧 [omar.issa.contact@gmail.com](mailto:omar.issa.contact@gmail.com)  
🌐 [GitHub Profile](https://github.com/Omar-Issa1)

---

## 📜 License

This project is open source under the [MIT License](LICENSE).
