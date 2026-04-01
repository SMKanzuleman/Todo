# 📝 Todo App

A full-stack Todo application built with **React**, **Node.js**, **Express**, and **MongoDB Atlas**. Manage your daily tasks with categories, completion tracking, and a clean modern UI.

🔗 **Live Demo:** [https://todo-frontend-plum-kappa.vercel.app](https://todo-frontend-plum-kappa.vercel.app)  
🔗 **Backend API:** [https://todo-backend-beta-nine.vercel.app](https://todo-backend-beta-nine.vercel.app)

---

## 📸 Preview



---

## 🚀 Features

- ✅ Create tasks with custom categories (Task, Productivity, Health, Study, Coding, Personal)
- ✅ Mark tasks as completed / uncompleted
- ✅ Delete individual tasks
- ✅ Delete all tasks at once
- ✅ Persistent storage with MongoDB Atlas
- ✅ Toast notifications for user feedback
- ✅ Fully responsive design (mobile + desktop)

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI Framework |
| [Vite](https://vitejs.dev/) | Build Tool |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [Axios](https://axios-http.com/) | HTTP Client |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Notifications |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons |

### Backend
| Technology | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) | Runtime |
| [Express.js](https://expressjs.com/) | Web Framework |
| [Mongoose](https://mongoosejs.com/) | ODM for MongoDB |
| [MongoDB Atlas](https://www.mongodb.com/atlas) | Cloud Database |
| [dotenv](https://www.npmjs.com/package/dotenv) | Environment Variables |
| [CORS](https://www.npmjs.com/package/cors) | Cross-Origin Requests |

---

## 📁 Project Structure

```
Todo/
├── backend/
│   ├── controllers/
│   │   └── task.controllers.js
│   ├── db/
│   │   └── db.js
│   ├── models/
│   │   └── task.model.js
│   ├── routes/
│   │   └── task.route.js
│   ├── .env
│   ├── vercel.json
│   └── server.js
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── App.css
    │   └── index.css
    ├── .env
    ├── index.html
    └── vite.config.js
```

---

## ⚙️ API Endpoints

Base URL: `https://todo-backend-beta-nine.vercel.app`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/tasks` | Get all tasks |
| `GET` | `/tasks/:id` | Get a single task |
| `POST` | `/tasks` | Create a new task |
| `PUT` | `/tasks/:id` | Update a task |
| `DELETE` | `/tasks/:id` | Delete a single task |
| `DELETE` | `/tasks` | Delete all tasks |

### Example Request Body (POST /tasks)
```json
{
  "task": "Complete my project",
  "type": "Coding"
}
```

---

## 🏃 Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [MongoDB Atlas](https://www.mongodb.com/atlas) account or local MongoDB

### 1. Clone the repository
```bash
git clone https://github.com/SMKanzuleman/Todo.git
cd Todo
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
BACKEND_PORT=4000
MONGODB_URL=your_mongodb_connection_string
```

Start the backend:
```bash
nodemon server.js
```

### 3. Setup Frontend
```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` folder:
```env
VITE_API_URL=http://localhost:4000/tasks
```

Start the frontend:
```bash
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 🌐 Deployment

| Service | Platform | URL |
|---|---|---|
| Frontend | [Vercel](https://vercel.com) | [todo-frontend-plum-kappa.vercel.app](https://todo-frontend-plum-kappa.vercel.app) |
| Backend | [Vercel](https://vercel.com) | [todo-backend-beta-nine.vercel.app](https://todo-backend-beta-nine.vercel.app) |
| Database | [MongoDB Atlas](https://www.mongodb.com/atlas) | Cloud Hosted |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Syed M. Kanzuleman**  
GitHub: [@SMKanzuleman](https://github.com/SMKanzuleman)
