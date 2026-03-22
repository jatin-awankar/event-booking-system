# Event Booking System

## 🚀 Overview

Mini Event Management System where users can browse events and book tickets.
[Live](https://event-booking-system-hwj8.onrender.com/)

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- Joi
- Swagger

## ⚙️ Setup Instructions

### 1. Clone repo

git clone https://github.com/jatin-awankar/event-booking-system.git

### 2. Install dependencies

npm install

### 3. Setup environment

Create `.env` file:

PORT=5000  
DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=yourpassword  
DB_NAME=event_booking

### 4. Setup database

Run `database/schema.sql` in MySQL

### 5. Run server

npm run dev

---

## 🔐 Security Note

Environment variables are not committed to the repository.
Please create a `.env` file using the provided template.

---

## 📌 API Endpoints

- GET /events
- POST /events
- POST /bookings
- GET /users/:id/bookings
- POST /events/:id/attendance

---

## ⚠️ Key Features

- Transaction-safe booking system
- Prevents race conditions using `SELECT ... FOR UPDATE`
- Unique booking codes
- Attendance tracking
- Input validation using Joi

---

## 📄 API Docs

Available at:
http://localhost:5000/docs

---

## 🧠 Assumptions

- One booking = one ticket
- No authentication implemented
- Events are public

---

## 🔥 Improvements (Future Scope)

- Authentication (JWT)
- Multi-ticket booking
- QR-based attendance
- Caching using Redis
