# 🚀 Dhvanimitra

**Dhvanimitra** is a full-stack mentorship and career guidance platform designed to empower students and professionals across India—especially in regions like Punjab—by offering real-time mentorship, audio/video sessions, and personalized career navigation tools.

---

## 🎯 Why Dhvanimitra?

Many talented individuals in India migrate abroad due to limited awareness of domestic opportunities. Dhvanimitra bridges this gap by connecting them with experienced Indian mentors who offer skill-based guidance and career advice through real-time chat, audio, and video interactions.

---

## ✨ Features Overview

* **🧠 Smart Mentor-Mentee Matching**
  Connects users based on interests, expertise, and availability.

* **💬 Real-Time Chat**
  Instant messaging using **Socket.io** for fast communication.

* **🎙️ Audio Call Integration**
  Seamless in-browser audio calls for low-bandwidth environments using **Zego Cloud**.

* **🎥 Video Conferencing**
  One-on-one sessions via **Zego Cloud API** with reliable video quality.

* **📊 Skill Assessment Engine**
  Personalized evaluations across 10+ domains to help mentees focus.

* **📝 Mentor Blogs & Posts**
  Mentors can write blogs using **Quill.js** to share experiences and advice.

* **📨 Automated Email Notifications**
  Session confirmations, reminders, and alerts via **Nodemailer**.

* **🔐 Secure Auth & Validations**
  JWT-based login, password hashing with bcrypt.js, and input validation via Zod.

* **🗂️ File Uploads with GridFS**
  Upload, store, and retrieve large files (like resumes, resources) securely.

* **📊 Custom Dashboards**
  Different views for mentors and mentees to navigate the platform efficiently.

---

## 🛠️ Tech Stack

| Component         | Technologies            |
| ----------------- | ----------------------- |
| Frontend          | React.js, Tailwind CSS  |
| Backend           | Node.js, Express.js     |
| Database          | MongoDB with Mongoose   |
| Real-Time         | Socket.io               |
| Audio/Video Calls | Zego Cloud API (WebRTC) |
| Authentication    | JWT, bcrypt.js, Zod     |
| File Handling     | Multer, GridFS          |
| Email Services    | Nodemailer              |

---

## 🚀 Quick Start

### Prerequisites

* Node.js v16+
* MongoDB URI (Atlas or local)
* Zego Cloud API credentials (App ID & Server Secret)
* Email credentials with SMTP/App Password access

### Installation

```bash
# Backend setup
cd server
npm install

# Setup environment
cp .env.example .env
# Fill in required keys

npm start
```

```bash
# Frontend setup
cd client
npm install
npm run dev
```

---

## 🔐 Environment Variables (server/.env)

```env
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=gmail
EMAIL_USER=youremail@example.com
EMAIL_APP_PASSWORD=your_app_password
ZEGO_APP_ID=your_zego_app_id
ZEGO_SERVER_SECRET=your_zego_server_secret
PORT=5000
NODE_ENV=development
```

---

## 🚦 How It Works

1. Users register/login and complete profiles
2. Mentees request sessions with mentors
3. System matches mentor availability and triggers booking
4. Chat + email notifications update both sides
5. Audio or video call is launched using Zego
6. Post-session, mentors can share blogs, jobs, and feedback

---

## 📁 Folder Structure

```
root/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── package.json
└── server/
    ├── controllers/
    ├── middlewares/
    ├── models/
    ├── routes/
    ├── utils/
    ├── .env.example
    └── package.json
```

---

## 🔮 Coming Soon

* Admin panel
* AI-based skill gap detection
* Group mentoring rooms
* Session recordings
* In-app calendar sync

---

