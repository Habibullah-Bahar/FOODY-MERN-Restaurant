import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbconnection from "./database/dbConnection.js";
import { errorMiddleware } from "./Error/Error.js";
import ReservationRouter from "./routes/reservationRoute.js";

const app = express();

dotenv.config({ path: "./config/config.env" });

const allowedOrigins = [
  "https://foody-mern-restaurant.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/baharRoute", ReservationRouter);

dbconnection();

app.use(errorMiddleware);

export default app;
