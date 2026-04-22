# 🚀 Full Stack Task Manager (Backend + Frontend)

A scalable full-stack application built with **Node.js, Express, MongoDB, and React**.
This project demonstrates secure authentication, role-based access, and CRUD operations with a clean UI.

---

## 📌 Features

### 🔐 Authentication & Security

* User Registration & Login
* Password hashing using bcrypt
* JWT-based authentication
* Protected routes (frontend + backend)

### 👥 Role-Based Access

* User & Admin roles supported
* Secure API access using middleware

### 📦 Task Management (CRUD)

* Create tasks
* View all tasks
* Update tasks (edit & status toggle)
* Delete tasks

### 🎨 Frontend (React)

* Clean and responsive UI
* Login & Register pages
* Protected dashboard
* Inline editing & task actions
* Toast notifications for better UX

### ⚙️ Backend (Node.js + Express)

* RESTful API design
* Modular structure
* Error handling & validation
* API versioning (`/api/v1`)

---

## 🛠️ Tech Stack

### Backend:

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (Authentication)
* bcrypt (Password hashing)

### Frontend:

* React.js
* Axios
* CSS (Custom styling)
* React Hot Toast

---

## 📁 Project Structure

```
project-root/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── components/
│   │   └── App.js
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone <your-repo-link>
cd project-root
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
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
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

* `POST /api/v1/auth/register`
* `POST /api/v1/auth/login`

### Tasks

* `GET /api/v1/tasks`
* `POST /api/v1/tasks`
* `PUT /api/v1/tasks/:id`
* `DELETE /api/v1/tasks/:id`

---

## 🔐 Authentication Flow

1. User logs in → receives JWT token
2. Token stored in localStorage
3. Token sent in headers for protected routes
4. Backend verifies token via middleware

---

## 🧪 API Testing

* Swagger UI available at:

  ```
  http://localhost:5000/api-docs
  ```
* Or use Postman collection

---

## 🚀 Deployment (Optional)

* Frontend: Vercel
* Backend: Render / Railway

---

## 📈 Scalability Notes

* Modular architecture for easy scaling
* Can be extended to microservices
* Add Redis for caching
* Load balancing with Nginx
* Docker support can be added

---

## ✨ Future Improvements

* Admin dashboard
* Pagination & filtering
* Notifications system
* Dark mode UI
* Unit & integration testing

---

## 👩‍💻 Author

**Ruchika Sonkusare**

---

## 📌 Conclusion

This project demonstrates:

* Clean backend architecture
* Secure authentication practices
* Functional frontend integration
* Scalable system design

---

