# Hyperwear

Hyperwear is a full-stack e-commerce web application built using the MERN stack.  
The application allows users to browse products, manage a shopping cart, authenticate users, and place orders.

---

## 🚀 Tech Stack

**Frontend**
- React
- CSS
- Create React App

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Deployment**
- Frontend: Vercel
- Backend: Railway

---

## 📁 Project Structure

hypewear/
├── backend/
│ ├── routes/
│ ├── server.js
│ ├── seedProducts.js
│ ├── package.json
│ └── .env.example
│
├── frontend/
│ ├── public/
│ ├── src/
│ ├── package.json
│ └── .env.production.example
│
└── README.md


---

## ⚙️ Setup Instructions

### Backend Setup
1. Navigate to the backend folder:
   cd backend

2. Copy the environment example file:
   cp .env.example .env

3. Add the following values in .env:
   MongoDB connection string
   JWT secret   

4. Install dependencies and start the server:
   npm install
   npm run dev

### Frontend Setup

1. cd frontend
2. cp .env.production.example .env.production
3. Add your backend API URL in .env.production
4. Install dependencies and start the app:
  npm install
  npm start

📜 Available Scripts (Frontend)
npm start

Runs the app in development mode.
Open http://localhost:3000
 to view it in the browser.

npm test

Runs the test runner in interactive watch mode.

npm run build

Builds the app for production into the build folder.

npm run eject

Ejects Create React App configuration (one-way operation).

🔐 Environment Variables

Sensitive information such as database credentials and secrets are not committed to the repository.

Use the provided example files:

backend/.env.example

frontend/.env.production.example



