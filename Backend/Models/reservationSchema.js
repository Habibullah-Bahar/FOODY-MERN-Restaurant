import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain at least 3 characters"],
    maxLength: [30, "First name cannot exceed 30 character"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "last name must contain at least 3 characters"],
    maxLength: [30, "last name cannot exceed 30 character"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone Number must contain at least 11 characters"],
    maxLength: [11, "Phone Number cannot exceed 11 characters"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
