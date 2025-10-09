# 🧾 Task Manager App

A simple and clean **Task Manager API** built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
You can create, read, update, and delete tasks easily.

---

## 🚀 Features
- Create, read, update, and delete tasks (CRUD)
- Data validation with Mongoose and Joi
- Custom error handling using middleware
- Async/await wrapper to simplify error handling
- RESTful API structure
- Environment variables using `.env`

---

## 🧠 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Joi** for validation
- **dotenv** for environment config

---

## 📂 Project Structure

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

````

---

## ⚙️ Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Omar-Issa1/Task-Manger-App.git
````

2. Navigate into the folder:

   ```bash
   cd Task-Manger-App
   ````

3. Install dependencies:

   ```bash
   npm install
   ````

4. Add a `.env` file with your settings:

   ```
   PORT=6000
   MONGO_URI=your_mongodb_connection_string
   ````

5. Start the server:

   ```bash
   npm start
   ````

   The app will run at:
   👉 [http://localhost:6000/api/v1/tasks](http://localhost:6000/api/v1/tasks)

---


## Example Endpoints
| Method   | Endpoint            | Description       |
| -------- | ------------------- | ----------------- |
| `GET`    | `/api/v1/tasks`     | Get all tasks     |
| `POST`   | `/api/v1/tasks`     | Create a new task |
| `GET`    | `/api/v1/tasks/:id` | Get a single task |
| `PATCH`  | `/api/v1/tasks/:id` | Update a task     |
| `DELETE` | `/api/v1/tasks/:id` | Delete a task     |

## 🧑‍💻 Author

**Omar Issa**
📍 Developer & Backend Enthusiast
📧 [omar.issa.contact@gmail.com
](mailto:omar.issa.contact@gmail.com
)
🌐 [GitHub Profile](https://github.com/Omar-Issa1)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

```

---
   

   
