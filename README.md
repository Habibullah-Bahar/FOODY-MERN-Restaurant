# 🍽️ FOODY | MERN Restaurant Website

A modern and responsive restaurant website built with React and Vite on the frontend, Node.js and Express.js on the backend, and MongoDB Atlas for database management.

## 📌 About The Project

**FOODY** is a restaurant website designed to provide users with an attractive interface for exploring restaurant information and submitting table reservation requests.

The project combines a responsive frontend with a backend API that stores reservation form data in MongoDB Atlas.

## ✨ Features

* Responsive restaurant website UI
* Modern and user-friendly design
* Restaurant information and menu sections
* Table reservation form
* Backend API for handling reservation requests
* MongoDB Atlas database integration
* Reservation data persistence
* React component-based architecture

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Nodemon (development)

### Development Tools

* Git
* GitHub
* Visual Studio Code

## 📂 Project Structure

```text
FOODY-MERN-Restaurant/
├── Backend/
│   ├── Error/
│   ├── Models/
│   ├── controllers/
│   ├── database/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git
* A MongoDB Atlas account

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/FOODY-MERN-Restaurant.git
```

Navigate to the project directory:

```bash
cd FOODY-MERN-Restaurant
```

### 2. Set Up the Frontend

Open a terminal and run:

```bash
cd Frontend
npm install
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

### 3. Set Up the Backend

Open another terminal:

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` directory and configure your environment variables.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

Replace the example MongoDB connection string with your own credentials.

Start the backend in development mode:

```bash
npm run dev
```

If your `package.json` does not define a `dev` script, configure it to run your actual server entry file.

## 🔐 Environment Variables

The backend requires environment variables for database connectivity and server configuration.

| Variable    | Description                     |
| ----------- | ------------------------------- |
| `PORT`      | Backend server port             |
| `MONGO_URI` | MongoDB Atlas connection string |

**Security:** Never commit your `.env` file or expose your database credentials publicly.

## 🚀 Deployment

The project can be deployed using the following services:

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

Deployment URLs will be added after the services are deployed successfully.

## 🔮 Future Improvements

* User authentication and authorization
* Online food ordering
* Shopping cart functionality
* Payment gateway integration
* Restaurant admin dashboard
* Reservation management
* Improved form validation and error handling

## 👨‍💻 Author

**Habibullah Bahar**

Computer Science and Engineering Student
Mawlana Bhashani Science and Technology University (MBSTU)

## 📄 License

This project is available for learning and portfolio purposes.
