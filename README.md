# 🚀 Task Manager Full Stack App

A scalable full-stack Task Manager application built using **Node.js, Express, MongoDB, and React** with JWT authentication and a clean UI.

---

## 📌 Features

### 🔐 Authentication

* User Registration & Login
* JWT-based authentication
* Password hashing using bcrypt

### 📋 Task Management

* Create tasks
* View all tasks
* Edit tasks
* Delete tasks
* Mark tasks as completed

### 🎨 Frontend

* Clean and responsive UI
* Login & Register pages
* Protected Dashboard
* Inline editing
* Toast notifications

### ⚙️ Backend

* RESTful API design
* Modular architecture
* Error handling & validation
* API versioning (`/api/v1`)

---

## 🛠️ Tech Stack

### Backend:

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcrypt

### Frontend:

* React.js
* Axios
* CSS / Tailwind

---

## 📁 Project Structure

```
backend/
frontend/
README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repo

```
git clone https://github.com/YOUR-USERNAME/Task-manager-app.git
cd Task-manager-app
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

## 🔗 API Endpoints

### Auth

* POST `/api/v1/auth/register`
* POST `/api/v1/auth/login`

### Tasks

* GET `/api/v1/tasks`
* POST `/api/v1/tasks`
* PUT `/api/v1/tasks/:id`
* DELETE `/api/v1/tasks/:id`

---

## 🔐 Authentication Flow

1. User logs in → receives JWT
2. Token stored in localStorage
3. Token sent in headers
4. Backend verifies token

---

## 🧪 API Testing

Swagger available at:

```
http://localhost:5000/api-docs
```

---

## 📈 Scalability

* Modular backend structure
* Can scale to microservices
* Redis caching support (optional)
* Docker-ready architecture

---

## 👩‍💻 Author

**Ruchika Sonkusare**

---

## ⭐ Project Status

✅ Completed
🚀 Ready for deployment

---

## 📌 Note

This project is built as part of a backend developer assignment demonstrating:

* API design
* Authentication
* Full-stack integration
