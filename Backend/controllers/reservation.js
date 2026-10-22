import ErrorHandler from "../Error/Error.js";
import { Reservation } from "../Models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body;

  if (!firstName || !lastName || !email || !phone || !time || !date) {
    return next(new ErrorHandler("Please fil full data form ", 400));
  }
  try {
    await Reservation.create({ firstName, lastName, email, phone, date, time });
    res.status(200).json({
      success: true,
      message: "Reservation sent succesfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message,
      );
      return next(new ErrorHandler(validationErrors.join(" , "), 400));
    }
    return next(error);
  }
};
