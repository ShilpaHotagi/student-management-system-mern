# 🎓 Student Management System (MERN)

A full-stack web application to manage student records using the MERN stack.

---
## 🚀 Features

* ➕ Create Student / Notes
* 📖 View Student Records
* ❌ Delete Records

---
## 🛠️ Tech Stack

* **Frontend:** React
* **Backend:** Node.js, Express
* **Database:** MongoDB Atlas

---
## ⚙️ Setup Instructions

### 🔹 Prerequisites

* Node.js installed
* MongoDB Atlas account
---
### 🔹 Backend Setup
```bash
mkdir MERN
cd MERN
mkdir backend
cd backend
npm init -y
npm install express mongoose cors dotenv
npm install nodemon --save-dev
```

Create:
```
backend/server.js
```

Add your backend code and MongoDB connection string.

Run backend:
```bash
npx nodemon server.js
```
---
### 🔹 Frontend Setup
```bash
cd MERN
npx create-react-app frontend
cd frontend
npm install axios
```

Replace:
```
src/App.js
```

Run frontend:
```bash
npm start
```
---
## 🔗 Application URLs

* Backend → http://localhost:5000
* Frontend → http://localhost:3000
---
