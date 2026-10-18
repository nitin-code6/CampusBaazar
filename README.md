# CampusBaazar - The Campus-Exclusive Marketplace

CampusBaazar is a community-driven marketplace built for college students to easily buy and sell secondhand essentials like books, gadgets, and hostel supplies within their campus. Created with React, Node.js, Express, and MongoDB, it eliminates shipping fees and wait times by facilitating direct, peer-to-peer exchanges.

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/nitin-code6/CampusBaazar.git)
[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)

---

## 🚀 Core Features

- 🔐 **Secure Authentication**: Robust user registration and login system with JWT and cookie-based authentication.
- 📦 **Campus Listings**: Effortlessly list products for sale, including detailed descriptions, images, and category tagging.
- 📸 **Cloud-Powered Hosting**: High-quality image storage using **Cloudinary** and **Multer** for seamless product uploads.
- 🛠️ **Multi-Role User Control**:
    - **Users**: Browse and purchase from other students.
    - **Admins/Sellers**: Manage listings and track orders.
    - **SuperAdmins**: Comprehensive control over the entire user database and platform health.
- 📂 **Filtering & Search**: Rapidly find items with real-time text-based searching and category filtering (Electronics, Instruments, Stationery, etc.).
- 🛍️ **Order Management**: Integrated checkout system to track purchases and seller requests.
- 🎨 **Modern UI**: Professionally designed with **Tailwind CSS 4.0**, vibrant gradients, and glassmorphic aesthetics.

---

## 🛠️ Technical Stack

### **Frontend**
- **Library**: React 19
- **Build Tool**: Vite 7
- **State Management**: Redux Toolkit
- **Navigation**: React Router (v7)
- **Styling**: Tailwind CSS 4.0
- **Icons**: Lucide Icons
- **Forms**: React Hook Form with Zod validation

### **Backend**
- **Runtime**: Node.js
- **Server**: Express (v5.2)
- **Database**: MongoDB with Mongoose ODM
- **Cache**: Redis
- **Storage**: Cloudinary Cloud-based Hosting
- **Security**: JWT, Bcrypt, Validator

---

## 📂 Project Structure

```text
CampusBaazar/
├── Frontend/      # React Vite application with Redux and Tailwind
├── Backened/      # Express Node.js application (API, Database, Middleware)
└── README.md      # Project overview and documentation
```

---

## ⚙️ Setup & Installation

### 1. Prerequisites
- **Node.js** (v18+)
- **MongoDB** instance (Atlas or local)
- **Redis** server
- **Cloudinary Account** (for image hosting)

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd Backened
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `/Backened` with these keys:
   ```env
   PORT=8000
   MONGO_URI=YOUR_MONGO_DB_CONNECTION_STRING
   JWT_SECRET=YOUR_SECRET_KEY
   CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
   CLOUDINARY_API_KEY=YOUR_API_KEY
   CLOUDINARY_API_SECRET=YOUR_API_SECRET
   REDIS_URL=YOUR_REDIS_URL
   EMAIL_USER=nitbit710@gmail.com
   EMAIL_PASS=YOUR_GMAIL_APP_PASSWORD
   ```
4. Start the server (Dev Mode):
   ```bash
   npm run start
   ```

### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application at the URL provided in the terminal (usually `http://localhost:5173`).

---

## 👨‍💻 Author

**Nitin Kumar**
- GitHub: [@nitin-code6](https://github.com/nitin-code6)
- Repository: [CampusBaazar](https://github.com/nitin-code6/CampusBaazar.git)
- Email: [nitbit710@gmail.com](mailto:nitbit710@gmail.com)

---

## 📈 Future Enhancements
- [ ] In-app direct messaging for buyers and sellers.
- [ ] Real-time price tracking and negotiation.
- [ ] Campus event integration and alerts.
- [ ] Expanded AI-based product recommendations.

---

## ⚖️ License
This project is licensed under the ISC License.
