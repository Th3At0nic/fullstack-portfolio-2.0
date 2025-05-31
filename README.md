# Fullstack Portfolio Dashboard

A full-featured portfolio dashboard built with a modern fullstack tech stack. This dashboard allows me to manage and update all portfolio sections dynamically — including projects, blogs, skills, experience, resume, certificates, and more — with secure authentication and role-based access control.

---

## ✨ Features

- 🔐 **Admin Login** with JWT Auth (access + refresh token)
- 📄 **Dynamic Bio, Description, Avatar, and Location**
- 🧠 **Skills** — Add, edit, and delete technologies I’ve mastered
- 🧰 **Projects** — Add projects with multi-tech stack selection
- ✍️ **Blogs** — Write and manage blogs with category support
- 💼 **Experience** — Add current/past work with time ranges
- 🎓 **Courses & Certificates** — Add certified learning milestones
- 📃 **Resume** — Upload and manage my current CV
- 📊 **Responsive UI** — Built with Ant Design and Tailwind CSS
- 🔄 **Realtime Updates** — All changes reflected instantly

---

## 🛠️ Tech Stack

### Frontend

- React + Vite
- TypeScript
- Ant Design
- Tailwind CSS
- React Hook Form + Zod
- Axios + JWT Auth

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- Zod for validation
- Cookie-based Auth (Refresh Token Strategy)

---

## 🔒 Authentication

- Secure login with encrypted password storage
- Refresh token stored in `HttpOnly` cookies
- Access token sent in headers for authorized requests
- Role-based (Admin-only) dashboard access

---

## 🧪 API Testing

- All backend APIs are tested using **Postman**
- You can register and login, and manage each entity via RESTful APIs

---
