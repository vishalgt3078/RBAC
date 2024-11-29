# Node.js Role-Based Access Control (RBAC) Project

This project demonstrates implementing **role-based access control (RBAC)** using Node.js, Express.js, and MongoDB. It ensures secure **authentication** and **authorization** for users based on their roles (Admin, Manager, or User).

---

## Features

- **Authentication**:
  - User registration and secure login with hashed passwords.
- **Role-Based Authorization**:
  - Admins: Access all API routes.
  - Managers: Access Manager and User routes.
  - Users: Access only User-specific routes.
- **Secure Token-Based Authentication**:
  - JWT (JSON Web Token) for secure session management.
- **Database**:
  - MongoDB for user and role management.

---

## Project Structure

```plaintext
nodejs-rbac-project/
│
├── config/
│   └── db.js             # MongoDB connection setup
│
├── controllers/
│   ├── authController.js # Handles user registration and login
│   └── roleController.js # Handles role-specific APIs
│
├── middleware/
│   └── authMiddleware.js # JWT verification and role validation
│
├── models/
│   └── User.js           # User schema for MongoDB
│
├── routes/
│   ├── authRoutes.js     # Routes for authentication
│   └── userRoutes.js     # Routes for role-based APIs
│
├── .env                  # Environment variables
├── .gitignore            # Files to ignore in Git
├── package.json          # Project dependencies
├── package-lock.json     # Dependency lock file
└── server.js             # Main application entry point
```
## Technologies Used

- **Node.js**: A server-side JavaScript runtime for building scalable applications.
- **Express.js**: A lightweight framework for building APIs and web applications.
- **MongoDB**: A NoSQL database used for data storage.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **bcrypt.js**: A library for hashing passwords securely.
- **jsonwebtoken (JWT)**: A tool for secure, token-based authentication.
- **dotenv**: A module to manage environment variables securely.
