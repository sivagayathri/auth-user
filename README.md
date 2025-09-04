# Auth Service API

A simple authentication service built with **Node.js, Express, MongoDB, and JWT**.  
The project demonstrates user **signup**, **login**, API documentation using **Swagger**, and containerization with **Docker** for easy setup.

---

## 📌 Features
- User Signup with basic validation
- User Login with JWT authentication
- Swagger UI documentation (`/api-docs`)
- Dockerized setup with MongoDB
- Mock CAPTCHA support for abuse prevention

---

## ⚙️ Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (local or Atlas)  
- **Authentication:** JWT (JSON Web Token)  
- **Documentation:** Swagger (swagger-ui-express, swagger-jsdoc)  
- **Containerization:** Docker & Docker Compose  
- **Testing:** Jest (basic test setup)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/sivagayathri/auth-user.git
cd auth-user
npm install

-----------------------------------------
## Run with docker
docker-compose up --build
test on ==>  http://localhost:3000/api-docs


for testing -gave jest 
npm test
------------------------------------------

 Signup API (POST)

http://localhost:3000/auth/signup
Request Body
{
  "name": "John Doe",
  "email": "test@example.com",
  "password": "mypassword123",
  "captcha": "1234"
}
Responses
201 → User registered successfully
409 → Email already exists (same request made again)
400 → Invalid captcha

-------------------------------------------
 Login API (POST)

http://localhost:3000/auth/login
Request Body
{
  "email": "test@example.com",
  "password": "mypassword123"
}

Responses
200	Login successful, JWT returned	
401	Unauthorized (invalid credentials)