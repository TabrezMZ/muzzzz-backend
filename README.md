# 🎧 Muzzzz Backend API

The **Muzzzz Backend** is a RESTful API server built with **Node.js**, **Express**, and **MongoDB**, supporting JWT-based authentication, playlist and song management, and Spotify integration support.

> 🔗 **Live API**: [https://muzzzz-backend.onrender.com/](https://muzzzz-backend.onrender.com/)

---

## 📷 Screenshots (Frontend Integration Preview)

> *(Only for visual reference — UI lives in frontend project)*

### 🖥 Web View

<img width="100%" height="500" alt="image" src="https://github.com/user-attachments/assets/25b09e9a-5b99-47a4-90b6-5847a38464ec" />

<img width="100%" height="500" alt="image" src="https://github.com/user-attachments/assets/8eb3036d-d103-4167-af5c-110806de26c2" />


### 📱 Mobile View

<img width="466" height="826" alt="image" src="https://github.com/user-attachments/assets/5a2c7534-6c04-4958-a34b-44b0f8c550d6" />

<img width="468" height="815" alt="image" src="https://github.com/user-attachments/assets/a0ac778a-07b9-4c82-a423-cf63434c97da" />

---

## 🧩 Features

- ✅ JWT-based user authentication
- ✅ Secure user registration and login
- ✅ CRUD APIs for playlists
- ✅ Songs embedded inside playlist documents
- ✅ Integration-ready for Spotify (song metadata)
- ✅ CORS enabled for frontend connection
- ✅ Environment-based configuration
- ✅ Error-handling middleware
- ✅ Modular code structure

---

## ⚙️ Tech Stack

| Tech       | Description                      |
|------------|----------------------------------|
| Node.js    | JavaScript runtime               |
| Express.js | Web framework                    |
| MongoDB    | NoSQL database (via Mongoose)    |
| JWT        | Token-based authentication       |
| Dotenv     | Environment config management    |
| Render     | Hosting (free tier)              |

---

## 📦 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/TabrezMZ/muzzzz-backend.git
cd muzzzz-backend

# 2. Install dependencies
npm install

# 3. Setup your environment variables
cp .env
# Edit .env with your credentials

# 4. Run the server
npm run dev
