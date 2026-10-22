# 🍽️ FOODY — MERN Restaurant Website

A modern, responsive restaurant website built with the **MERN stack**, featuring an elegant user interface, table reservation functionality, a REST API, and MongoDB Atlas database integration.

🌐 **Live Demo:** https://foody-mern-restaurant.vercel.app

🚀 **Frontend:** [Vercel](https://vercel.com/)
⚙️ **Backend:** [Render](https://render.com/)
🗄️ **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 📌 Overview

**FOODY** is a full-stack restaurant website designed to deliver a smooth and responsive user experience across desktop, tablet, and mobile devices.

The application provides restaurant information and a table reservation form. Users can submit their reservation details through the frontend, which communicates with a Node.js and Express.js backend API. Reservation data is intended to be stored persistently in MongoDB Atlas.

The project demonstrates full-stack development concepts, including REST API integration, database connectivity, environment configuration, and cloud deployment.

## ✨ Features

* 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
* 🍽️ **Restaurant Website UI** — Clean, modern, and user-friendly interface.
* 📅 **Table Reservations** — Form for submitting reservation details.
* 🔗 **REST API Integration** — Frontend communicates with the backend using Axios.
* 🗄️ **MongoDB Atlas Integration** — Cloud database support for reservation data.
* ⚛️ **Component-Based Architecture** — Reusable React components.
* 🔔 **Toast Notifications** — Feedback for reservation requests.
* 🧭 **Client-Side Routing** — Navigation using React Router.
* ☁️ **Cloud Deployment** — Frontend hosted on Vercel and backend hosted on Render.

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript (ES Modules)
* HTML5
* CSS3
* Tailwind CSS
* Axios
* React Router
* React Hot Toast
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* dotenv

### Database

* MongoDB Atlas

### Tools & Deployment

* Git
* GitHub
* Visual Studio Code
* Vercel
* Render

## 🌐 Live Application

| Service                          | URL                                                          |
| -------------------------------- | ------------------------------------------------------------ |
| **Live Website**                 | [FOODY Restaurant](https://foody-mern-restaurant.vercel.app) |
| **Backend Service**              | [Render Backend](https://foody-mern-restaurant.onrender.com) |
| **Backend Reservation Endpoint** | `/api/v1/baharRoute/send`                                    |

> **Note:** Opening the backend root URL may display `Cannot GET /` because the application does not necessarily define a root route. This alone does not indicate that the backend is unavailable. The reservation endpoint is designed to receive POST requests.

## 📂 Project Structure

```text
FOODY-MERN-Restaurant/
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── Error/
│   ├── Models/
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
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

*The directory tree may vary slightly depending on the current implementation.*

## ⚙️ Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm
* Git
* A [MongoDB Atlas](https://www.mongodb.com/atlas) account

### 1. Clone the Repository

```bash
git clone https://github.com/Habibullah-Bahar/FOODY-MERN-Restaurant.git
```

Navigate to the project directory:

```bash
cd FOODY-MERN-Restaurant
```

### 2. Install Frontend Dependencies

```bash
cd Frontend
npm install
```

### 3. Configure the Frontend

Create a `.env.production` file inside the `Frontend` directory:

```env
VITE_API_URL=https://foody-mern-restaurant.onrender.com
```

If the frontend code uses `import.meta.env.VITE_API_URL`, this variable will provide the deployed backend URL.

For local development, create a `.env` file in `Frontend` with the appropriate local backend URL, if needed:

```env
VITE_API_URL=http://localhost:4000
```

**Important:** The frontend must actually reference `import.meta.env.VITE_API_URL` in its API requests for these variables to take effect. If the API URL is hardcoded, update the code accordingly.

Start the frontend development server:

```bash
npm run dev
```

Vite will display a local development URL, usually:

```text
http://localhost:5173
```

### 4. Configure the Backend

Open a separate terminal:

```bash
cd Backend
npm install
```

Configure the backend environment variables according to the existing backend code.

For example, if the application uses `MONGO_URI`:

```env
MONGO_URI=your_mongodb_atlas_connection_string
FRONTEND_URL=http://localhost:5173
```

Replace the example connection string with your own MongoDB Atlas URI.

> The backend's current implementation loads configuration from `./config/config.env`. If that is still the case, place the local configuration file at the expected path or update the configuration loading logic to use your chosen `.env` location.

### 5. Start the Backend

Run the command defined in your backend `package.json`.

If a development script is configured:

```bash
npm run dev
```

Otherwise, start the server using the actual entry file:

```bash
node server.js
```

The server should start on the configured port, or use port `4000` if the application falls back to that default.

### 6. Run the Application

With the backend and frontend running in separate terminals, open:

```text
http://localhost:5173
```

You can now explore the website and test the reservation form.

## 🔐 Environment Variables

Keep environment variables out of source control.

| Variable       | Application | Purpose                                                                                         |
| -------------- | ----------- | ----------------------------------------------------------------------------------------------- |
| `MONGO_URI`    | Backend     | MongoDB Atlas connection string, if this is the variable used by the database connection module |
| `FRONTEND_URL` | Backend     | Allowed frontend origin for CORS                                                                |
| `VITE_API_URL` | Frontend    | Backend API base URL, if referenced by the frontend code                                        |
| `PORT`         | Backend     | HTTP server port; Render provides this automatically in deployment                              |

**Security best practices:**

* Never commit database credentials or secret keys.
* Keep `.env` and other secret configuration files in `.gitignore`.
* Configure production environment variables through the hosting provider's dashboard.
* Never put private database credentials in frontend environment variables. Vite exposes variables prefixed with `VITE_` to client-side code.

## 🚀 Deployment

### Frontend — Vercel

The frontend is deployed on Vercel.

Recommended project configuration:

| Setting          | Value           |
| ---------------- | --------------- |
| Root Directory   | `Frontend`      |
| Framework Preset | Vite            |
| Build Command    | `npm run build` |
| Output Directory | `dist`          |
| Install Command  | `npm install`   |

Configure `VITE_API_URL` in the Vercel project settings if the frontend uses that variable. Redeploy after changing environment variables.

### Backend — Render

The backend is deployed on Render.

Configure the following:

* **Root Directory:** `Backend`
* **Build Command:** `npm install`
* **Start Command:** `npm start`, if configured to start the production server
* **Environment Variables:** Add the MongoDB connection string and production frontend URL.

Make sure the start command matches the actual backend `package.json` scripts.

### Database — MongoDB Atlas

To enable database connectivity:

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. Configure network access appropriately.
4. Add the Atlas connection string to the backend's environment variables.
5. Confirm that the database connection succeeds and reservation documents are being created.

### Production Checklist

* [ ] Frontend is accessible over HTTPS.
* [ ] Backend service is running.
* [ ] MongoDB Atlas connection is successful.
* [ ] CORS permits the deployed frontend origin.
* [ ] Reservation requests reach the production backend.
* [ ] Successful reservations create database documents.
* [ ] Error responses are handled appropriately.
* [ ] Environment variables and database credentials are kept private.

## 🧪 Testing

Manually test the following scenarios before considering the deployment complete:

* Open the website on desktop and mobile.
* Navigate through the available sections.
* Submit a valid reservation.
* Confirm that success or error notifications appear correctly.
* Verify that successful reservation data is stored in MongoDB Atlas.
* Test the application when the backend is unavailable.
* Check the browser console and Render logs for errors.

## 🔮 Future Improvements

Potential enhancements include:

* User authentication and authorization.
* Online food ordering.
* Shopping cart and checkout functionality.
* Payment gateway integration.
* Restaurant administration dashboard.
* Reservation management and status tracking.
* Stronger form validation.
* Automated testing.
* Improved accessibility and performance monitoring.

## 👨‍💻 Author

**Habibullah Bahar**
Computer Science and Engineering Student
Mawlana Bhashani Science and Technology University (MBSTU)

## 📄 License

This project is intended for learning, development, and portfolio demonstration.

If you plan to distribute the project, consider adding an explicit open-source license such as the MIT License.

---

⭐ **If you find this project useful, consider giving the repository a star!**
