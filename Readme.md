Here is a **clean, professional README.md** you can directly copy and submit.

---

# Discover Dollar – Full Stack CRUD Application

## Project Overview

Discover Dollar is a full-stack web application built using:

* **Frontend:** Angular
* **Backend:** Node.js + Express
* **Database:** MongoDB
* **ORM:** Mongoose
* **Containerization:** Docker
* **Cloud Deployment:** Google Cloud Platform (Cloud Run + Cloud Build)

The application performs full CRUD operations (Create, Read, Update, Delete) on Tutorials.

---

# Project Architecture

```
Angular Frontend
        ↓
Node.js + Express Backend (REST API)
        ↓
MongoDB Database
```

Docker is used to containerize backend and database.

---

# Project Structure

```
Discover_Dollar_project1/
│
├── backend/
│   ├── app/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── routes/
│   ├── server.js
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── angular.json
│   └── package.json
│
└── README.md
```

---

# How to Run the Project Locally

## 🔹 1️. Run Backend + MongoDB using Docker

Inside the **backend** folder:

```bash
docker compose up --build
```

Backend runs at:

```
http://localhost:8080
```

Test API:

```
http://localhost:8080/api/tutorials
```

---

## 🔹 2. Run Frontend (Angular)

Inside the **frontend** folder:

```bash
npm install
ng serve
```

Frontend runs at:

```
http://localhost:4200
```

---

# 🔧 Environment Configuration

Create a `.env` file inside the backend folder:

```
MONGO_URL=mongodb://mongodb:27017/discover_dollar_db
```

---

---

# 🐳 Docker Setup

Backend and MongoDB are containerized using:

* Dockerfile
* docker-compose.yml

Command:

```bash
docker compose up --build
```

---

# Google Cloud Deployment Structure

The project follows a production-ready GCP deployment architecture:

## 🔹 Backend Deployment (Cloud Run via GitHub)

1. Push backend code to GitHub repository.
2. Connect GitHub repository to **Google Cloud Build**.
3. Create a **Cloud Build Trigger**:

   * Trigger on push to `main` branch.
   * Build Docker image.
   * Deploy automatically to **Cloud Run**.
4. Cloud Run hosts backend container.
5. Set environment variable `MONGO_URL` in Cloud Run settings.
6. Use MongoDB Atlas (recommended for cloud).

Architecture:

```
GitHub
   ↓
Cloud Build Trigger
   ↓
Build Docker Image
   ↓
Cloud Run (Backend API)
   ↓
MongoDB Atlas
```

---

## 🔹 Frontend Deployment (Cloud Run via GitHub)

1. Push frontend code to GitHub.
2. Create separate Cloud Build Trigger.
3. Build Angular production build.
4. Containerize frontend using Nginx.
5. Deploy to Cloud Run.

Architecture:

```
GitHub
   ↓
Cloud Build Trigger
   ↓
Build Angular App
   ↓
Containerize with Nginx
   ↓
Cloud Run (Frontend)
```

Frontend connects to deployed Cloud Run backend URL.

---

#  Production Architecture (Final)

```
Frontend (Cloud Run)
        ↓
Backend API (Cloud Run)
        ↓
MongoDB Atlas (Cloud Database)
```

---

#  Technologies Used

* Angular
* Node.js
* Express
* MongoDB
* Mongoose
* Docker
* Google Cloud Run
* Google Cloud Build
* GitHub

