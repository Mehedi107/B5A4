# 📚 Minimal Library Management System

A clean and functional web application to manage library books and borrowing, built with React, TypeScript, Redux Toolkit Query, and Express.js. Designed as a simple public-facing system to perform essential operations like viewing, adding, updating, deleting, and borrowing books.

---

## 🚀 Live Demo

- **Frontend (Vercel)**: [https://library-with-redux-client.vercel.app](https://your-frontend.vercel.app)
- **Backend (Vercel / Railway / Render)**: [https://library-with-redux-server.vercel.app](https://your-backend.vercel.app/api)

---

## 🛠️ Features

### ✅ Book Management

- View all books in a table with search-ready columns.
- Add new books with fields: title, author, genre, ISBN, description, and available copies.
- Edit existing book information.
- Delete a book with confirmation (uses `AlertDialog`).
- Visual status indicator for availability (`Available` / `Unavailable`).

### ✅ Borrowing System

- Borrow books with quantity and due date validation.
- Quantity cannot exceed available copies.
- Auto-updates availability when copies reach zero.

### ✅ Borrow Summary

- Aggregated summary showing total quantity borrowed per book.
- Columns: Title, ISBN, Quantity.

---

## 📄 Pages

| Path              | Description                         |
| ----------------- | ----------------------------------- |
| `/books`          | View all books with actions         |
| `/create-book`    | Add a new book                      |
| `/edit-book/:id`  | Edit existing book                  |
| `/books/:id`      | View detailed information of a book |
| `/borrow/:bookId` | Borrow a selected book              |
| `/borrow-summary` | Summary of borrowed books           |

---

## 🧱 Tech Stack

### Frontend

- **React + TypeScript**
- **Redux Toolkit Query (RTK Query)** – for API state
- **Tailwind CSS + ShadCN UI** – for responsive, beautiful components
- **Lucide Icons** – for consistent, lightweight icons
- **React Router DOM v6** – for routing

### Backend

- **Node.js + Express.js**
- **MongoDB + Mongoose**
- Modular MVC pattern with:
  - Controllers
  - Routes
  - Models
  - Services
  - Middleware

---

## 💡 Bonus Features

| Feature                  | Status                         |
| ------------------------ | ------------------------------ |
| ✅ Optimistic UI Updates | ✔️ Implemented for Delete Book |
| ✅ Toast Notifications   | ✔️ Success/error feedback      |
| ✅ Responsive Layout     | ✔️ Mobile-first design         |
| ✅ Type-safe Forms       | ✔️ Using TypeScript throughout |

---

## 🧪 Installation (Locally)

### 🖥️ Prerequisites

- Node.js
- MongoDB (local or remote URI)
- PNPM / NPM / Yarn

### 📦 Backend Setup

```bash
cd server
pnpm install
cp .env.example .env
# Set your MONGODB_URI in .env
pnpm dev
```
