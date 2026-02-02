# 🛒 Vibe Commerce — Mock E-Com Cart

A production-ready **full-stack shopping cart application** built with:

- **React + Vite** (Frontend)
- **Tailwind CSS 3.4.17**
- **Zustand** for global cart store
- **Node.js + Express (ES Modules)**
- **MongoDB Atlas (Mongoose v8)**
- **REST APIs**
- **Seed script for sample products**

This project demonstrates core e-commerce workflows:  
✅ Browse products  
✅ Add/remove cart items  
✅ Update quantity  
✅ Mock checkout (no real payments)  
✅ Responsive UI  
✅ Persistent backend cart logic

---

# 🚀 Live Features

### ✅ Products Page
- Loads products from MongoDB (or fallback JSON)
- Add to Cart button
- Image support

### ✅ Cart Page
- Update quantity
- Remove items
- See calculated total in real-time

### ✅ Checkout
- Enter name & email
- Get a dynamic “Receipt Modal” with:
  - Items summary
  - Total amount
  - Timestamp
  - Auto-clear cart

---

# 🗂 Project Folder Structure

```bash
mock-ecom-cart/
│
├── client/ # React + Vite frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── store/
│ │ └── services/
│ ├── index.html
│ ├── vite.config.js
│ └── tailwind.config.js
│
└── server/ # Express backend (ESM)
├── src/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ ├── config/
│ └── utils/
├── server.js
├── package.json
└── .env
```


---

# ✅ **Frontend Setup (React + Vite)**

### 1️⃣ Go into the client folder:
```bash
cd client
```
### 2️⃣ Install dependencies:
```bash
npm install
```
### 3️⃣ Create .env:
```bash
VITE_API_URL=http://localhost:5000
```
### 4️⃣ Start development server:
```bash
npm run dev
```
### ✅ Frontend runs at:
```bash
http://localhost:5173
```

---

# ✅ **Backend Setup (Express + MongoDB)**
### 1️⃣ Go into the server folder:
```bash
cd server

### 2️⃣ Install dependencies:
```bash
npm install
```

### 3️⃣ Create .env:
```bash
PORT=5000
MONGO_URI=<your MongoDB Atlas URI>
NODE_ENV=development
```

### 4️⃣ Seed sample products (optional but recommended):
```bash
npm run seed
```

### 5️⃣ Start backend:
```bash
npm run dev
```

### ✅ Backend runs at:
```bash
http://localhost:5000
```
---

# ✅ **Environment Variables (Required)**
### Frontend /client/.env
```bash
VITE_API_URL=http://localhost:5000
```

### Backend /server/.env
```bash
PORT=5000
MONGO_URI=your_atlas_uri_here
NODE_ENV=development
```

---

# ✅ API Endpoint Overview

## ✅ Products
| Method | Endpoint        | Description            |
|--------|-----------------|------------------------|
| GET    | /api/products   | Fetch products list    |
| POST   | /api/products   | Create product (seed)  |

## ✅ Cart
| Method | Endpoint          | Description                 |
|--------|-------------------|-----------------------------|
| GET    | /api/cart         | Get cart items + total      |
| POST   | /api/cart         | Add item to cart            |
| PUT    | /api/cart/:id     | Update cart item quantity   |
| DELETE | /api/cart/:id     | Remove cart item            |

## ✅ Checkout
| Method | Endpoint        | Description                     |
|--------|-----------------|---------------------------------|
| POST   | /api/checkout   | Mock checkout, returns receipt  |

## ✅ Health Check
| Method | Endpoint  | Description    |
|--------|-----------|----------------|
| GET    | /health   | API status     |


---

# ✅ **Tech Stack Summary**
### Frontend

- React 18 (Hooks)

- Vite (fast dev, HMR)

- Tailwind CSS 3.4.17

- Zustand (global state management)

- Axios (API calls)

- React Router DOM (routing)

### Backend

- Node.js + Express (ES Modules)

- MongoDB Atlas

- Mongoose v8 (schema + ODM)

- Morgan (logging)

- CORS

- dotenv

---

# ✅ Screenshots
<img width="1891" height="872" alt="Screenshot 2025-11-08 214536" src="https://github.com/user-attachments/assets/9bc03767-59eb-455c-8294-c5bee6f6bf18" />
<img width="1909" height="870" alt="Screenshot 2025-11-08 214624" src="https://github.com/user-attachments/assets/e146a282-a39f-44da-856b-316811855795" />
<img width="1919" height="871" alt="Screenshot 2025-11-08 214643" src="https://github.com/user-attachments/assets/8c73be7e-70a9-4222-aaf4-ee365a67e7a7" />
<img width="1919" height="870" alt="Screenshot 2025-11-08 214653" src="https://github.com/user-attachments/assets/8986c3ca-ae9d-4f10-933b-d50f2d4f34ca" />

---
